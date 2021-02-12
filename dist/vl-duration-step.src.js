import {vlElement, define} from 'vl-ui-core';

/**
 * VlDurationStep
 * @class
 * @classdesc De step duration component stelt een moment tussen twee stappen voor.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-steps/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-steps/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-steps.html|Demo}
 *
 */
export class VlDurationStep extends vlElement(HTMLElement) {
  constructor() {
    super(`
      <li class="vl-duration-step">
        <slot name="content"></slot>
      </li>
    `);
  }

  template(index) {
    const template = this._element.cloneNode(true);
    template.querySelector('slot[name="content"]').name = `content-${index}`;
    return template;
  }
}

define('vl-duration-step', VlDurationStep);

