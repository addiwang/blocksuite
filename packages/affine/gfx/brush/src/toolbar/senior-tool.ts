import { SeniorToolExtension } from '@blocksuite/affine-widget-edgeless-toolbar';
import { t } from '@blocksuite/i18n';
import { html } from 'lit';

export const penSeniorTool = SeniorToolExtension('pen', ({ block }) => {
  return {
    name: t('pencil_tool'),
    content: html`<div class="pen-and-eraser">
      <edgeless-pen-tool-button .edgeless=${block}></edgeless-pen-tool-button>

      <edgeless-eraser-tool-button
        .edgeless=${block}
      ></edgeless-eraser-tool-button>
    </div> `,
  };
});
