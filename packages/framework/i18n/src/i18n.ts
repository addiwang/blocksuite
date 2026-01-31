import { signal } from '@preact/signals-core';
import en from './locales/en.js';
import zhCN from './locales/zh-CN.js';

export type Locale = 'en' | 'zh-CN';

const locales: Record<Locale, any> = {
    en,
    'zh-CN': zhCN,
};

class I18n {
    private _locale = signal<Locale>('zh-CN');

    set locale(value: Locale) {
        if (locales[value]) {
            this._locale.value = value;
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('blocksuite-locale', value);
            }
            try {
                // debug: expose current locale in console to help troubleshooting
                console.debug('[blocksuite i18n] locale set to', this._locale.value);
            } catch (e) {}
        }
    }

    get locale() {
        return this._locale.value;
    }

    constructor() {
        let resolved: Locale | null = null;

        // 1) localStorage wins
        if (typeof localStorage !== 'undefined') {
            const saved = localStorage.getItem('blocksuite-locale') as Locale | null;
            if (saved && locales[saved]) {
                resolved = saved;
            }
        }

        // 2) otherwise infer from browser language
        if (!resolved && typeof navigator !== 'undefined' && navigator.language) {
            resolved = navigator.language.startsWith('zh') ? 'zh-CN' : 'en';
        }

        // 3) apply resolved locale if valid
        if (resolved && locales[resolved]) {
            this._locale.value = resolved;
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('blocksuite-locale', resolved);
            }
            try {
                console.debug('[blocksuite i18n] resolved locale', this._locale.value);
            } catch (e) {}
        }

        // Expose for debugging in dev environment
        try {
            if (typeof window !== 'undefined') {
                (window as any).__blocksuite_i18n = this;
            }
        } catch (e) {}
    }

    t(key: string, data?: Record<string, any>): string {
        const keys = key.split('.');
        let result = locales[this._locale.value];

        for (const k of keys) {
            if (result && result[k] !== undefined) {
                result = result[k];
            } else {
                // Fallback to English
                result = locales['en'];
                for (const fallbackK of keys) {
                    if (result && result[fallbackK] !== undefined) {
                        result = result[fallbackK];
                    } else {
                        return key;
                    }
                }
                break;
            }
        }

        if (typeof result !== 'string') {
            return key;
        }

        if (data) {
            return result.replace(/{(\w+)}/g, (_, prop) => {
                return data[prop] !== undefined ? String(data[prop]) : `{${prop}}`;
            });
        }

        return result;
    }
}

export const i18n = new I18n();
export const t = i18n.t.bind(i18n);
