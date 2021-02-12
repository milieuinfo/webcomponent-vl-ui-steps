import {
  define,
  nativeVlElement,
} from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/@govflanders/vl-ui-util/dist/js/util.js';
import '/node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js';

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
export class VlStep extends nativeVlElement(HTMLLIElement) {
  static get _observedAttributes() {
    return ['type', 'toggleable', 'identifier', 'identifier-annotation', 'title', 'title-label', 'sub-title', 'title-annotation'];
  }

  static get _observedChildClassAttributes() {
    return ['disabled'];
  }

  constructor() {
    super();
    this.classList.add('vl-step');
    this.appendChild(this._template(`
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
        </div>`));
    this._processContent();
  }

  __contentTemplate() {
    return this._template(`
        <div class="vl-step__content-wrapper">
          <p id="content" class="vl-step__content">
          </p>
        </div>`);
  }

  _processContent() {
    const content = this.querySelector('[data-vl-content]');
    if (content) {
      const contentTemplate = this.__contentTemplate().firstElementChild;
      contentTemplate.querySelector('#content').appendChild(content);
      this._wrapperElement.appendChild(contentTemplate);
    }
  }

  /**
   * Geeft de step template.
   * @return {HTMLElement}
   */
  get template() {
    const template = this._element.cloneNode(true);
    if (this._isToggleable) {
      vl.accordion.dress(template);
      template.querySelector('#content').addEventListener('click', (e) => e.stopPropagation());
    }
    return template;
  }

  get _iconElement() {
    return this.querySelector('#icon');
  }

  get _subIconElement() {
    return this.querySelector('#sub-icon');
  }

  get _wrapperElement() {
    return this.querySelector('.vl-step__wrapper');
  }

  get _headerElement() {
    return this.querySelector('.vl-step__wrapper > .vl-step__header');
  }

  get _titleElement() {
    return this.querySelector('#title');
  }

  get _titleLabelElement() {
    return this.querySelector('#title-label');
  }

  get _titleAnnotationElement() {
    return this.querySelector('#title-annotation');
  }

  get _subTitleElement() {
    return this.querySelector('#sub-title');
  }

  get _contentElement() {
    return this.querySelector('#content');
  }

  get _classPrefix() {
    return 'vl-step--';
  }

  get _isToggleable() {
    return this.hasAttribute('toggleable');
  }

  _getToggleableHeaderHTML() {
    const title = this.getAttribute('data-vl-title') || '';
    const titleLabel = this.getAttribute('data-vl-title-label') || '';
    return `
      <button class="vl-step__header js-vl-accordion__toggle">
        <div class="vl-step__header__titles">
          <h3 class="vl-step__title">
            <span id="title">${title}</span>
            <span>
              <span id="title-label">${titleLabel}</span>
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
  _identifierChangedCallback(oldValue, newValue) {
    if (newValue) {
      this._iconElement.innerText = newValue;
    }
  }
  _identifierAnnotationChangedCallback(oldValue, newValue) {
    console.log('test');
    console.log(newValue);
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
      this._titleAnnotationElement.classList.remove('vl-u-visually-hidden');
    }
  }

  _toggleableChangedCallback(oldValue, newValue) {
    if (newValue != undefined) {
      this._element.classList.add('vl-step--accordion');
      this._element.classList.add('js-vl-accordion');
      this._headerElement.remove();
      this._wrapperElement.insertAdjacentHTML('afterbegin', this._getToggleableHeaderHTML());
      // this.setAttribute('data-vl-title', this.getAttribute('data-vl-title'));
      // this.__processSlot(this.querySelector('[slot="title"]'), (slot) => this._titleElement.prepend(slot));
      // this.__processSlot(this.querySelector('[slot="title-label"]'), (slot) => this._titleLabelElement.prepend(slot));
    }
  }

  _processSlots() {
    // this.__processSlot(this.querySelector('[slot="identifier"]'), (slot) => this._iconElement.prepend(slot));
    // this.__processSlot(this.querySelector('[slot="identifier-annotation"]'), (slot) => this._subIconElement.append(slot));
    // this.__processSlot(this.querySelector('[slot="title"]'), (slot) => this._titleElement.prepend(slot));
    // this.__processSlot(this.querySelector('[slot="title-label"]'), (slot) => this._titleLabelElement.prepend(slot));
    // this.__processSlot(this.querySelector('[slot="title-annotation"]'), (slot) => this._titleAnnotationElement.append(slot), () => this._titleAnnotationElement.hidden = true);
    // this.__processSlot(this.querySelector('[slot="sub-title"]'), (slot) => this._subTitleElement.append(slot));
    // this.__processSlot(this.querySelector('[slot="content"]'), (slot) => this._contentElement.append(slot), () => this._contentElement.hidden = true);
  }

  __processSlot(slot, success, error) {
    if (slot && success) {
      success(slot);
    } else if (error) {
      error();
    }
  }
}

define('vl-step', VlStep, {extends: 'li'});
