import en from '../packages/framework/i18n/src/locales/en';
import zhCN from '../packages/framework/i18n/src/locales/zh-CN';

type AnyObject = Record<string, unknown>;

function isPlainObject(value: unknown): value is AnyObject {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    Object.prototype.toString.call(value) === '[object Object]'
  );
}

function flatten(obj: unknown, prefix = ''): Map<string, unknown> {
  const out = new Map<string, unknown>();

  if (!isPlainObject(obj)) return out;

  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;

    if (isPlainObject(value)) {
      for (const [k, v] of flatten(value, path)) out.set(k, v);
    } else {
      out.set(path, value);
    }
  }

  return out;
}

const enFlat = flatten(en);
const zhFlat = flatten(zhCN);

const missingInZh: string[] = [];
const extraInZh: string[] = [];
const sameAsEn: string[] = [];

for (const [key, enValue] of enFlat) {
  if (!zhFlat.has(key)) {
    missingInZh.push(key);
    continue;
  }

  const zhValue = zhFlat.get(key);
  if (typeof enValue === 'string' && typeof zhValue === 'string') {
    if (enValue.trim() === zhValue.trim()) {
      sameAsEn.push(key);
    }
  }
}

for (const key of zhFlat.keys()) {
  if (!enFlat.has(key)) extraInZh.push(key);
}

missingInZh.sort();
extraInZh.sort();
sameAsEn.sort();

console.log(`en leaf keys: ${enFlat.size}`);
console.log(`zh-CN leaf keys: ${zhFlat.size}`);
console.log(`missing in zh-CN: ${missingInZh.length}`);
console.log(`extra in zh-CN: ${extraInZh.length}`);
console.log(`same as en (likely untranslated): ${sameAsEn.length}`);

if (missingInZh.length) {
  console.log('\n--- Missing keys in zh-CN ---');
  console.log(missingInZh.join('\n'));
}

if (sameAsEn.length) {
  console.log('\n--- Keys whose zh-CN equals en (likely untranslated) ---');
  console.log(sameAsEn.join('\n'));
}

if (extraInZh.length) {
  console.log('\n--- Extra keys in zh-CN (not in en) ---');
  console.log(extraInZh.join('\n'));
}
