import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlStep} from '/node_modules/vl-ui-steps/dist/vl-step.js';
import {VlDurationStep} from '/node_modules/vl-ui-steps/dist/vl-duration-step.js';
import '/node_modules/vl-ui-steps/dist/vl-step.js';
import '/node_modules/vl-ui-steps/dist/vl-duration-step.js';

/**
 * VlSteps
 * @class
 * @classdesc De steps component bevat een verticale lijst van genummerde stappen. Stappen kunnen gebruikt worden om de gebruiker stap voor stap door een procedure te begeleiden.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-timeline - Attribuut wordt gebruikt om aan te geven dat de stappen een tijdlijn voorstellen.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-steps/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-steps/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-steps.html|Demo}
 */
export class VlSteps extends vlElement(HTMLElement) {
  static get _observedChildClassAttributes() {
    return ['timeline'];
  }

  constructor() {
    super(`
      <style>
        @import '/node_modules/vl-ui-steps/dist/style.css';
      </style>
      <ul id="steps" class="vl-steps"></ul>
    `);
  }

  connectedCallback() {
    this._observer = this.__observeChildElements(this.__processStepsIfNecessary());
    this._processSteps();
  }

  __processStepsIfNecessary() {
    return (mutations) => {
      if (mutations.flatMap((mutation) => [...mutation.removedNodes, ...mutation.addedNodes])
          .filter((node) =>
            node instanceof VlStep || node instanceof VlDurationStep).length > 0) {
        this._processSteps();
      }
    };
  }

  disconnectedCallback() {
    this._observer.disconnect();
  }

  get _stepsElement() {
    return this._shadow.querySelector('#steps');
  }

  get _classPrefix() {
    return 'vl-steps--';
  }

  _processSteps() {
    customElements.whenDefined('vl-step').then(() => {
      customElements.whenDefined('vl-duration-step').then(() => {
        this._stepsElement.innerHTML = ``;
        this.__removeAllCopiedSlots();
        this.querySelectorAll('vl-step, vl-duration-step').forEach((item, index) => {
          this._stepsElement.append(item.template(index));
          const contentSlot = item.querySelector(`[slot="content"]`);
          // unhide slot if already once processed.
          contentSlot.removeAttribute('hidden');
          if (contentSlot) {
            this.__copyContentSlotWithCorrectNameAndHide(contentSlot, index);
          }
        });
      });
    });
  }

  /**
   * This method copies the content slot and hides the original. This is to
   * let the slot have the correct name, so it's shown in the correct step when
   * placed in the shadow dom.
   * @param {Node} contentSlot - De originele content slot
   * @param {number} index - De index van de content slot in de steps.
   * @private
   */
  __copyContentSlotWithCorrectNameAndHide(contentSlot, index) {
    const contentSlotCopy = contentSlot.cloneNode(true);
    contentSlotCopy.setAttribute('slot', `content-${index}`);
    this.append(contentSlotCopy);
    contentSlot.setAttribute('hidden', '');
  }

  __removeAllCopiedSlots() {
    this.querySelectorAll(`[slot^="content-"]`).forEach((slot) => slot.remove());
  }

  __observeChildElements(callback) {
    const observer = new MutationObserver(callback);
    observer.observe(this, {childList: true, attributes: true, subtree: true});
    return observer;
  }
}

define('vl-steps', VlSteps);
