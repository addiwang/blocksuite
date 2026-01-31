import { SeniorToolExtension } from '@blocksuite/affine-widget-edgeless-toolbar';
import { t } from '@blocksuite/i18n';
import { html } from 'lit';

export const templateSeniorTool = SeniorToolExtension(
  'template',
  ({ block }) => {
    return {
      name: t('template'),
      content: html`<edgeless-template-button .edgeless=${block}>
      </edgeless-template-button>`,
    };
  }
);
