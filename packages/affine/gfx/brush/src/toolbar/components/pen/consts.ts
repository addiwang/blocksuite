import {
  EdgelessBrushDarkIcon,
  EdgelessBrushLightIcon,
  EdgelessHighlighterDarkIcon,
  EdgelessHighlighterLightIcon,
} from './icons';
import type { Pen } from './types';
import { t } from '@blocksuite/i18n';

export const penIconMap = {
  dark: {
    brush: EdgelessBrushDarkIcon,
    highlighter: EdgelessHighlighterDarkIcon,
  },
  light: {
    brush: EdgelessBrushLightIcon,
    highlighter: EdgelessHighlighterLightIcon,
  },
};

export const penInfoMap: { [k in Pen]: { tip: string; shortcut: string } } = {
  brush: {
    tip: t('pencil_tool'),
    shortcut: 'P',
  },
  highlighter: {
    tip: t('highlighter_tool'),
    shortcut: '⇧ P',
  },
};
