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
 * @property {boolean} data-vl-toggleable - Attribuut wordt gebruikt om ervoor te zorgen dat de textarea getoond wordt als een block element en bijgevolg de breedte van de parent zal aannemen.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-steps/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-steps/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-steps.html|Demo}
 *
 */
export class VlStep extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['type', 'toggleable', 'identifier', 'identifier-annotation', 'title', 'title-label', 'sub-title', 'title-annotation'];
  }

  static get _observedChildClassAttributes() {
    return ['disabled'];
  }

  constructor() {
    super(`
      <li class="vl-step">
        <div class="vl-step__icon">
          <span id="icon"></span>
          <span class="vl-step__icon__sub">
            <span id="sub-icon"></span>
          </span>
        </div>
        <div class="vl-step__wrapper">
          <div class="vl-step__header">
            <div class="vl-step__header__titles">
              <h3 class="vl-step__title">
                <span id="title"></span>
                <span>
                  <span id="title-label"></span>
                </span>
                <span class="vl-step__title__annotation vl-u-visually-hidden">
                  <span id="title-annotation"></span>
                </span>
              </h3>
              <p class="vl-step__subtitle">
                <span id="sub-title"></span>
              </p>
            </div>
          </div>
          <div class="vl-step__content-wrapper">
            <p id="content" class="vl-step__content">
              <slot name="content"></slot>
            </p>
          </div>
        </div>
      </li>
    `);
  }

  /**
   * Geeft de step template.
   * @param {Number} index - position of element in parent element
   * @return {HTMLElement}
   */
  template(index) {
    const template = this._element.cloneNode(true);
    template.querySelector('slot[name="content"]').name = `content-${index}`;
    if (this._isToggleable) {
      vl.accordion.dress(template);
      template.querySelector('#content').addEventListener('click', (e) => e.stopPropagation());
    }
    return template;
  }

  get _iconElement() {
    return this._shadow.querySelector('#icon');
  }

  get _subIconElement() {
    return this._shadow.querySelector('#sub-icon');
  }

  get _wrapperElement() {
    return this._shadow.querySelector('.vl-step__wrapper');
  }

  get _headerElement() {
    return this._wrapperElement.querySelector('.vl-step__header');
  }

  get _titleElement() {
    return this._shadow.querySelector('#title');
  }

  get _titleLabelElement() {
    return this._shadow.querySelector('#title-label');
  }

  get _titleAnnotationElement() {
    return this._shadow.querySelector('#title-annotation');
  }

  get _subTitleElement() {
    return this._shadow.querySelector('#sub-title');
  }

  get _contentElement() {
    return this._shadow.querySelector('#content');
  }

  get _classPrefix() {
    return 'vl-step--';
  }

  get _isToggleable() {
    return this.hasAttribute('toggleable');
  }

  _getToggleableHeaderHTML() {
    return `
      <button class="vl-step__header js-vl-accordion__toggle">
        <div class="vl-step__header__titles">
          <h3 class="vl-step__title">
            <span id="title"></span>
            <span>
              <span id="title-label"></span>
            </span>
          </h3>
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

  _toggleableChangedCallback(oldValue, newValue) {
    if (newValue != undefined) {
      this._element.classList.add('vl-step--accordion');
      this._element.classList.add('js-vl-accordion');
      this._headerElement.remove();
      this._wrapperElement.insertAdjacentHTML('afterbegin', this._getToggleableHeaderHTML());
    }
  }

  _identifierChangedCallback(oldValue, newValue) {
    if (newValue) {
      this._iconElement.innerText = newValue;
    }
  }

  _identifierAnnotationChangedCallback(oldValue, newValue) {
    if (newValue) {
      this._subIconElement.innerText = newValue;
    }
  }
  _titleChangedCallback(oldValue, newValue) {
    if (newValue) {
      this._titleElement.innerText = newValue;
    }
  }
  _titleLabelChangedCallback(oldValue, newValue) {
    if (newValue) {
      this._titleLabelElement.innerText = newValue;
    }
  }
  _subTitleChangedCallback(oldValue, newValue) {
    if (newValue) {
      this._subTitleElement.innerText = newValue;
    }
  }

  _titleAnnotationChangedCallback(oldValue, newValue) {
    if (newValue) {
      this._titleAnnotationElement.innerText = newValue;
      this._titleAnnotationElement.parentNode.classList.remove('vl-u-visually-hidden');
    }
  }
}

define('vl-step', VlStep);

