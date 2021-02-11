import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

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
       <style>
        @import '/src/style.css';
      </style>
      <li class="vl-duration-step">
        <slot></slot>
      </li>
    `);
  }

  connectedCallback() {
    this._processSlots();
  }

  get template() {
    return this._element.cloneNode(true);
  }

  _processSlots() {
    // [...this.childNodes].forEach((child) => this._element.append(child.cloneNode(true)));
  }
}

define('vl-duration-step', VlDurationStep);
