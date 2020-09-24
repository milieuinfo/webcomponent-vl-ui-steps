import {vlElement, define} from 'vl-ui-core';
import '@govflanders/vl-ui-util/dist/js/util.js';
import '@govflanders/vl-ui-accordion/dist/js/accordion.js';

/**
 * VlStep
 * @class
 * @classdesc De step component stelt een enkele stap voor in de steps component.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-disabled - Attribuut om aan te geven dat de stap niet toegankelijk is.
 * @property {(success | warning | error)} data-vl-type - Attribuut bepaalt het type van de stap.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-steps/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-steps/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-steps.html|Demo}
 *
 */
export class VlStep extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['type', 'accordion'];
  }

  static get _observedChildClassAttributes() {
    return ['disabled'];
  }

  constructor() {
    super(`
      <li class="vl-step">
        <div id="icon" class="vl-step__icon">
          <span id="sub-icon" class="vl-step__icon__sub"></span>
        </div>
        <div class="vl-step__wrapper">
          <div class="vl-step__header">
            <div class="vl-step__header__titles">
              <h3 id="title" class="vl-step__title">
                <span id="title-annotation" class="vl-step__title__annotation"></span>
              </h3>
              <p id="sub-title" class="vl-step__subtitle"></p>
            </div>
          </div>
          <div class="vl-step__content-wrapper">
            <p id="content" class="vl-step__content"></p>
          </div>
        </div>
      </li>
    `);
    this._processSlots();
  }

  get template() {
    const template = this._element.cloneNode(true);
    if (this._isAccordion) {
      vl.accordion.dress(template);
    }
    return template;
  }

  get _iconElement() {
    return this._shadow.querySelector('#icon');
  }

  get _subIconElement() {
    return this._iconElement.querySelector('#sub-icon');
  }

  get _wrapperElement() {
    return this._shadow.querySelector('.vl-step__wrapper');
  }

  get _headerElement() {
    return this._wrapperElement.querySelector('.vl-step__header');
  }

  get _titleElement() {
    return this._headerElement.querySelector('#title');
  }

  get _titleAnnotationElement() {
    return this._headerElement.querySelector('#title-annotation');
  }

  get _subTitleElement() {
    return this._headerElement.querySelector('#sub-title');
  }

  get _contentElement() {
    return this._shadow.querySelector('#content');
  }

  get _classPrefix() {
    return 'vl-step--';
  }

  get _isAccordion() {
    return this.hasAttribute('accordion');
  }

  _getAccordionHeaderHTML() {
    return `
      <button class="vl-step__header js-vl-accordion__toggle">
        <div class="vl-step__header__titles">
          <h3 id="title" class="vl-step__title"></h3>
        </div>
        <div class="vl-step__header__info" aria-hidden="true">
          <em class="vl-step__accordion-toggle"></em>
        </div>
      </button>
    `;
  }

  _typeChangedCallback(oldValue, newValue) {
    this._changeClass(this._element, oldValue, newValue, this._classPrefix);
  }

  _accordionChangedCallback(oldValue, newValue) {
    if (newValue != undefined) {
      this._element.classList.add('vl-step--accordion');
      this._element.classList.add('js-vl-accordion');
      this._headerElement.remove();
      this._wrapperElement.insertAdjacentHTML('afterbegin', this._getAccordionHeaderHTML());
      this.__processSlot(this.querySelector('[slot="title"]'), (slot) => this._titleElement.prepend(slot));
    }
  }

  _processSlots() {
    this.__processSlot(this.querySelector('[slot="identifier"]'), (slot) => this._iconElement.prepend(slot));
    this.__processSlot(this.querySelector('[slot="identifier-annotation"]'), (slot) => this._subIconElement.append(slot));
    this.__processSlot(this.querySelector('[slot="title"]'), (slot) => this._titleElement.prepend(slot));
    this.__processSlot(this.querySelector('[slot="title-annotation"]'), (slot) => this._titleAnnotationElement.append(slot), () => this._titleAnnotationElement.hidden = true);
    this.__processSlot(this.querySelector('[slot="sub-title"]'), (slot) => this._subTitleElement.append(slot));
    this.__processSlot(this.querySelector('[slot="content"]'), (slot) => this._contentElement.append(slot), () => this._contentElement.hidden = true);
  }

  __processSlot(slot, success, error) {
    if (slot && success) {
      success(slot.cloneNode(true));
    } else if (error) {
      error();
    }
  }
}

define('vl-step', VlStep);

