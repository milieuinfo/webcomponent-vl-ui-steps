import {
  define,
  nativeVlElement,
} from 'vl-ui-core';
import '../dist/vl-step.src.js';
import '../dist/vl-duration-step.src.js';

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
export class VlSteps extends nativeVlElement(HTMLUListElement) {
  static get _observedChildClassAttributes() {
    return ['timeline'];
  }

  constructor() {
    super();
    this.classList.add('vl-steps');
    this.id = 'steps';
  }

  // connectedCallback() {
  // this._observer = this.__observeChildElements(() => this._processSteps());
  // }

  disconnectedCallback() {
    // this._observer.disconnect();
  }

  // get _stepsElement() {
  //   return this._shadow.querySelector('#steps');
  // }

  get _classPrefix() {
    return 'vl-steps--';
  }

  // _processSteps() {
  //   customElements.whenDefined('vl-step').then(() => {
  //     customElements.whenDefined('vl-duration-step').then(() => {
  //       this._stepsElement.innerHTML = ``;
  //       this.querySelectorAll('vl-step, vl-duration-step').forEach((item) => this._stepsElement.append(item.template));
  //     });
  //   });
  // }

  // __observeChildElements(callback) {
  //   const observer = new MutationObserver(callback);
  //   observer.observe(this, {childList: true, attributes: true, subtree: true});
  //   return observer;
  // }
}

define('vl-steps', VlSteps, {extends: 'ul'});

