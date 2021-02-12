import {vlElement, define} from 'vl-ui-core';
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
export class VlSteps extends vlElement(HTMLElement) {
  static get _observedChildClassAttributes() {
    return ['timeline'];
  }

  constructor() {
    super(`
      <style>
@charset "UTF-8";
:root {
  --vl-theme-primary-color: #ffe615;
  --vl-theme-primary-color-60: #fff073;
  --vl-theme-primary-color-70: #ffee5b;
  --vl-theme-primary-color-rgba-30: rgba(255, 230, 21, 0.3);
  --vl-theme-fg-color: #333332;
  --vl-theme-fg-color-60: #858584;
  --vl-theme-fg-color-70: #707070
}

.vl-vi::after, .vl-vi::before {
  font-family: vlaanderen-icon !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  text-decoration: none;
  text-transform: none;
  display: inline-block;
  vertical-align: middle
}

.vl-vi.vl-vi-u-180deg::before {
  display: inline-block;
  transform: rotate(180deg);
  vertical-align: middle
}

.vl-vi-u-xs::before {
  font-size: .8rem
}

.vl-vi-u-s::before {
  font-size: 1.3rem
}

.vl-vi-u-m::before {
  font-size: 1.7rem
}

.vl-vi-u-l::before {
  font-size: 2rem
}

.vl-vi-u-xl::before {
  font-size: 2.2rem
}

.vl-vi-u-90deg::before {
  display: inline-block;
  transform: rotate(90deg)
}

.vl-vi-u-180deg::before {
  display: inline-block;
  transform: rotate(180deg)
}

a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline
}

strong {
  font-weight: 500
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block
}

body {
  line-height: 1
}

ol, ul {
  list-style: none
}

blockquote, q {
  quotes: none
}

blockquote:after, blockquote:before, q:after, q:before {
  content: "";
  content: none
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

button {
  background: 0 0
}

img {
  max-width: 100%
}

button::-moz-focus-inner {
  border: 0
}

:-moz-submit-invalid {
  box-shadow: none
}

:-moz-ui-invalid {
  box-shadow: none
}

* {
  box-sizing: border-box
}

::after, ::before {
  box-sizing: inherit
}

html {
  min-height: 100%;
  font-family: "Flanders Art Sans", sans-serif;
  font-size: 62.5%
}

body {
  width: 100%;
  min-height: 100%;
  background: #fff;
  color: #333332;
  font-size: 1.8rem;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: none
}

@media screen and (max-width: 767px) {
  body {
    font-size: 1.6rem;
    line-height: 1.33
  }
}

body::before {
  display: none;
  content: "large"
}

@media screen and (max-width: 1023px) {
  body::before {
    content: "medium"
  }
}

@media screen and (min-width: 767px) {
  body::before {
    content: "medium-up"
  }
}

@media screen and (max-width: 767px) {
  body::before {
    content: "small"
  }
}

@media screen and (max-width: 500px) {
  body::before {
    content: "xsmall"
  }
}

@media screen and (min-width: 1600px) {
  body::before {
    content: "xlarge"
  }
}

@font-face {
  font-family: "Flanders Art Sans";
  src: url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Light.woff2) format("woff2"), url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Light.woff) format("woff");
  font-weight: 300;
  font-style: normal
}

@font-face {
  font-family: "Flanders Art Sans";
  src: url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Regular.woff2) format("woff2"), url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Regular.woff) format("woff");
  font-weight: 400;
  font-style: normal
}

@font-face {
  font-family: "Flanders Art Sans";
  src: url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Medium.woff2) format("woff2"), url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Medium.woff) format("woff");
  font-weight: 500;
  font-style: normal
}

@font-face {
  font-family: "Flanders Art Sans";
  src: url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Bold.woff2) format("woff2"), url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSans-Bold.woff) format("woff");
  font-weight: 700;
  font-style: normal
}

@font-face {
  font-family: "Flanders Art Sans";
  src: url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Light.woff2) format("woff2"), url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Light.woff) format("woff");
  font-weight: 300;
  font-style: italic
}

@font-face {
  font-family: "Flanders Art Sans";
  src: url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Regular.woff2) format("woff2"), url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Regular.woff) format("woff");
  font-weight: 400;
  font-style: italic
}

@font-face {
  font-family: "Flanders Art Sans";
  src: url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Medium.woff2) format("woff2"), url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Medium.woff) format("woff");
  font-weight: 500;
  font-style: italic
}

@font-face {
  font-family: "Flanders Art Sans";
  src: url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Bold.woff2) format("woff2"), url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSansItalic-Bold.woff) format("woff");
  font-weight: 700;
  font-style: italic
}

@font-face {
  font-family: "Flanders Art Serif";
  src: url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Light.woff2) format("woff2"), url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Light.woff) format("woff");
  font-weight: 300;
  font-style: normal
}

@font-face {
  font-family: "Flanders Art Serif";
  src: url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Regular.woff2) format("woff2"), url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Regular.woff) format("woff");
  font-weight: 400;
  font-style: normal
}

@font-face {
  font-family: "Flanders Art Serif";
  src: url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Medium.woff2) format("woff2"), url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Medium.woff) format("woff");
  font-weight: 500;
  font-style: normal
}

@font-face {
  font-family: "Flanders Art Serif";
  src: url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Bold.woff2) format("woff2"), url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/flandersart/FlandersArtSerif-Bold.woff) format("woff");
  font-weight: 700;
  font-style: normal
}

@font-face {
  font-family: vlaanderen-icon;
  src: url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/iconfont/3.12.3/vlaanderen-icon.woff2) format("woff2"), url(https://cdn.milieuinfo.be/vlaanderen-font/LATEST/font/iconfont/3.12.3/vlaanderen-icon.woff) format("woff");
  font-weight: 400;
  font-style: normal
}

.vl-vi-add::before {
  content: ""
}

.vl-vi-add--after::after {
  content: ""
}

.vl-vi-addressbook::before {
  content: ""
}

.vl-vi-addressbook--after::after {
  content: ""
}

.vl-vi-airplane::before {
  content: ""
}

.vl-vi-airplane--after::after {
  content: ""
}

.vl-vi-alarm-silent::before {
  content: ""
}

.vl-vi-alarm-silent--after::after {
  content: ""
}

.vl-vi-alarm::before {
  content: ""
}

.vl-vi-alarm--after::after {
  content: ""
}

.vl-vi-alert-circle-filled::before {
  content: ""
}

.vl-vi-alert-circle-filled--after::after {
  content: ""
}

.vl-vi-alert-circle::before {
  content: ""
}

.vl-vi-alert-circle--after::after {
  content: ""
}

.vl-vi-alert-small::before {
  content: ""
}

.vl-vi-alert-small--after::after {
  content: ""
}

.vl-vi-alert-triangle-filled::before {
  content: ""
}

.vl-vi-alert-triangle-filled--after::after {
  content: ""
}

.vl-vi-alert-triangle::before {
  content: ""
}

.vl-vi-alert-triangle--after::after {
  content: ""
}

.vl-vi-align-center::before {
  content: ""
}

.vl-vi-align-center--after::after {
  content: ""
}

.vl-vi-align-justify::before {
  content: ""
}

.vl-vi-align-justify--after::after {
  content: ""
}

.vl-vi-align-left::before {
  content: ""
}

.vl-vi-align-left--after::after {
  content: ""
}

.vl-vi-align-right::before {
  content: ""
}

.vl-vi-align-right--after::after {
  content: ""
}

.vl-vi-area::before {
  content: ""
}

.vl-vi-area--after::after {
  content: ""
}

.vl-vi-arrange-1-to-9::before {
  content: ""
}

.vl-vi-arrange-1-to-9--after::after {
  content: ""
}

.vl-vi-arrange-9-to-1::before {
  content: ""
}

.vl-vi-arrange-9-to-1--after::after {
  content: ""
}

.vl-vi-arrange-a-to-z::before {
  content: ""
}

.vl-vi-arrange-a-to-z--after::after {
  content: ""
}

.vl-vi-arrange-amount-large-to-small::before {
  content: ""
}

.vl-vi-arrange-amount-large-to-small--after::after {
  content: ""
}

.vl-vi-arrange-amount-small-to-large::before {
  content: ""
}

.vl-vi-arrange-amount-small-to-large--after::after {
  content: ""
}

.vl-vi-arrange-z-to-a::before {
  content: ""
}

.vl-vi-arrange-z-to-a--after::after {
  content: ""
}

.vl-vi-arrow-bottom::before {
  content: ""
}

.vl-vi-arrow-bottom--after::after {
  content: ""
}

.vl-vi-arrow-down-fat::before {
  content: ""
}

.vl-vi-arrow-down-fat--after::after {
  content: ""
}

.vl-vi-arrow-down-thin::before {
  content: ""
}

.vl-vi-arrow-down-thin--after::after {
  content: ""
}

.vl-vi-arrow-down::before {
  content: ""
}

.vl-vi-arrow-down--after::after {
  content: ""
}

.vl-vi-arrow-freemove::before {
  content: ""
}

.vl-vi-arrow-freemove--after::after {
  content: ""
}

.vl-vi-arrow-left-fat::before {
  content: ""
}

.vl-vi-arrow-left-fat--after::after {
  content: ""
}

.vl-vi-arrow-left-thin::before {
  content: ""
}

.vl-vi-arrow-left-thin--after::after {
  content: ""
}

.vl-vi-arrow-left::before {
  content: ""
}

.vl-vi-arrow-left--after::after {
  content: ""
}

.vl-vi-arrow-right-fat::before {
  content: ""
}

.vl-vi-arrow-right-fat--after::after {
  content: ""
}

.vl-vi-arrow-right-thin::before {
  content: ""
}

.vl-vi-arrow-right-thin--after::after {
  content: ""
}

.vl-vi-arrow-right::before {
  content: ""
}

.vl-vi-arrow-right--after::after {
  content: ""
}

.vl-vi-arrow-thin::before {
  content: ""
}

.vl-vi-arrow-thin--after::after {
  content: ""
}

.vl-vi-arrow-up-fat::before {
  content: ""
}

.vl-vi-arrow-up-fat--after::after {
  content: ""
}

.vl-vi-arrow-up-thin::before {
  content: ""
}

.vl-vi-arrow-up-thin--after::after {
  content: ""
}

.vl-vi-arrow-up::before {
  content: ""
}

.vl-vi-arrow-up--after::after {
  content: ""
}

.vl-vi-arrow::before {
  content: ""
}

.vl-vi-arrow--after::after {
  content: ""
}

.vl-vi-asterisk::before {
  content: ""
}

.vl-vi-asterisk--after::after {
  content: ""
}

.vl-vi-audio-description::before {
  content: ""
}

.vl-vi-audio-description--after::after {
  content: ""
}

.vl-vi-back::before {
  content: ""
}

.vl-vi-back--after::after {
  content: ""
}

.vl-vi-ban::before {
  content: ""
}

.vl-vi-ban--after::after {
  content: ""
}

.vl-vi-bell::before {
  content: ""
}

.vl-vi-bell--after::after {
  content: ""
}

.vl-vi-bike-closed-criterium::before {
  content: ""
}

.vl-vi-bike-closed-criterium--after::after {
  content: ""
}

.vl-vi-bike-open-criterium::before {
  content: ""
}

.vl-vi-bike-open-criterium--after::after {
  content: ""
}

.vl-vi-bike::before {
  content: ""
}

.vl-vi-bike--after::after {
  content: ""
}

.vl-vi-bin::before {
  content: ""
}

.vl-vi-bin--after::after {
  content: ""
}

.vl-vi-binoculars::before {
  content: ""
}

.vl-vi-binoculars--after::after {
  content: ""
}

.vl-vi-boat-ship::before {
  content: ""
}

.vl-vi-boat-ship--after::after {
  content: ""
}

.vl-vi-bold::before {
  content: ""
}

.vl-vi-bold--after::after {
  content: ""
}

.vl-vi-book::before {
  content: ""
}

.vl-vi-book--after::after {
  content: ""
}

.vl-vi-bookmark-alt-1::before {
  content: ""
}

.vl-vi-bookmark-alt-1--after::after {
  content: ""
}

.vl-vi-bookmark-alt-2::before {
  content: ""
}

.vl-vi-bookmark-alt-2--after::after {
  content: ""
}

.vl-vi-bookmark::before {
  content: ""
}

.vl-vi-bookmark--after::after {
  content: ""
}

.vl-vi-breadcrumb-separator::before {
  content: ""
}

.vl-vi-breadcrumb-separator--after::after {
  content: ""
}

.vl-vi-briefcase::before {
  content: ""
}

.vl-vi-briefcase--after::after {
  content: ""
}

.vl-vi-building-big::before {
  content: ""
}

.vl-vi-building-big--after::after {
  content: ""
}

.vl-vi-building::before {
  content: ""
}

.vl-vi-building--after::after {
  content: ""
}

.vl-vi-bullet::before {
  content: ""
}

.vl-vi-bullet--after::after {
  content: ""
}

.vl-vi-burger-alt::before {
  content: ""
}

.vl-vi-burger-alt--after::after {
  content: ""
}

.vl-vi-burger::before {
  content: ""
}

.vl-vi-burger--after::after {
  content: ""
}

.vl-vi-burgerprofiel::before {
  content: ""
}

.vl-vi-burgerprofiel--after::after {
  content: ""
}

.vl-vi-bus::before {
  content: ""
}

.vl-vi-bus--after::after {
  content: ""
}

.vl-vi-business-graph-bar::before {
  content: ""
}

.vl-vi-business-graph-bar--after::after {
  content: ""
}

.vl-vi-business-graph-pie::before {
  content: ""
}

.vl-vi-business-graph-pie--after::after {
  content: ""
}

.vl-vi-cake::before {
  content: ""
}

.vl-vi-cake--after::after {
  content: ""
}

.vl-vi-calculator::before {
  content: ""
}

.vl-vi-calculator--after::after {
  content: ""
}

.vl-vi-calendar-add::before {
  content: ""
}

.vl-vi-calendar-add--after::after {
  content: ""
}

.vl-vi-calendar-check::before {
  content: ""
}

.vl-vi-calendar-check--after::after {
  content: ""
}

.vl-vi-calendar-subtract::before {
  content: ""
}

.vl-vi-calendar-subtract--after::after {
  content: ""
}

.vl-vi-calendar::before {
  content: ""
}

.vl-vi-calendar--after::after {
  content: ""
}

.vl-vi-calendar_check::before {
  content: ""
}

.vl-vi-calendar_check--after::after {
  content: ""
}

.vl-vi-calendar_date::before {
  content: ""
}

.vl-vi-calendar_date--after::after {
  content: ""
}

.vl-vi-camera::before {
  content: ""
}

.vl-vi-camera--after::after {
  content: ""
}

.vl-vi-car::before {
  content: ""
}

.vl-vi-car--after::after {
  content: ""
}

.vl-vi-chat-bubble-square-alt::before {
  content: ""
}

.vl-vi-chat-bubble-square-alt--after::after {
  content: ""
}

.vl-vi-chat-bubble-square::before {
  content: ""
}

.vl-vi-chat-bubble-square--after::after {
  content: ""
}

.vl-vi-chat-help::before {
  content: ""
}

.vl-vi-chat-help--after::after {
  content: ""
}

.vl-vi-chat::before {
  content: ""
}

.vl-vi-chat--after::after {
  content: ""
}

.vl-vi-check-circle::before {
  content: ""
}

.vl-vi-check-circle--after::after {
  content: ""
}

.vl-vi-check-filled::before {
  content: ""
}

.vl-vi-check-filled--after::after {
  content: ""
}

.vl-vi-check-small::before {
  content: ""
}

.vl-vi-check-small--after::after {
  content: ""
}

.vl-vi-check-thin::before {
  content: ""
}

.vl-vi-check-thin--after::after {
  content: ""
}

.vl-vi-check::before {
  content: ""
}

.vl-vi-check--after::after {
  content: ""
}

.vl-vi-child::before {
  content: ""
}

.vl-vi-child--after::after {
  content: ""
}

.vl-vi-clock::before {
  content: ""
}

.vl-vi-clock--after::after {
  content: ""
}

.vl-vi-close-light::before {
  content: ""
}

.vl-vi-close-light--after::after {
  content: ""
}

.vl-vi-close-small::before {
  content: ""
}

.vl-vi-close-small--after::after {
  content: ""
}

.vl-vi-close::before {
  content: ""
}

.vl-vi-close--after::after {
  content: ""
}

.vl-vi-cloud-download::before {
  content: ""
}

.vl-vi-cloud-download--after::after {
  content: ""
}

.vl-vi-cloud-upload::before {
  content: ""
}

.vl-vi-cloud-upload--after::after {
  content: ""
}

.vl-vi-cloud::before {
  content: ""
}

.vl-vi-cloud--after::after {
  content: ""
}

.vl-vi-code-branch::before {
  content: ""
}

.vl-vi-code-branch--after::after {
  content: ""
}

.vl-vi-coffee-cup::before {
  content: ""
}

.vl-vi-coffee-cup--after::after {
  content: ""
}

.vl-vi-cog::before {
  content: ""
}

.vl-vi-cog--after::after {
  content: ""
}

.vl-vi-coin-stack::before {
  content: ""
}

.vl-vi-coin-stack--after::after {
  content: ""
}

.vl-vi-compass::before {
  content: ""
}

.vl-vi-compass--after::after {
  content: ""
}

.vl-vi-computer-screen::before {
  content: ""
}

.vl-vi-computer-screen--after::after {
  content: ""
}

.vl-vi-confluence::before {
  content: ""
}

.vl-vi-confluence--after::after {
  content: ""
}

.vl-vi-construction-crane::before {
  content: ""
}

.vl-vi-construction-crane--after::after {
  content: ""
}

.vl-vi-construction-shack::before {
  content: ""
}

.vl-vi-construction-shack--after::after {
  content: ""
}

.vl-vi-contacts::before {
  content: ""
}

.vl-vi-contacts--after::after {
  content: ""
}

.vl-vi-content-book-favorite-star::before {
  content: ""
}

.vl-vi-content-book-favorite-star--after::after {
  content: ""
}

.vl-vi-content-book::before {
  content: ""
}

.vl-vi-content-book--after::after {
  content: ""
}

.vl-vi-content-box::before {
  content: ""
}

.vl-vi-content-box--after::after {
  content: ""
}

.vl-vi-content-filter::before {
  content: ""
}

.vl-vi-content-filter--after::after {
  content: ""
}

.vl-vi-content-note::before {
  content: ""
}

.vl-vi-content-note--after::after {
  content: ""
}

.vl-vi-content-view-column::before {
  content: ""
}

.vl-vi-content-view-column--after::after {
  content: ""
}

.vl-vi-contract::before {
  content: ""
}

.vl-vi-contract--after::after {
  content: ""
}

.vl-vi-control-cross-over::before {
  content: ""
}

.vl-vi-control-cross-over--after::after {
  content: ""
}

.vl-vi-copy-paste::before {
  content: ""
}

.vl-vi-copy-paste--after::after {
  content: ""
}

.vl-vi-copyright::before {
  content: ""
}

.vl-vi-copyright--after::after {
  content: ""
}

.vl-vi-credit-card::before {
  content: ""
}

.vl-vi-credit-card--after::after {
  content: ""
}

.vl-vi-crop::before {
  content: ""
}

.vl-vi-crop--after::after {
  content: ""
}

.vl-vi-cross-thin::before {
  content: ""
}

.vl-vi-cross-thin--after::after {
  content: ""
}

.vl-vi-cross::before {
  content: ""
}

.vl-vi-cross--after::after {
  content: ""
}

.vl-vi-cursor-arrow-big::before {
  content: ""
}

.vl-vi-cursor-arrow-big--after::after {
  content: ""
}

.vl-vi-cursor-arrow-small::before {
  content: ""
}

.vl-vi-cursor-arrow-small--after::after {
  content: ""
}

.vl-vi-cursor-finger-down::before {
  content: ""
}

.vl-vi-cursor-finger-down--after::after {
  content: ""
}

.vl-vi-cursor-finger-left::before {
  content: ""
}

.vl-vi-cursor-finger-left--after::after {
  content: ""
}

.vl-vi-cursor-finger-right::before {
  content: ""
}

.vl-vi-cursor-finger-right--after::after {
  content: ""
}

.vl-vi-cursor-finger-up::before {
  content: ""
}

.vl-vi-cursor-finger-up--after::after {
  content: ""
}

.vl-vi-cursor-hand::before {
  content: ""
}

.vl-vi-cursor-hand--after::after {
  content: ""
}

.vl-vi-cursor-hold::before {
  content: ""
}

.vl-vi-cursor-hold--after::after {
  content: ""
}

.vl-vi-dashboard::before {
  content: ""
}

.vl-vi-dashboard--after::after {
  content: ""
}

.vl-vi-data-download::before {
  content: ""
}

.vl-vi-data-download--after::after {
  content: ""
}

.vl-vi-data-transfer::before {
  content: ""
}

.vl-vi-data-transfer--after::after {
  content: ""
}

.vl-vi-data-upload::before {
  content: ""
}

.vl-vi-data-upload--after::after {
  content: ""
}

.vl-vi-demonstration::before {
  content: ""
}

.vl-vi-demonstration--after::after {
  content: ""
}

.vl-vi-diagram::before {
  content: ""
}

.vl-vi-diagram--after::after {
  content: ""
}

.vl-vi-direction-sign::before {
  content: ""
}

.vl-vi-direction-sign--after::after {
  content: ""
}

.vl-vi-document-small::before {
  content: ""
}

.vl-vi-document-small--after::after {
  content: ""
}

.vl-vi-document::before {
  content: ""
}

.vl-vi-document--after::after {
  content: ""
}

.vl-vi-double-arrow::before {
  content: ""
}

.vl-vi-double-arrow--after::after {
  content: ""
}

.vl-vi-download-harddisk::before {
  content: ""
}

.vl-vi-download-harddisk--after::after {
  content: ""
}

.vl-vi-drawer-down::before {
  content: ""
}

.vl-vi-drawer-down--after::after {
  content: ""
}

.vl-vi-drawer::before {
  content: ""
}

.vl-vi-drawer--after::after {
  content: ""
}

.vl-vi-edit::before {
  content: ""
}

.vl-vi-edit--after::after {
  content: ""
}

.vl-vi-email-read::before {
  content: ""
}

.vl-vi-email-read--after::after {
  content: ""
}

.vl-vi-email::before {
  content: ""
}

.vl-vi-email--after::after {
  content: ""
}

.vl-vi-enlarge::before {
  content: ""
}

.vl-vi-enlarge--after::after {
  content: ""
}

.vl-vi-envelope::before {
  content: ""
}

.vl-vi-envelope--after::after {
  content: ""
}

.vl-vi-expand-horizontal-alt::before {
  content: ""
}

.vl-vi-expand-horizontal-alt--after::after {
  content: ""
}

.vl-vi-expand-horizontal::before {
  content: ""
}

.vl-vi-expand-horizontal--after::after {
  content: ""
}

.vl-vi-expand-vertical::before {
  content: ""
}

.vl-vi-expand-vertical--after::after {
  content: ""
}

.vl-vi-expand::before {
  content: ""
}

.vl-vi-expand--after::after {
  content: ""
}

.vl-vi-external::before {
  content: ""
}

.vl-vi-external--after::after {
  content: ""
}

.vl-vi-facebook::before {
  content: ""
}

.vl-vi-facebook--after::after {
  content: ""
}

.vl-vi-faq::before {
  content: ""
}

.vl-vi-faq--after::after {
  content: ""
}

.vl-vi-fastback::before {
  content: ""
}

.vl-vi-fastback--after::after {
  content: ""
}

.vl-vi-fastforward::before {
  content: ""
}

.vl-vi-fastforward--after::after {
  content: ""
}

.vl-vi-fax::before {
  content: ""
}

.vl-vi-fax--after::after {
  content: ""
}

.vl-vi-field::before {
  content: ""
}

.vl-vi-field--after::after {
  content: ""
}

.vl-vi-file-audio::before {
  content: ""
}

.vl-vi-file-audio--after::after {
  content: ""
}

.vl-vi-file-copy::before {
  content: ""
}

.vl-vi-file-copy--after::after {
  content: ""
}

.vl-vi-file-download::before {
  content: ""
}

.vl-vi-file-download--after::after {
  content: ""
}

.vl-vi-file-edit::before {
  content: ""
}

.vl-vi-file-edit--after::after {
  content: ""
}

.vl-vi-file-image::before {
  content: ""
}

.vl-vi-file-image--after::after {
  content: ""
}

.vl-vi-file-new::before {
  content: ""
}

.vl-vi-file-new--after::after {
  content: ""
}

.vl-vi-file-office-doc::before {
  content: ""
}

.vl-vi-file-office-doc--after::after {
  content: ""
}

.vl-vi-file-office-pdf::before {
  content: ""
}

.vl-vi-file-office-pdf--after::after {
  content: ""
}

.vl-vi-file-office-ppt::before {
  content: ""
}

.vl-vi-file-office-ppt--after::after {
  content: ""
}

.vl-vi-file-office-xls::before {
  content: ""
}

.vl-vi-file-office-xls--after::after {
  content: ""
}

.vl-vi-file-swap::before {
  content: ""
}

.vl-vi-file-swap--after::after {
  content: ""
}

.vl-vi-file-tasks-check::before {
  content: ""
}

.vl-vi-file-tasks-check--after::after {
  content: ""
}

.vl-vi-file-upload::before {
  content: ""
}

.vl-vi-file-upload--after::after {
  content: ""
}

.vl-vi-file-video::before {
  content: ""
}

.vl-vi-file-video--after::after {
  content: ""
}

.vl-vi-file-zipped-new::before {
  content: ""
}

.vl-vi-file-zipped-new--after::after {
  content: ""
}

.vl-vi-file-zipped-vice::before {
  content: ""
}

.vl-vi-file-zipped-vice--after::after {
  content: ""
}

.vl-vi-file::before {
  content: ""
}

.vl-vi-file--after::after {
  content: ""
}

.vl-vi-files-coding::before {
  content: ""
}

.vl-vi-files-coding--after::after {
  content: ""
}

.vl-vi-film::before {
  content: ""
}

.vl-vi-film--after::after {
  content: ""
}

.vl-vi-flickr::before {
  content: ""
}

.vl-vi-flickr--after::after {
  content: ""
}

.vl-vi-focus::before {
  content: ""
}

.vl-vi-focus--after::after {
  content: ""
}

.vl-vi-folder::before {
  content: ""
}

.vl-vi-folder--after::after {
  content: ""
}

.vl-vi-font::before {
  content: ""
}

.vl-vi-font--after::after {
  content: ""
}

.vl-vi-gender-female-male::before {
  content: ""
}

.vl-vi-gender-female-male--after::after {
  content: ""
}

.vl-vi-gender-female::before {
  content: ""
}

.vl-vi-gender-female--after::after {
  content: ""
}

.vl-vi-gender-male::before {
  content: ""
}

.vl-vi-gender-male--after::after {
  content: ""
}

.vl-vi-gender-transgender::before {
  content: ""
}

.vl-vi-gender-transgender--after::after {
  content: ""
}

.vl-vi-globe::before {
  content: ""
}

.vl-vi-globe--after::after {
  content: ""
}

.vl-vi-googleplus::before {
  content: ""
}

.vl-vi-googleplus--after::after {
  content: ""
}

.vl-vi-graduate::before {
  content: ""
}

.vl-vi-graduate--after::after {
  content: ""
}

.vl-vi-graduation-hat::before {
  content: ""
}

.vl-vi-graduation-hat--after::after {
  content: ""
}

.vl-vi-hammer::before {
  content: ""
}

.vl-vi-hammer--after::after {
  content: ""
}

.vl-vi-harddisk::before {
  content: ""
}

.vl-vi-harddisk--after::after {
  content: ""
}

.vl-vi-headphone::before {
  content: ""
}

.vl-vi-headphone--after::after {
  content: ""
}

.vl-vi-health-first-aid-kit::before {
  content: ""
}

.vl-vi-health-first-aid-kit--after::after {
  content: ""
}

.vl-vi-health-heart-pulse::before {
  content: ""
}

.vl-vi-health-heart-pulse--after::after {
  content: ""
}

.vl-vi-health-hospital::before {
  content: ""
}

.vl-vi-health-hospital--after::after {
  content: ""
}

.vl-vi-hide::before {
  content: ""
}

.vl-vi-hide--after::after {
  content: ""
}

.vl-vi-hierarchy::before {
  content: ""
}

.vl-vi-hierarchy--after::after {
  content: ""
}

.vl-vi-hotel-bath-shower::before {
  content: ""
}

.vl-vi-hotel-bath-shower--after::after {
  content: ""
}

.vl-vi-hotel-bed::before {
  content: ""
}

.vl-vi-hotel-bed--after::after {
  content: ""
}

.vl-vi-hotel-fire-alarm::before {
  content: ""
}

.vl-vi-hotel-fire-alarm--after::after {
  content: ""
}

.vl-vi-hotel-shower::before {
  content: ""
}

.vl-vi-hotel-shower--after::after {
  content: ""
}

.vl-vi-hourglass::before {
  content: ""
}

.vl-vi-hourglass--after::after {
  content: ""
}

.vl-vi-id-card::before {
  content: ""
}

.vl-vi-id-card--after::after {
  content: ""
}

.vl-vi-id::before {
  content: ""
}

.vl-vi-id--after::after {
  content: ""
}

.vl-vi-images-copy::before {
  content: ""
}

.vl-vi-images-copy--after::after {
  content: ""
}

.vl-vi-images::before {
  content: ""
}

.vl-vi-images--after::after {
  content: ""
}

.vl-vi-inbox::before {
  content: ""
}

.vl-vi-inbox--after::after {
  content: ""
}

.vl-vi-indent-left::before {
  content: ""
}

.vl-vi-indent-left--after::after {
  content: ""
}

.vl-vi-indent-right::before {
  content: ""
}

.vl-vi-indent-right--after::after {
  content: ""
}

.vl-vi-info-circle::before {
  content: ""
}

.vl-vi-info-circle--after::after {
  content: ""
}

.vl-vi-info-filled::before {
  content: ""
}

.vl-vi-info-filled--after::after {
  content: ""
}

.vl-vi-info-small::before {
  content: ""
}

.vl-vi-info-small--after::after {
  content: ""
}

.vl-vi-info::before {
  content: ""
}

.vl-vi-info--after::after {
  content: ""
}

.vl-vi-instagram::before {
  content: ""
}

.vl-vi-instagram--after::after {
  content: ""
}

.vl-vi-ironing::before {
  content: ""
}

.vl-vi-ironing--after::after {
  content: ""
}

.vl-vi-italic::before {
  content: ""
}

.vl-vi-italic--after::after {
  content: ""
}

.vl-vi-jira::before {
  content: ""
}

.vl-vi-jira--after::after {
  content: ""
}

.vl-vi-key::before {
  content: ""
}

.vl-vi-key--after::after {
  content: ""
}

.vl-vi-keyboard::before {
  content: ""
}

.vl-vi-keyboard--after::after {
  content: ""
}

.vl-vi-laptop::before {
  content: ""
}

.vl-vi-laptop--after::after {
  content: ""
}

.vl-vi-lightbulb::before {
  content: ""
}

.vl-vi-lightbulb--after::after {
  content: ""
}

.vl-vi-link-broken::before {
  content: ""
}

.vl-vi-link-broken--after::after {
  content: ""
}

.vl-vi-link::before {
  content: ""
}

.vl-vi-link--after::after {
  content: ""
}

.vl-vi-linkedin::before {
  content: ""
}

.vl-vi-linkedin--after::after {
  content: ""
}

.vl-vi-list-add::before {
  content: ""
}

.vl-vi-list-add--after::after {
  content: ""
}

.vl-vi-list-bullets-alt::before {
  content: ""
}

.vl-vi-list-bullets-alt--after::after {
  content: ""
}

.vl-vi-list-bullets::before {
  content: ""
}

.vl-vi-list-bullets--after::after {
  content: ""
}

.vl-vi-list-numbers::before {
  content: ""
}

.vl-vi-list-numbers--after::after {
  content: ""
}

.vl-vi-list::before {
  content: ""
}

.vl-vi-list--after::after {
  content: ""
}

.vl-vi-location-direction-arrow::before {
  content: ""
}

.vl-vi-location-direction-arrow--after::after {
  content: ""
}

.vl-vi-location-gps::before {
  content: ""
}

.vl-vi-location-gps--after::after {
  content: ""
}

.vl-vi-location-map::before {
  content: ""
}

.vl-vi-location-map--after::after {
  content: ""
}

.vl-vi-location::before {
  content: ""
}

.vl-vi-location--after::after {
  content: ""
}

.vl-vi-lock-unlock::before {
  content: ""
}

.vl-vi-lock-unlock--after::after {
  content: ""
}

.vl-vi-lock::before {
  content: ""
}

.vl-vi-lock--after::after {
  content: ""
}

.vl-vi-login::before {
  content: ""
}

.vl-vi-login--after::after {
  content: ""
}

.vl-vi-logout::before {
  content: ""
}

.vl-vi-logout--after::after {
  content: ""
}

.vl-vi-long-arrow::before {
  content: ""
}

.vl-vi-long-arrow--after::after {
  content: ""
}

.vl-vi-magnifier::before {
  content: ""
}

.vl-vi-magnifier--after::after {
  content: ""
}

.vl-vi-mail::before {
  content: ""
}

.vl-vi-mail--after::after {
  content: ""
}

.vl-vi-market::before {
  content: ""
}

.vl-vi-market--after::after {
  content: ""
}

.vl-vi-menu::before {
  content: ""
}

.vl-vi-menu--after::after {
  content: ""
}

.vl-vi-messenger::before {
  content: ""
}

.vl-vi-messenger--after::after {
  content: ""
}

.vl-vi-microphone-off::before {
  content: ""
}

.vl-vi-microphone-off--after::after {
  content: ""
}

.vl-vi-microphone::before {
  content: ""
}

.vl-vi-microphone--after::after {
  content: ""
}

.vl-vi-minus-circle::before {
  content: ""
}

.vl-vi-minus-circle--after::after {
  content: ""
}

.vl-vi-minus::before {
  content: ""
}

.vl-vi-minus--after::after {
  content: ""
}

.vl-vi-mobile-phone::before {
  content: ""
}

.vl-vi-mobile-phone--after::after {
  content: ""
}

.vl-vi-move-down::before {
  content: ""
}

.vl-vi-move-down--after::after {
  content: ""
}

.vl-vi-move-left-right::before {
  content: ""
}

.vl-vi-move-left-right--after::after {
  content: ""
}

.vl-vi-moving-elevator::before {
  content: ""
}

.vl-vi-moving-elevator--after::after {
  content: ""
}

.vl-vi-music-note::before {
  content: ""
}

.vl-vi-music-note--after::after {
  content: ""
}

.vl-vi-nature-leaf::before {
  content: ""
}

.vl-vi-nature-leaf--after::after {
  content: ""
}

.vl-vi-nature-tree::before {
  content: ""
}

.vl-vi-nature-tree--after::after {
  content: ""
}

.vl-vi-nav-down-double::before {
  content: ""
}

.vl-vi-nav-down-double--after::after {
  content: ""
}

.vl-vi-nav-down-light::before {
  content: ""
}

.vl-vi-nav-down-light--after::after {
  content: ""
}

.vl-vi-nav-down::before {
  content: ""
}

.vl-vi-nav-down--after::after {
  content: ""
}

.vl-vi-nav-left-double::before {
  content: ""
}

.vl-vi-nav-left-double--after::after {
  content: ""
}

.vl-vi-nav-left-light::before {
  content: ""
}

.vl-vi-nav-left-light--after::after {
  content: ""
}

.vl-vi-nav-left::before {
  content: ""
}

.vl-vi-nav-left--after::after {
  content: ""
}

.vl-vi-nav-right-double::before {
  content: ""
}

.vl-vi-nav-right-double--after::after {
  content: ""
}

.vl-vi-nav-right-light::before {
  content: ""
}

.vl-vi-nav-right-light--after::after {
  content: ""
}

.vl-vi-nav-right::before {
  content: ""
}

.vl-vi-nav-right--after::after {
  content: ""
}

.vl-vi-nav-show-more-horizontal::before {
  content: ""
}

.vl-vi-nav-show-more-horizontal--after::after {
  content: ""
}

.vl-vi-nav-show-more-vertical::before {
  content: ""
}

.vl-vi-nav-show-more-vertical--after::after {
  content: ""
}

.vl-vi-nav-up-double::before {
  content: ""
}

.vl-vi-nav-up-double--after::after {
  content: ""
}

.vl-vi-nav-up-light::before {
  content: ""
}

.vl-vi-nav-up-light--after::after {
  content: ""
}

.vl-vi-nav-up::before {
  content: ""
}

.vl-vi-nav-up--after::after {
  content: ""
}

.vl-vi-news::before {
  content: ""
}

.vl-vi-news--after::after {
  content: ""
}

.vl-vi-newspaper::before {
  content: ""
}

.vl-vi-newspaper--after::after {
  content: ""
}

.vl-vi-next::before {
  content: ""
}

.vl-vi-next--after::after {
  content: ""
}

.vl-vi-other-annoyances-alt::before {
  content: ""
}

.vl-vi-other-annoyances-alt--after::after {
  content: ""
}

.vl-vi-other-annoyances::before {
  content: ""
}

.vl-vi-other-annoyances--after::after {
  content: ""
}

.vl-vi-paint-brush::before {
  content: ""
}

.vl-vi-paint-brush--after::after {
  content: ""
}

.vl-vi-paper::before {
  content: ""
}

.vl-vi-paper--after::after {
  content: ""
}

.vl-vi-paperclip::before {
  content: ""
}

.vl-vi-paperclip--after::after {
  content: ""
}

.vl-vi-paragraph::before {
  content: ""
}

.vl-vi-paragraph--after::after {
  content: ""
}

.vl-vi-pause::before {
  content: ""
}

.vl-vi-pause--after::after {
  content: ""
}

.vl-vi-pencil-write::before {
  content: ""
}

.vl-vi-pencil-write--after::after {
  content: ""
}

.vl-vi-pencil::before {
  content: ""
}

.vl-vi-pencil--after::after {
  content: ""
}

.vl-vi-pennants::before {
  content: ""
}

.vl-vi-pennants--after::after {
  content: ""
}

.vl-vi-phone-incoming::before {
  content: ""
}

.vl-vi-phone-incoming--after::after {
  content: ""
}

.vl-vi-phone-off::before {
  content: ""
}

.vl-vi-phone-off--after::after {
  content: ""
}

.vl-vi-phone-outgoing::before {
  content: ""
}

.vl-vi-phone-outgoing--after::after {
  content: ""
}

.vl-vi-phone-record::before {
  content: ""
}

.vl-vi-phone-record--after::after {
  content: ""
}

.vl-vi-phone-signal-low::before {
  content: ""
}

.vl-vi-phone-signal-low--after::after {
  content: ""
}

.vl-vi-phone-speaker::before {
  content: ""
}

.vl-vi-phone-speaker--after::after {
  content: ""
}

.vl-vi-phone::before {
  content: ""
}

.vl-vi-phone--after::after {
  content: ""
}

.vl-vi-pick-up::before {
  content: ""
}

.vl-vi-pick-up--after::after {
  content: ""
}

.vl-vi-pin-paper::before {
  content: ""
}

.vl-vi-pin-paper--after::after {
  content: ""
}

.vl-vi-pin::before {
  content: ""
}

.vl-vi-pin--after::after {
  content: ""
}

.vl-vi-pinterest::before {
  content: ""
}

.vl-vi-pinterest--after::after {
  content: ""
}

.vl-vi-places-factory::before {
  content: ""
}

.vl-vi-places-factory--after::after {
  content: ""
}

.vl-vi-places-home::before {
  content: ""
}

.vl-vi-places-home--after::after {
  content: ""
}

.vl-vi-play::before {
  content: ""
}

.vl-vi-play--after::after {
  content: ""
}

.vl-vi-playstreet::before {
  content: ""
}

.vl-vi-playstreet--after::after {
  content: ""
}

.vl-vi-plug::before {
  content: ""
}

.vl-vi-plug--after::after {
  content: ""
}

.vl-vi-plus-circle::before {
  content: ""
}

.vl-vi-plus-circle--after::after {
  content: ""
}

.vl-vi-plus::before {
  content: ""
}

.vl-vi-plus--after::after {
  content: ""
}

.vl-vi-power-button::before {
  content: ""
}

.vl-vi-power-button--after::after {
  content: ""
}

.vl-vi-printer-view::before {
  content: ""
}

.vl-vi-printer-view--after::after {
  content: ""
}

.vl-vi-printer::before {
  content: ""
}

.vl-vi-printer--after::after {
  content: ""
}

.vl-vi-profile-active::before {
  content: ""
}

.vl-vi-profile-active--after::after {
  content: ""
}

.vl-vi-programming-bug::before {
  content: ""
}

.vl-vi-programming-bug--after::after {
  content: ""
}

.vl-vi-publication::before {
  content: ""
}

.vl-vi-publication--after::after {
  content: ""
}

.vl-vi-question-mark-filled::before {
  content: ""
}

.vl-vi-question-mark-filled--after::after {
  content: ""
}

.vl-vi-question-mark-small::before {
  content: ""
}

.vl-vi-question-mark-small--after::after {
  content: ""
}

.vl-vi-question-mark::before {
  content: ""
}

.vl-vi-question-mark--after::after {
  content: ""
}

.vl-vi-question::before {
  content: ""
}

.vl-vi-question--after::after {
  content: ""
}

.vl-vi-recreation::before {
  content: ""
}

.vl-vi-recreation--after::after {
  content: ""
}

.vl-vi-reply-all::before {
  content: ""
}

.vl-vi-reply-all--after::after {
  content: ""
}

.vl-vi-reply::before {
  content: ""
}

.vl-vi-reply--after::after {
  content: ""
}

.vl-vi-rewards-certified-badge::before {
  content: ""
}

.vl-vi-rewards-certified-badge--after::after {
  content: ""
}

.vl-vi-rewards-gift::before {
  content: ""
}

.vl-vi-rewards-gift--after::after {
  content: ""
}

.vl-vi-road-block::before {
  content: ""
}

.vl-vi-road-block--after::after {
  content: ""
}

.vl-vi-road::before {
  content: ""
}

.vl-vi-road--after::after {
  content: ""
}

.vl-vi-romance-marriage-license::before {
  content: ""
}

.vl-vi-romance-marriage-license--after::after {
  content: ""
}

.vl-vi-save::before {
  content: ""
}

.vl-vi-save--after::after {
  content: ""
}

.vl-vi-scaffold::before {
  content: ""
}

.vl-vi-scaffold--after::after {
  content: ""
}

.vl-vi-scan::before {
  content: ""
}

.vl-vi-scan--after::after {
  content: ""
}

.vl-vi-scissors::before {
  content: ""
}

.vl-vi-scissors--after::after {
  content: ""
}

.vl-vi-search::before {
  content: ""
}

.vl-vi-search--after::after {
  content: ""
}

.vl-vi-server::before {
  content: ""
}

.vl-vi-server--after::after {
  content: ""
}

.vl-vi-settings::before {
  content: ""
}

.vl-vi-settings--after::after {
  content: ""
}

.vl-vi-share-megaphone::before {
  content: ""
}

.vl-vi-share-megaphone--after::after {
  content: ""
}

.vl-vi-share-rss-feed::before {
  content: ""
}

.vl-vi-share-rss-feed--after::after {
  content: ""
}

.vl-vi-share::before {
  content: ""
}

.vl-vi-share--after::after {
  content: ""
}

.vl-vi-shipping-truck::before {
  content: ""
}

.vl-vi-shipping-truck--after::after {
  content: ""
}

.vl-vi-shopping-basket-add::before {
  content: ""
}

.vl-vi-shopping-basket-add--after::after {
  content: ""
}

.vl-vi-shopping-basket-subtract::before {
  content: ""
}

.vl-vi-shopping-basket-subtract--after::after {
  content: ""
}

.vl-vi-shopping-basket::before {
  content: ""
}

.vl-vi-shopping-basket--after::after {
  content: ""
}

.vl-vi-shopping-cart::before {
  content: ""
}

.vl-vi-shopping-cart--after::after {
  content: ""
}

.vl-vi-shopping::before {
  content: ""
}

.vl-vi-shopping--after::after {
  content: ""
}

.vl-vi-shrink::before {
  content: ""
}

.vl-vi-shrink--after::after {
  content: ""
}

.vl-vi-sign-disable::before {
  content: ""
}

.vl-vi-sign-disable--after::after {
  content: ""
}

.vl-vi-sign-recycle::before {
  content: ""
}

.vl-vi-sign-recycle--after::after {
  content: ""
}

.vl-vi-sitemap::before {
  content: ""
}

.vl-vi-sitemap--after::after {
  content: ""
}

.vl-vi-skype::before {
  content: ""
}

.vl-vi-skype--after::after {
  content: ""
}

.vl-vi-smiley-poker-face::before {
  content: ""
}

.vl-vi-smiley-poker-face--after::after {
  content: ""
}

.vl-vi-smiley-smile::before {
  content: ""
}

.vl-vi-smiley-smile--after::after {
  content: ""
}

.vl-vi-snapchat::before {
  content: ""
}

.vl-vi-snapchat--after::after {
  content: ""
}

.vl-vi-sort::before {
  content: ""
}

.vl-vi-sort--after::after {
  content: ""
}

.vl-vi-speaker-volume-decrease::before {
  content: ""
}

.vl-vi-speaker-volume-decrease--after::after {
  content: ""
}

.vl-vi-speaker-volume-high::before {
  content: ""
}

.vl-vi-speaker-volume-high--after::after {
  content: ""
}

.vl-vi-speaker-volume-increase::before {
  content: ""
}

.vl-vi-speaker-volume-increase--after::after {
  content: ""
}

.vl-vi-speaker-volume-low::before {
  content: ""
}

.vl-vi-speaker-volume-low--after::after {
  content: ""
}

.vl-vi-speaker-volume-medium::before {
  content: ""
}

.vl-vi-speaker-volume-medium--after::after {
  content: ""
}

.vl-vi-speaker-volume-off::before {
  content: ""
}

.vl-vi-speaker-volume-off--after::after {
  content: ""
}

.vl-vi-sports-competition::before {
  content: ""
}

.vl-vi-sports-competition--after::after {
  content: ""
}

.vl-vi-spotify::before {
  content: ""
}

.vl-vi-spotify--after::after {
  content: ""
}

.vl-vi-stop::before {
  content: ""
}

.vl-vi-stop--after::after {
  content: ""
}

.vl-vi-subtract::before {
  content: ""
}

.vl-vi-subtract--after::after {
  content: ""
}

.vl-vi-subway::before {
  content: ""
}

.vl-vi-subway--after::after {
  content: ""
}

.vl-vi-suitcase::before {
  content: ""
}

.vl-vi-suitcase--after::after {
  content: ""
}

.vl-vi-switches::before {
  content: ""
}

.vl-vi-switches--after::after {
  content: ""
}

.vl-vi-symbol-wifi-check::before {
  content: ""
}

.vl-vi-symbol-wifi-check--after::after {
  content: ""
}

.vl-vi-symbol-wifi-close::before {
  content: ""
}

.vl-vi-symbol-wifi-close--after::after {
  content: ""
}

.vl-vi-symbol-wifi::before {
  content: ""
}

.vl-vi-symbol-wifi--after::after {
  content: ""
}

.vl-vi-synchronize-timeout::before {
  content: ""
}

.vl-vi-synchronize-timeout--after::after {
  content: ""
}

.vl-vi-synchronize::before {
  content: ""
}

.vl-vi-synchronize--after::after {
  content: ""
}

.vl-vi-tag-add::before {
  content: ""
}

.vl-vi-tag-add--after::after {
  content: ""
}

.vl-vi-tag-check::before {
  content: ""
}

.vl-vi-tag-check--after::after {
  content: ""
}

.vl-vi-tag-close::before {
  content: ""
}

.vl-vi-tag-close--after::after {
  content: ""
}

.vl-vi-tag-double::before {
  content: ""
}

.vl-vi-tag-double--after::after {
  content: ""
}

.vl-vi-tag-edit::before {
  content: ""
}

.vl-vi-tag-edit--after::after {
  content: ""
}

.vl-vi-tag-subtract::before {
  content: ""
}

.vl-vi-tag-subtract--after::after {
  content: ""
}

.vl-vi-tag-view::before {
  content: ""
}

.vl-vi-tag-view--after::after {
  content: ""
}

.vl-vi-tag::before {
  content: ""
}

.vl-vi-tag--after::after {
  content: ""
}

.vl-vi-taxi::before {
  content: ""
}

.vl-vi-taxi--after::after {
  content: ""
}

.vl-vi-television::before {
  content: ""
}

.vl-vi-television--after::after {
  content: ""
}

.vl-vi-terrace::before {
  content: ""
}

.vl-vi-terrace--after::after {
  content: ""
}

.vl-vi-text-cursor::before {
  content: ""
}

.vl-vi-text-cursor--after::after {
  content: ""
}

.vl-vi-text-eraser::before {
  content: ""
}

.vl-vi-text-eraser--after::after {
  content: ""
}

.vl-vi-text-redo::before {
  content: ""
}

.vl-vi-text-redo--after::after {
  content: ""
}

.vl-vi-text-undo::before {
  content: ""
}

.vl-vi-text-undo--after::after {
  content: ""
}

.vl-vi-timeline::before {
  content: ""
}

.vl-vi-timeline--after::after {
  content: ""
}

.vl-vi-tint::before {
  content: ""
}

.vl-vi-tint--after::after {
  content: ""
}

.vl-vi-train::before {
  content: ""
}

.vl-vi-train--after::after {
  content: ""
}

.vl-vi-trash::before {
  content: ""
}

.vl-vi-trash--after::after {
  content: ""
}

.vl-vi-trophy::before {
  content: ""
}

.vl-vi-trophy--after::after {
  content: ""
}

.vl-vi-twitter::before {
  content: ""
}

.vl-vi-twitter--after::after {
  content: ""
}

.vl-vi-underline::before {
  content: ""
}

.vl-vi-underline--after::after {
  content: ""
}

.vl-vi-university::before {
  content: ""
}

.vl-vi-university--after::after {
  content: ""
}

.vl-vi-up-down-arrows::before {
  content: ""
}

.vl-vi-up-down-arrows--after::after {
  content: ""
}

.vl-vi-upload-harddisk::before {
  content: ""
}

.vl-vi-upload-harddisk--after::after {
  content: ""
}

.vl-vi-user-alt::before {
  content: ""
}

.vl-vi-user-alt--after::after {
  content: ""
}

.vl-vi-user-download::before {
  content: ""
}

.vl-vi-user-download--after::after {
  content: ""
}

.vl-vi-user-email::before {
  content: ""
}

.vl-vi-user-email--after::after {
  content: ""
}

.vl-vi-user-female::before {
  content: ""
}

.vl-vi-user-female--after::after {
  content: ""
}

.vl-vi-user-group::before {
  content: ""
}

.vl-vi-user-group--after::after {
  content: ""
}

.vl-vi-user-male::before {
  content: ""
}

.vl-vi-user-male--after::after {
  content: ""
}

.vl-vi-user-redirect::before {
  content: ""
}

.vl-vi-user-redirect--after::after {
  content: ""
}

.vl-vi-user-setting::before {
  content: ""
}

.vl-vi-user-setting--after::after {
  content: ""
}

.vl-vi-user-signup::before {
  content: ""
}

.vl-vi-user-signup--after::after {
  content: ""
}

.vl-vi-user::before {
  content: ""
}

.vl-vi-user--after::after {
  content: ""
}

.vl-vi-vaccum-cleaner::before {
  content: ""
}

.vl-vi-vaccum-cleaner--after::after {
  content: ""
}

.vl-vi-video-subtitle::before {
  content: ""
}

.vl-vi-video-subtitle--after::after {
  content: ""
}

.vl-vi-view-add::before {
  content: ""
}

.vl-vi-view-add--after::after {
  content: ""
}

.vl-vi-vlaanderen::before {
  content: ""
}

.vl-vi-vlaanderen--after::after {
  content: ""
}

.vl-vi-vote-flag::before {
  content: ""
}

.vl-vi-vote-flag--after::after {
  content: ""
}

.vl-vi-vote-heart::before {
  content: ""
}

.vl-vi-vote-heart--after::after {
  content: ""
}

.vl-vi-vote-star::before {
  content: ""
}

.vl-vi-vote-star--after::after {
  content: ""
}

.vl-vi-vote-thumbs-down::before {
  content: ""
}

.vl-vi-vote-thumbs-down--after::after {
  content: ""
}

.vl-vi-vote-thumbs-up::before {
  content: ""
}

.vl-vi-vote-thumbs-up--after::after {
  content: ""
}

.vl-vi-voucher-check::before {
  content: ""
}

.vl-vi-voucher-check--after::after {
  content: ""
}

.vl-vi-voucher-download::before {
  content: ""
}

.vl-vi-voucher-download--after::after {
  content: ""
}

.vl-vi-voucher-scissors::before {
  content: ""
}

.vl-vi-voucher-scissors--after::after {
  content: ""
}

.vl-vi-vouchers-list::before {
  content: ""
}

.vl-vi-vouchers-list--after::after {
  content: ""
}

.vl-vi-wallet::before {
  content: ""
}

.vl-vi-wallet--after::after {
  content: ""
}

.vl-vi-warning::before {
  content: ""
}

.vl-vi-warning--after::after {
  content: ""
}

.vl-vi-whatsapp::before {
  content: ""
}

.vl-vi-whatsapp--after::after {
  content: ""
}

.vl-vi-wrench::before {
  content: ""
}

.vl-vi-wrench--after::after {
  content: ""
}

.vl-vi-www::before {
  content: ""
}

.vl-vi-www--after::after {
  content: ""
}

.vl-vi-youtube::before {
  content: ""
}

.vl-vi-youtube--after::after {
  content: ""
}

.vl-vi-zoom-in::before {
  content: ""
}

.vl-vi-zoom-in--after::after {
  content: ""
}

.vl-vi-zoom-out::before {
  content: ""
}

.vl-vi-zoom-out--after::after {
  content: ""
}

a {
  color: #05c;
  text-decoration: underline;
  text-decoration-skip-ink: auto
}

a:focus, a:hover {
  text-decoration: none;
  color: #003bb0
}

a:visited {
  color: #660599
}

a:focus, button:focus {
  outline: 0;
  box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, .65)
}

button {
  font-family: "Flanders Art Sans", sans-serif;
  cursor: pointer
}

img.vl-image--error {
  overflow-wrap: break-word;
  padding: 10px;
  line-height: 1.25;
  font-size: 1.6rem;
  color: var(--vl-theme-fg-color);
  background-color: #f7f9fc
}

.vl-grid {
  position: relative;
  box-sizing: border-box;
  display: flex;
  margin-left: -3rem;
  flex-direction: row;
  flex: 0 1 auto;
  flex-wrap: wrap
}

.vl-grid > * {
  box-sizing: border-box;
  padding-left: 3rem;
  position: relative
}

.vl-grid--no-gutter {
  margin-left: 0
}

.vl-grid--no-gutter > * {
  padding-left: 0
}

.vl-grid--v-top {
  align-items: flex-start
}

.vl-grid--v-center {
  align-items: center
}

.vl-grid--v-bottom {
  align-items: flex-end
}

.vl-grid--v-stretch {
  align-items: stretch
}

.vl-grid--v-baseline {
  align-items: stretch
}

.vl-grid--align-start {
  justify-content: flex-start
}

.vl-grid--align-end {
  justify-content: flex-end
}

.vl-grid--align-center {
  justify-content: center
}

.vl-grid--align-space-between {
  justify-content: space-between
}

.vl-grid--align-space-around {
  justify-content: space-around
}

.vl-col--fit {
  flex: 1 0
}

.vl-col--flex {
  display: flex
}

.vl-col--1-12 {
  flex-basis: 8.3333333333%;
  max-width: 8.3333333333%;
  min-width: 8.3333333333%
}

.vl-col--1-6, .vl-col--2-12 {
  flex-basis: 16.6666666667%;
  max-width: 16.6666666667%;
  min-width: 16.6666666667%
}

.vl-col--1-4, .vl-col--3-12 {
  flex-basis: 25%;
  max-width: 25%;
  min-width: 25%
}

.vl-col--1-3, .vl-col--2-6, .vl-col--4-12 {
  flex-basis: 33.3333333333%;
  max-width: 33.3333333333%;
  min-width: 33.3333333333%
}

.vl-col--5-12 {
  flex-basis: 41.6666666667%;
  max-width: 41.6666666667%;
  min-width: 41.6666666667%
}

.vl-col--1-2, .vl-col--2-4, .vl-col--3-6, .vl-col--6-12 {
  flex-basis: 50%;
  max-width: 50%;
  min-width: 50%
}

.vl-col--7-12 {
  flex-basis: 58.3333333333%;
  max-width: 58.3333333333%;
  min-width: 58.3333333333%
}

.vl-col--2-3, .vl-col--4-6, .vl-col--8-12 {
  flex-basis: 66.6666666667%;
  max-width: 66.6666666667%;
  min-width: 66.6666666667%
}

.vl-col--3-4, .vl-col--9-12 {
  flex-basis: 75%;
  max-width: 75%;
  min-width: 75%
}

.vl-col--10-12, .vl-col--5-6 {
  flex-basis: 83.3333333333%;
  max-width: 83.3333333333%;
  min-width: 83.3333333333%
}

.vl-col--11-12 {
  flex-basis: 91.6666666667%;
  max-width: 91.6666666667%;
  min-width: 91.6666666667%
}

.vl-col--1-1, .vl-col--12-12, .vl-col--2-2, .vl-col--3-3, .vl-col--4-4, .vl-col--6-6 {
  flex-basis: 100%;
  max-width: 100%;
  min-width: 100%
}

.vl-grid--is-stacked {
  margin-top: -3rem
}

.vl-grid--is-stacked > * {
  margin-top: 3rem
}

.vl-push--reset {
  margin-left: 0
}

.vl-push--1-12 {
  margin-left: 8.3333333333%
}

.vl-push--1-6, .vl-push--2-12 {
  margin-left: 16.6666666667%
}

.vl-push--1-4, .vl-push--3-12 {
  margin-left: 25%
}

.vl-push--1-3, .vl-push--2-6, .vl-push--4-12 {
  margin-left: 33.3333333333%
}

.vl-push--5-12 {
  margin-left: 41.6666666667%
}

.vl-push--1-2, .vl-push--2-4, .vl-push--3-6, .vl-push--6-12 {
  margin-left: 50%
}

.vl-push--7-12 {
  margin-left: 58.3333333333%
}

.vl-push--2-3, .vl-push--4-6, .vl-push--8-12 {
  margin-left: 66.6666666667%
}

.vl-push--3-4, .vl-push--9-12 {
  margin-left: 75%
}

.vl-push--10-12, .vl-push--5-6 {
  margin-left: 83.3333333333%
}

.vl-push--11-12 {
  margin-left: 91.6666666667%
}

.vl-col--omega {
  margin-left: auto
}

@media screen and (min-width: 1024px) {
  .vl-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -3rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap
  }

  .vl-grid > * {
    box-sizing: border-box;
    padding-left: 3rem;
    position: relative
  }

  .vl-grid--no-gutter--l {
    margin-left: 0
  }

  .vl-grid--no-gutter--l > * {
    padding-left: 0
  }

  .vl-grid--v-top--l {
    align-items: flex-start
  }

  .vl-grid--v-center--l {
    align-items: center
  }

  .vl-grid--v-bottom--l {
    align-items: flex-end
  }

  .vl-grid--v-stretch--l {
    align-items: stretch
  }

  .vl-grid--v-baseline--l {
    align-items: stretch
  }

  .vl-grid--align-start--l {
    justify-content: flex-start
  }

  .vl-grid--align-end--l {
    justify-content: flex-end
  }

  .vl-grid--align-center--l {
    justify-content: center
  }

  .vl-grid--align-space-between--l {
    justify-content: space-between
  }

  .vl-grid--align-space-around--l {
    justify-content: space-around
  }

  .vl-col--fit--l {
    flex: 1 0
  }

  .vl-col--flex--l {
    display: flex
  }

  .vl-col--1-12--l {
    flex-basis: 8.3333333333%;
    max-width: 8.3333333333%;
    min-width: 8.3333333333%
  }

  .vl-col--1-6--l, .vl-col--2-12--l {
    flex-basis: 16.6666666667%;
    max-width: 16.6666666667%;
    min-width: 16.6666666667%
  }

  .vl-col--1-4--l, .vl-col--3-12--l {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%
  }

  .vl-col--1-3--l, .vl-col--2-6--l, .vl-col--4-12--l {
    flex-basis: 33.3333333333%;
    max-width: 33.3333333333%;
    min-width: 33.3333333333%
  }

  .vl-col--5-12--l {
    flex-basis: 41.6666666667%;
    max-width: 41.6666666667%;
    min-width: 41.6666666667%
  }

  .vl-col--1-2--l, .vl-col--2-4--l, .vl-col--3-6--l, .vl-col--6-12--l {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%
  }

  .vl-col--7-12--l {
    flex-basis: 58.3333333333%;
    max-width: 58.3333333333%;
    min-width: 58.3333333333%
  }

  .vl-col--2-3--l, .vl-col--4-6--l, .vl-col--8-12--l {
    flex-basis: 66.6666666667%;
    max-width: 66.6666666667%;
    min-width: 66.6666666667%
  }

  .vl-col--3-4--l, .vl-col--9-12--l {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%
  }

  .vl-col--10-12--l, .vl-col--5-6--l {
    flex-basis: 83.3333333333%;
    max-width: 83.3333333333%;
    min-width: 83.3333333333%
  }

  .vl-col--11-12--l {
    flex-basis: 91.6666666667%;
    max-width: 91.6666666667%;
    min-width: 91.6666666667%
  }

  .vl-col--1-1--l, .vl-col--12-12--l, .vl-col--2-2--l, .vl-col--3-3--l, .vl-col--4-4--l, .vl-col--6-6--l {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%
  }

  .vl-grid--is-stacked {
    margin-top: -3rem
  }

  .vl-grid--is-stacked > * {
    margin-top: 3rem
  }

  .vl-push--reset--l {
    margin-left: 0
  }

  .vl-push--1-12--l {
    margin-left: 8.3333333333%
  }

  .vl-push--1-6--l, .vl-push--2-12--l {
    margin-left: 16.6666666667%
  }

  .vl-push--1-4--l, .vl-push--3-12--l {
    margin-left: 25%
  }

  .vl-push--1-3--l, .vl-push--2-6--l, .vl-push--4-12--l {
    margin-left: 33.3333333333%
  }

  .vl-push--5-12--l {
    margin-left: 41.6666666667%
  }

  .vl-push--1-2--l, .vl-push--2-4--l, .vl-push--3-6--l, .vl-push--6-12--l {
    margin-left: 50%
  }

  .vl-push--7-12--l {
    margin-left: 58.3333333333%
  }

  .vl-push--2-3--l, .vl-push--4-6--l, .vl-push--8-12--l {
    margin-left: 66.6666666667%
  }

  .vl-push--3-4--l, .vl-push--9-12--l {
    margin-left: 75%
  }

  .vl-push--10-12--l, .vl-push--5-6--l {
    margin-left: 83.3333333333%
  }

  .vl-push--11-12--l {
    margin-left: 91.6666666667%
  }

  .vl-col--omega--l {
    margin-left: auto
  }
}

@media screen and (min-width: 1601px) {
  .vl-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -3rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap
  }

  .vl-grid > * {
    box-sizing: border-box;
    padding-left: 3rem;
    position: relative
  }

  .vl-grid--no-gutter--xl {
    margin-left: 0
  }

  .vl-grid--no-gutter--xl > * {
    padding-left: 0
  }

  .vl-grid--v-top--xl {
    align-items: flex-start
  }

  .vl-grid--v-center--xl {
    align-items: center
  }

  .vl-grid--v-bottom--xl {
    align-items: flex-end
  }

  .vl-grid--v-stretch--xl {
    align-items: stretch
  }

  .vl-grid--v-baseline--xl {
    align-items: stretch
  }

  .vl-grid--align-start--xl {
    justify-content: flex-start
  }

  .vl-grid--align-end--xl {
    justify-content: flex-end
  }

  .vl-grid--align-center--xl {
    justify-content: center
  }

  .vl-grid--align-space-between--xl {
    justify-content: space-between
  }

  .vl-grid--align-space-around--xl {
    justify-content: space-around
  }

  .vl-col--fit--xl {
    flex: 1 0
  }

  .vl-col--flex--xl {
    display: flex
  }

  .vl-col--1-12--xl {
    flex-basis: 8.3333333333%;
    max-width: 8.3333333333%;
    min-width: 8.3333333333%
  }

  .vl-col--1-6--xl, .vl-col--2-12--xl {
    flex-basis: 16.6666666667%;
    max-width: 16.6666666667%;
    min-width: 16.6666666667%
  }

  .vl-col--1-4--xl, .vl-col--3-12--xl {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%
  }

  .vl-col--1-3--xl, .vl-col--2-6--xl, .vl-col--4-12--xl {
    flex-basis: 33.3333333333%;
    max-width: 33.3333333333%;
    min-width: 33.3333333333%
  }

  .vl-col--5-12--xl {
    flex-basis: 41.6666666667%;
    max-width: 41.6666666667%;
    min-width: 41.6666666667%
  }

  .vl-col--1-2--xl, .vl-col--2-4--xl, .vl-col--3-6--xl, .vl-col--6-12--xl {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%
  }

  .vl-col--7-12--xl {
    flex-basis: 58.3333333333%;
    max-width: 58.3333333333%;
    min-width: 58.3333333333%
  }

  .vl-col--2-3--xl, .vl-col--4-6--xl, .vl-col--8-12--xl {
    flex-basis: 66.6666666667%;
    max-width: 66.6666666667%;
    min-width: 66.6666666667%
  }

  .vl-col--3-4--xl, .vl-col--9-12--xl {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%
  }

  .vl-col--10-12--xl, .vl-col--5-6--xl {
    flex-basis: 83.3333333333%;
    max-width: 83.3333333333%;
    min-width: 83.3333333333%
  }

  .vl-col--11-12--xl {
    flex-basis: 91.6666666667%;
    max-width: 91.6666666667%;
    min-width: 91.6666666667%
  }

  .vl-col--1-1--xl, .vl-col--12-12--xl, .vl-col--2-2--xl, .vl-col--3-3--xl, .vl-col--4-4--xl, .vl-col--6-6--xl {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%
  }

  .vl-grid--is-stacked {
    margin-top: -3rem
  }

  .vl-grid--is-stacked > * {
    margin-top: 3rem
  }

  .vl-push--reset--xl {
    margin-left: 0
  }

  .vl-push--1-12--xl {
    margin-left: 8.3333333333%
  }

  .vl-push--1-6--xl, .vl-push--2-12--xl {
    margin-left: 16.6666666667%
  }

  .vl-push--1-4--xl, .vl-push--3-12--xl {
    margin-left: 25%
  }

  .vl-push--1-3--xl, .vl-push--2-6--xl, .vl-push--4-12--xl {
    margin-left: 33.3333333333%
  }

  .vl-push--5-12--xl {
    margin-left: 41.6666666667%
  }

  .vl-push--1-2--xl, .vl-push--2-4--xl, .vl-push--3-6--xl, .vl-push--6-12--xl {
    margin-left: 50%
  }

  .vl-push--7-12--xl {
    margin-left: 58.3333333333%
  }

  .vl-push--2-3--xl, .vl-push--4-6--xl, .vl-push--8-12--xl {
    margin-left: 66.6666666667%
  }

  .vl-push--3-4--xl, .vl-push--9-12--xl {
    margin-left: 75%
  }

  .vl-push--10-12--xl, .vl-push--5-6--xl {
    margin-left: 83.3333333333%
  }

  .vl-push--11-12--xl {
    margin-left: 91.6666666667%
  }

  .vl-col--omega--xl {
    margin-left: auto
  }
}

@media screen and (max-width: 1023px) {
  .vl-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -3rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap
  }

  .vl-grid > * {
    box-sizing: border-box;
    padding-left: 3rem;
    position: relative
  }

  .vl-grid--no-gutter--m {
    margin-left: 0
  }

  .vl-grid--no-gutter--m > * {
    padding-left: 0
  }

  .vl-grid--v-top--m {
    align-items: flex-start
  }

  .vl-grid--v-center--m {
    align-items: center
  }

  .vl-grid--v-bottom--m {
    align-items: flex-end
  }

  .vl-grid--v-stretch--m {
    align-items: stretch
  }

  .vl-grid--v-baseline--m {
    align-items: stretch
  }

  .vl-grid--align-start--m {
    justify-content: flex-start
  }

  .vl-grid--align-end--m {
    justify-content: flex-end
  }

  .vl-grid--align-center--m {
    justify-content: center
  }

  .vl-grid--align-space-between--m {
    justify-content: space-between
  }

  .vl-grid--align-space-around--m {
    justify-content: space-around
  }

  .vl-col--fit--m {
    flex: 1 0
  }

  .vl-col--flex--m {
    display: flex
  }

  .vl-col--1-12--m {
    flex-basis: 8.3333333333%;
    max-width: 8.3333333333%;
    min-width: 8.3333333333%
  }

  .vl-col--1-6--m, .vl-col--2-12--m {
    flex-basis: 16.6666666667%;
    max-width: 16.6666666667%;
    min-width: 16.6666666667%
  }

  .vl-col--1-4--m, .vl-col--3-12--m {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%
  }

  .vl-col--1-3--m, .vl-col--2-6--m, .vl-col--4-12--m {
    flex-basis: 33.3333333333%;
    max-width: 33.3333333333%;
    min-width: 33.3333333333%
  }

  .vl-col--5-12--m {
    flex-basis: 41.6666666667%;
    max-width: 41.6666666667%;
    min-width: 41.6666666667%
  }

  .vl-col--1-2--m, .vl-col--2-4--m, .vl-col--3-6--m, .vl-col--6-12--m {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%
  }

  .vl-col--7-12--m {
    flex-basis: 58.3333333333%;
    max-width: 58.3333333333%;
    min-width: 58.3333333333%
  }

  .vl-col--2-3--m, .vl-col--4-6--m, .vl-col--8-12--m {
    flex-basis: 66.6666666667%;
    max-width: 66.6666666667%;
    min-width: 66.6666666667%
  }

  .vl-col--3-4--m, .vl-col--9-12--m {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%
  }

  .vl-col--10-12--m, .vl-col--5-6--m {
    flex-basis: 83.3333333333%;
    max-width: 83.3333333333%;
    min-width: 83.3333333333%
  }

  .vl-col--11-12--m {
    flex-basis: 91.6666666667%;
    max-width: 91.6666666667%;
    min-width: 91.6666666667%
  }

  .vl-col--1-1--m, .vl-col--12-12--m, .vl-col--2-2--m, .vl-col--3-3--m, .vl-col--4-4--m, .vl-col--6-6--m {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%
  }

  .vl-grid--is-stacked {
    margin-top: -3rem
  }

  .vl-grid--is-stacked > * {
    margin-top: 3rem
  }

  .vl-push--reset--m {
    margin-left: 0
  }

  .vl-push--1-12--m {
    margin-left: 8.3333333333%
  }

  .vl-push--1-6--m, .vl-push--2-12--m {
    margin-left: 16.6666666667%
  }

  .vl-push--1-4--m, .vl-push--3-12--m {
    margin-left: 25%
  }

  .vl-push--1-3--m, .vl-push--2-6--m, .vl-push--4-12--m {
    margin-left: 33.3333333333%
  }

  .vl-push--5-12--m {
    margin-left: 41.6666666667%
  }

  .vl-push--1-2--m, .vl-push--2-4--m, .vl-push--3-6--m, .vl-push--6-12--m {
    margin-left: 50%
  }

  .vl-push--7-12--m {
    margin-left: 58.3333333333%
  }

  .vl-push--2-3--m, .vl-push--4-6--m, .vl-push--8-12--m {
    margin-left: 66.6666666667%
  }

  .vl-push--3-4--m, .vl-push--9-12--m {
    margin-left: 75%
  }

  .vl-push--10-12--m, .vl-push--5-6--m {
    margin-left: 83.3333333333%
  }

  .vl-push--11-12--m {
    margin-left: 91.6666666667%
  }

  .vl-col--omega--m {
    margin-left: auto
  }
}

@media screen and (max-width: 767px) {
  .vl-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -1.5rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap
  }

  .vl-grid > * {
    box-sizing: border-box;
    padding-left: 1.5rem;
    position: relative
  }

  .vl-grid--no-gutter--s {
    margin-left: 0
  }

  .vl-grid--no-gutter--s > * {
    padding-left: 0
  }

  .vl-grid--v-top--s {
    align-items: flex-start
  }

  .vl-grid--v-center--s {
    align-items: center
  }

  .vl-grid--v-bottom--s {
    align-items: flex-end
  }

  .vl-grid--v-stretch--s {
    align-items: stretch
  }

  .vl-grid--v-baseline--s {
    align-items: stretch
  }

  .vl-grid--align-start--s {
    justify-content: flex-start
  }

  .vl-grid--align-end--s {
    justify-content: flex-end
  }

  .vl-grid--align-center--s {
    justify-content: center
  }

  .vl-grid--align-space-between--s {
    justify-content: space-between
  }

  .vl-grid--align-space-around--s {
    justify-content: space-around
  }

  .vl-col--fit--s {
    flex: 1 0
  }

  .vl-col--flex--s {
    display: flex
  }

  .vl-col--1-12--s {
    flex-basis: 8.3333333333%;
    max-width: 8.3333333333%;
    min-width: 8.3333333333%
  }

  .vl-col--1-6--s, .vl-col--2-12--s {
    flex-basis: 16.6666666667%;
    max-width: 16.6666666667%;
    min-width: 16.6666666667%
  }

  .vl-col--1-4--s, .vl-col--3-12--s {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%
  }

  .vl-col--1-3--s, .vl-col--2-6--s, .vl-col--4-12--s {
    flex-basis: 33.3333333333%;
    max-width: 33.3333333333%;
    min-width: 33.3333333333%
  }

  .vl-col--5-12--s {
    flex-basis: 41.6666666667%;
    max-width: 41.6666666667%;
    min-width: 41.6666666667%
  }

  .vl-col--1-2--s, .vl-col--2-4--s, .vl-col--3-6--s, .vl-col--6-12--s {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%
  }

  .vl-col--7-12--s {
    flex-basis: 58.3333333333%;
    max-width: 58.3333333333%;
    min-width: 58.3333333333%
  }

  .vl-col--2-3--s, .vl-col--4-6--s, .vl-col--8-12--s {
    flex-basis: 66.6666666667%;
    max-width: 66.6666666667%;
    min-width: 66.6666666667%
  }

  .vl-col--3-4--s, .vl-col--9-12--s {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%
  }

  .vl-col--10-12--s, .vl-col--5-6--s {
    flex-basis: 83.3333333333%;
    max-width: 83.3333333333%;
    min-width: 83.3333333333%
  }

  .vl-col--11-12--s {
    flex-basis: 91.6666666667%;
    max-width: 91.6666666667%;
    min-width: 91.6666666667%
  }

  .vl-col--1-1--s, .vl-col--12-12--s, .vl-col--2-2--s, .vl-col--3-3--s, .vl-col--4-4--s, .vl-col--6-6--s {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%
  }

  .vl-grid--is-stacked {
    margin-top: -1.5rem
  }

  .vl-grid--is-stacked > * {
    margin-top: 1.5rem
  }

  .vl-push--reset--s {
    margin-left: 0
  }

  .vl-push--1-12--s {
    margin-left: 8.3333333333%
  }

  .vl-push--1-6--s, .vl-push--2-12--s {
    margin-left: 16.6666666667%
  }

  .vl-push--1-4--s, .vl-push--3-12--s {
    margin-left: 25%
  }

  .vl-push--1-3--s, .vl-push--2-6--s, .vl-push--4-12--s {
    margin-left: 33.3333333333%
  }

  .vl-push--5-12--s {
    margin-left: 41.6666666667%
  }

  .vl-push--1-2--s, .vl-push--2-4--s, .vl-push--3-6--s, .vl-push--6-12--s {
    margin-left: 50%
  }

  .vl-push--7-12--s {
    margin-left: 58.3333333333%
  }

  .vl-push--2-3--s, .vl-push--4-6--s, .vl-push--8-12--s {
    margin-left: 66.6666666667%
  }

  .vl-push--3-4--s, .vl-push--9-12--s {
    margin-left: 75%
  }

  .vl-push--10-12--s, .vl-push--5-6--s {
    margin-left: 83.3333333333%
  }

  .vl-push--11-12--s {
    margin-left: 91.6666666667%
  }

  .vl-col--omega--s {
    margin-left: auto
  }
}

@media screen and (max-width: 500px) {
  .vl-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -1.5rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap
  }

  .vl-grid > * {
    box-sizing: border-box;
    padding-left: 1.5rem;
    position: relative
  }

  .vl-grid--no-gutter--xs {
    margin-left: 0
  }

  .vl-grid--no-gutter--xs > * {
    padding-left: 0
  }

  .vl-grid--v-top--xs {
    align-items: flex-start
  }

  .vl-grid--v-center--xs {
    align-items: center
  }

  .vl-grid--v-bottom--xs {
    align-items: flex-end
  }

  .vl-grid--v-stretch--xs {
    align-items: stretch
  }

  .vl-grid--v-baseline--xs {
    align-items: stretch
  }

  .vl-grid--align-start--xs {
    justify-content: flex-start
  }

  .vl-grid--align-end--xs {
    justify-content: flex-end
  }

  .vl-grid--align-center--xs {
    justify-content: center
  }

  .vl-grid--align-space-between--xs {
    justify-content: space-between
  }

  .vl-grid--align-space-around--xs {
    justify-content: space-around
  }

  .vl-col--fit--xs {
    flex: 1 0
  }

  .vl-col--flex--xs {
    display: flex
  }

  .vl-col--1-12--xs {
    flex-basis: 8.3333333333%;
    max-width: 8.3333333333%;
    min-width: 8.3333333333%
  }

  .vl-col--1-6--xs, .vl-col--2-12--xs {
    flex-basis: 16.6666666667%;
    max-width: 16.6666666667%;
    min-width: 16.6666666667%
  }

  .vl-col--1-4--xs, .vl-col--3-12--xs {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%
  }

  .vl-col--1-3--xs, .vl-col--2-6--xs, .vl-col--4-12--xs {
    flex-basis: 33.3333333333%;
    max-width: 33.3333333333%;
    min-width: 33.3333333333%
  }

  .vl-col--5-12--xs {
    flex-basis: 41.6666666667%;
    max-width: 41.6666666667%;
    min-width: 41.6666666667%
  }

  .vl-col--1-2--xs, .vl-col--2-4--xs, .vl-col--3-6--xs, .vl-col--6-12--xs {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%
  }

  .vl-col--7-12--xs {
    flex-basis: 58.3333333333%;
    max-width: 58.3333333333%;
    min-width: 58.3333333333%
  }

  .vl-col--2-3--xs, .vl-col--4-6--xs, .vl-col--8-12--xs {
    flex-basis: 66.6666666667%;
    max-width: 66.6666666667%;
    min-width: 66.6666666667%
  }

  .vl-col--3-4--xs, .vl-col--9-12--xs {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%
  }

  .vl-col--10-12--xs, .vl-col--5-6--xs {
    flex-basis: 83.3333333333%;
    max-width: 83.3333333333%;
    min-width: 83.3333333333%
  }

  .vl-col--11-12--xs {
    flex-basis: 91.6666666667%;
    max-width: 91.6666666667%;
    min-width: 91.6666666667%
  }

  .vl-col--1-1--xs, .vl-col--12-12--xs, .vl-col--2-2--xs, .vl-col--3-3--xs, .vl-col--4-4--xs, .vl-col--6-6--xs {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%
  }

  .vl-grid--is-stacked {
    margin-top: -1.5rem
  }

  .vl-grid--is-stacked > * {
    margin-top: 1.5rem
  }

  .vl-push--reset--xs {
    margin-left: 0
  }

  .vl-push--1-12--xs {
    margin-left: 8.3333333333%
  }

  .vl-push--1-6--xs, .vl-push--2-12--xs {
    margin-left: 16.6666666667%
  }

  .vl-push--1-4--xs, .vl-push--3-12--xs {
    margin-left: 25%
  }

  .vl-push--1-3--xs, .vl-push--2-6--xs, .vl-push--4-12--xs {
    margin-left: 33.3333333333%
  }

  .vl-push--5-12--xs {
    margin-left: 41.6666666667%
  }

  .vl-push--1-2--xs, .vl-push--2-4--xs, .vl-push--3-6--xs, .vl-push--6-12--xs {
    margin-left: 50%
  }

  .vl-push--7-12--xs {
    margin-left: 58.3333333333%
  }

  .vl-push--2-3--xs, .vl-push--4-6--xs, .vl-push--8-12--xs {
    margin-left: 66.6666666667%
  }

  .vl-push--3-4--xs, .vl-push--9-12--xs {
    margin-left: 75%
  }

  .vl-push--10-12--xs, .vl-push--5-6--xs {
    margin-left: 83.3333333333%
  }

  .vl-push--11-12--xs {
    margin-left: 91.6666666667%
  }

  .vl-col--omega--xs {
    margin-left: auto
  }
}

@media screen and (min-width: 1280px) {
  .vl-grid--wide {
    margin-left: calc(-4.1666666667% - 3rem);
    margin-right: -4.1666666667%
  }
}

.vl-form-grid {
  position: relative;
  box-sizing: border-box;
  display: flex;
  margin-left: -1.5rem;
  flex-direction: row;
  flex: 0 1 auto;
  flex-wrap: wrap
}

.vl-form-grid > * {
  box-sizing: border-box;
  padding-left: 1.5rem;
  position: relative
}

.vl-form-grid--no-gutter {
  margin-left: 0
}

.vl-form-grid--no-gutter > * {
  padding-left: 0
}

.vl-form-grid--v-top {
  align-items: flex-start
}

.vl-form-grid--v-center {
  align-items: center
}

.vl-form-grid--v-bottom {
  align-items: flex-end
}

.vl-form-grid--v-stretch {
  align-items: stretch
}

.vl-form-grid--v-baseline {
  align-items: stretch
}

.vl-form-grid--align-start {
  justify-content: flex-start
}

.vl-form-grid--align-end {
  justify-content: flex-end
}

.vl-form-grid--align-center {
  justify-content: center
}

.vl-form-grid--align-space-between {
  justify-content: space-between
}

.vl-form-grid--align-space-around {
  justify-content: space-around
}

.vl-form-col--fit {
  flex: 1 0
}

.vl-form-col--flex {
  display: flex
}

.vl-form-col--1-12 {
  flex-basis: 8.3333333333%;
  max-width: 8.3333333333%;
  min-width: 8.3333333333%
}

.vl-form-col--1-6, .vl-form-col--2-12 {
  flex-basis: 16.6666666667%;
  max-width: 16.6666666667%;
  min-width: 16.6666666667%
}

.vl-form-col--1-4, .vl-form-col--3-12 {
  flex-basis: 25%;
  max-width: 25%;
  min-width: 25%
}

.vl-form-col--1-3, .vl-form-col--2-6, .vl-form-col--4-12 {
  flex-basis: 33.3333333333%;
  max-width: 33.3333333333%;
  min-width: 33.3333333333%
}

.vl-form-col--5-12 {
  flex-basis: 41.6666666667%;
  max-width: 41.6666666667%;
  min-width: 41.6666666667%
}

.vl-form-col--1-2, .vl-form-col--2-4, .vl-form-col--3-6, .vl-form-col--6-12 {
  flex-basis: 50%;
  max-width: 50%;
  min-width: 50%
}

.vl-form-col--7-12 {
  flex-basis: 58.3333333333%;
  max-width: 58.3333333333%;
  min-width: 58.3333333333%
}

.vl-form-col--2-3, .vl-form-col--4-6, .vl-form-col--8-12 {
  flex-basis: 66.6666666667%;
  max-width: 66.6666666667%;
  min-width: 66.6666666667%
}

.vl-form-col--3-4, .vl-form-col--9-12 {
  flex-basis: 75%;
  max-width: 75%;
  min-width: 75%
}

.vl-form-col--10-12, .vl-form-col--5-6 {
  flex-basis: 83.3333333333%;
  max-width: 83.3333333333%;
  min-width: 83.3333333333%
}

.vl-form-col--11-12 {
  flex-basis: 91.6666666667%;
  max-width: 91.6666666667%;
  min-width: 91.6666666667%
}

.vl-form-col--1-1, .vl-form-col--12-12, .vl-form-col--2-2, .vl-form-col--3-3, .vl-form-col--4-4, .vl-form-col--6-6 {
  flex-basis: 100%;
  max-width: 100%;
  min-width: 100%
}

.vl-form-grid--is-stacked {
  margin-top: -1.5rem
}

.vl-form-grid--is-stacked > * {
  margin-top: 1.5rem
}

.vl-form-push--reset {
  margin-left: 0
}

.vl-form-push--1-12 {
  margin-left: 8.3333333333%
}

.vl-form-push--1-6, .vl-form-push--2-12 {
  margin-left: 16.6666666667%
}

.vl-form-push--1-4, .vl-form-push--3-12 {
  margin-left: 25%
}

.vl-form-push--1-3, .vl-form-push--2-6, .vl-form-push--4-12 {
  margin-left: 33.3333333333%
}

.vl-form-push--5-12 {
  margin-left: 41.6666666667%
}

.vl-form-push--1-2, .vl-form-push--2-4, .vl-form-push--3-6, .vl-form-push--6-12 {
  margin-left: 50%
}

.vl-form-push--7-12 {
  margin-left: 58.3333333333%
}

.vl-form-push--2-3, .vl-form-push--4-6, .vl-form-push--8-12 {
  margin-left: 66.6666666667%
}

.vl-form-push--3-4, .vl-form-push--9-12 {
  margin-left: 75%
}

.vl-form-push--10-12, .vl-form-push--5-6 {
  margin-left: 83.3333333333%
}

.vl-form-push--11-12 {
  margin-left: 91.6666666667%
}

.vl-form-col--omega {
  margin-left: auto
}

@media screen and (max-width: 767px) {
  .vl-form-grid {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-left: -1.5rem;
    flex-direction: row;
    flex: 0 1 auto;
    flex-wrap: wrap
  }

  .vl-form-grid > * {
    box-sizing: border-box;
    padding-left: 1.5rem;
    position: relative
  }

  .vl-form-grid--no-gutter--s {
    margin-left: 0
  }

  .vl-form-grid--no-gutter--s > * {
    padding-left: 0
  }

  .vl-form-grid--v-top--s {
    align-items: flex-start
  }

  .vl-form-grid--v-center--s {
    align-items: center
  }

  .vl-form-grid--v-bottom--s {
    align-items: flex-end
  }

  .vl-form-grid--v-stretch--s {
    align-items: stretch
  }

  .vl-form-grid--v-baseline--s {
    align-items: stretch
  }

  .vl-form-grid--align-start--s {
    justify-content: flex-start
  }

  .vl-form-grid--align-end--s {
    justify-content: flex-end
  }

  .vl-form-grid--align-center--s {
    justify-content: center
  }

  .vl-form-grid--align-space-between--s {
    justify-content: space-between
  }

  .vl-form-grid--align-space-around--s {
    justify-content: space-around
  }

  .vl-form-col--fit--s {
    flex: 1 0
  }

  .vl-form-col--flex--s {
    display: flex
  }

  .vl-form-col--1-12--s {
    flex-basis: 8.3333333333%;
    max-width: 8.3333333333%;
    min-width: 8.3333333333%
  }

  .vl-form-col--1-6--s, .vl-form-col--2-12--s {
    flex-basis: 16.6666666667%;
    max-width: 16.6666666667%;
    min-width: 16.6666666667%
  }

  .vl-form-col--1-4--s, .vl-form-col--3-12--s {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%
  }

  .vl-form-col--1-3--s, .vl-form-col--2-6--s, .vl-form-col--4-12--s {
    flex-basis: 33.3333333333%;
    max-width: 33.3333333333%;
    min-width: 33.3333333333%
  }

  .vl-form-col--5-12--s {
    flex-basis: 41.6666666667%;
    max-width: 41.6666666667%;
    min-width: 41.6666666667%
  }

  .vl-form-col--1-2--s, .vl-form-col--2-4--s, .vl-form-col--3-6--s, .vl-form-col--6-12--s {
    flex-basis: 50%;
    max-width: 50%;
    min-width: 50%
  }

  .vl-form-col--7-12--s {
    flex-basis: 58.3333333333%;
    max-width: 58.3333333333%;
    min-width: 58.3333333333%
  }

  .vl-form-col--2-3--s, .vl-form-col--4-6--s, .vl-form-col--8-12--s {
    flex-basis: 66.6666666667%;
    max-width: 66.6666666667%;
    min-width: 66.6666666667%
  }

  .vl-form-col--3-4--s, .vl-form-col--9-12--s {
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%
  }

  .vl-form-col--10-12--s, .vl-form-col--5-6--s {
    flex-basis: 83.3333333333%;
    max-width: 83.3333333333%;
    min-width: 83.3333333333%
  }

  .vl-form-col--11-12--s {
    flex-basis: 91.6666666667%;
    max-width: 91.6666666667%;
    min-width: 91.6666666667%
  }

  .vl-form-col--1-1--s, .vl-form-col--12-12--s, .vl-form-col--2-2--s, .vl-form-col--3-3--s, .vl-form-col--4-4--s, .vl-form-col--6-6--s {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%
  }

  .vl-form-grid--is-stacked {
    margin-top: -1.5rem
  }

  .vl-form-grid--is-stacked > * {
    margin-top: 1.5rem
  }

  .vl-form-push--reset--s {
    margin-left: 0
  }

  .vl-form-push--1-12--s {
    margin-left: 8.3333333333%
  }

  .vl-form-push--1-6--s, .vl-form-push--2-12--s {
    margin-left: 16.6666666667%
  }

  .vl-form-push--1-4--s, .vl-form-push--3-12--s {
    margin-left: 25%
  }

  .vl-form-push--1-3--s, .vl-form-push--2-6--s, .vl-form-push--4-12--s {
    margin-left: 33.3333333333%
  }

  .vl-form-push--5-12--s {
    margin-left: 41.6666666667%
  }

  .vl-form-push--1-2--s, .vl-form-push--2-4--s, .vl-form-push--3-6--s, .vl-form-push--6-12--s {
    margin-left: 50%
  }

  .vl-form-push--7-12--s {
    margin-left: 58.3333333333%
  }

  .vl-form-push--2-3--s, .vl-form-push--4-6--s, .vl-form-push--8-12--s {
    margin-left: 66.6666666667%
  }

  .vl-form-push--3-4--s, .vl-form-push--9-12--s {
    margin-left: 75%
  }

  .vl-form-push--10-12--s, .vl-form-push--5-6--s {
    margin-left: 83.3333333333%
  }

  .vl-form-push--11-12--s {
    margin-left: 91.6666666667%
  }

  .vl-form-col--omega--s {
    margin-left: auto
  }
}

@media screen and (min-width: 1280px) {
  .vl-form-grid--wide {
    margin-left: calc(-4.1666666667% - 3rem);
    margin-right: -4.1666666667%
  }
}

.vl-grid--is-stacked-large {
  margin-bottom: -6rem
}

.vl-grid--is-stacked-large > * {
  margin-bottom: 6rem
}

.vl-grid--is-stacked-small {
  margin-bottom: -1.5rem
}

.vl-grid--is-stacked-small > * {
  margin-bottom: 1.5rem
}

.vl-page {
  position: relative;
  width: 100%;
  background-color: #fff
}

.vl-page .vl-main-content > .vl-region:last-child {
  padding-bottom: 10rem
}

@media screen and (max-width: 767px) {
  .vl-page .vl-main-content > .vl-region:last-child {
    padding-bottom: 7rem
  }
}

.vl-main-content {
  outline: 0;
  position: relative
}

.vl-region {
  margin: 0 auto;
  padding: 3rem 0 6rem
}

@media screen and (max-width: 767px) {
  .vl-region {
    padding: 3rem 0
  }
}

.vl-region.vl-region--no-space {
  padding: 0
}

.vl-region.vl-region--no-space-bottom {
  padding-bottom: 0
}

.vl-region.vl-region--no-space-top {
  padding-top: 0
}

.vl-region:not(.vl-region--alt) + .vl-region:not(.vl-region--alt) {
  padding-top: 0
}

.vl-region--alt {
  background-color: #f7f9fc
}

.vl-region--overlap {
  background: linear-gradient(to bottom, transparent calc(50% - 30px), #f7f9fc calc(50% - 30px), #f7f9fc 100%)
}

.vl-region--overlap .vl-layout {
  border: 1px #cbd2da solid;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #fff
}

@media only screen and (max-width: 1295px) {
  .vl-region--overlap .vl-layout {
    margin: 15px
  }
}

@media screen and (max-width: 1023px) {
  .vl-region--overlap .vl-layout {
    padding-top: 20px;
    padding-bottom: 20px
  }
}

.vl-region--overlap + .vl-region--alt {
  padding-top: 0 !important
}

.vl-region--alt + .vl-region:not(.vl-region--alt), .vl-region:not(.vl-region--alt) + .vl-region--alt {
  padding-top: 6rem
}

@media screen and (max-width: 767px) {
  .vl-region--alt + .vl-region:not(.vl-region--alt), .vl-region:not(.vl-region--alt) + .vl-region--alt {
    padding-top: 3rem
  }
}

.vl-region:first-child {
  padding-top: 6rem
}

@media screen and (max-width: 767px) {
  .vl-region:first-child {
    padding-top: 2rem
  }
}

.vl-region--small {
  padding: 1.5rem 0
}

@media screen and (max-width: 767px) {
  .vl-region--small {
    padding: 2rem 0
  }
}

.vl-region--medium {
  padding: 3rem 0
}

@media screen and (max-width: 767px) {
  .vl-region--medium {
    padding: 2rem 0
  }
}

.vl-region--bordered + .vl-region--bordered {
  border-top: 1px solid #f7f9fc
}

.vl-region--bordered + .vl-region--bordered.vl-region--alt {
  border-top-color: #fff
}

.vl-layout {
  position: relative;
  margin: 0 auto;
  min-width: 1024px;
  max-width: 1280px;
  padding: 0 3rem
}

@media screen and (max-width: 1023px) {
  .vl-layout {
    width: auto;
    min-width: 768px;
    max-width: 1280px
  }
}

@media screen and (max-width: 767px) {
  .vl-layout {
    width: auto;
    min-width: 0;
    padding: 0 1.5rem
  }
}

.vl-steps {
  margin-bottom: 3rem
}

.vl-steps--has-line .vl-step::before {
  position: absolute;
  display: block;
  background-color: #cbd2da;
  content: "";
  width: .3rem;
  top: calc(4.2rem + .4rem);
  bottom: calc(-5rem + .4rem);
  left: -5.1rem
}

@media screen and (max-width: 767px) {
  .vl-steps--has-line .vl-step::before {
    top: 3.9rem;
    bottom: -2.5rem;
    left: -3.35rem
  }
}

@media screen and (max-width: 767px) {
  .vl-steps {
    margin-bottom: 1.5rem
  }
}

.vl-step {
  position: relative;
  margin-left: 7rem
}

.vl-step + .vl-step {
  margin-top: 5rem
}

@media screen and (max-width: 767px) {
  .vl-step {
    margin-left: 5rem
  }

  .vl-step + .vl-step {
    margin-top: 2.5rem
  }
}

.vl-step--has-link .vl-step__link {
  display: block;
  color: #333332;
  text-decoration: none
}

.vl-step--has-link .vl-step__link .vl-step__title {
  color: #05c
}

.vl-step--accordion .vl-step__content-wrapper {
  visibility: hidden;
  overflow: hidden;
  max-height: 0
}

.vl-step--accordion.js-vl-accordion--open .vl-step__content-wrapper {
  visibility: visible;
  max-height: 100%
}

@media screen and (max-width: 767px) {
  .vl-step__content {
    font-size: 1.6rem
  }
}

.vl-step__content p + p {
  margin-top: 1rem
}

.vl-step__header ~ .vl-step__content-wrapper .vl-step__content {
  margin-top: 1.5rem
}

.vl-step__title {
  font-size: 2rem;
  font-weight: 500
}

@media screen and (max-width: 767px) {
  .vl-step__title {
    font-size: 1.8rem
  }
}

.vl-step__title__annotation {
  font-family: "Flanders Art Sans", sans-serif;
  font-size: 1.4rem;
  font-weight: 400
}

.vl-step__title__annotation::before {
  content: "-";
  margin: 0 .5rem
}

.vl-step--disabled .vl-step__title {
  color: #687483
}

.vl-step--accordion .vl-step__title {
  color: #05c
}

.vl-step__subtitle {
  color: #687483;
  font-weight: 400;
  font-size: inherit;
  font-size: 1.8rem
}

.vl-step__subtitle--small {
  font-size: .65em
}

@media screen and (max-width: 767px) {
  .vl-step__subtitle {
    font-size: 1.6rem
  }
}

.vl-step__accordion-toggle {
  display: inline-flex;
  color: #05c;
  font-size: 1.8rem;
  margin-top: .6rem
}

.vl-step__accordion-toggle::after, .vl-step__accordion-toggle::before {
  font-family: vlaanderen-icon !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  text-decoration: none;
  text-transform: none
}

.vl-step__accordion-toggle::before {
  content: ""
}

.vl-step__accordion-toggle::before {
  transition: transform .2s
}

.js-vl-accordion--open .vl-step__accordion-toggle::before {
  transform: rotate(180deg)
}

.vl-step--error .vl-step__wrapper, .vl-step--success .vl-step__wrapper, .vl-step--warning .vl-step__wrapper {
  padding: 1.5rem
}

.vl-step--error .vl-step__header__titles, .vl-step--success .vl-step__header__titles, .vl-step--warning .vl-step__header__titles {
  margin-top: 0
}

.vl-step--success .vl-step__icon {
  background-color: #3ca854;
  color: #ecf6ee
}

.vl-step--success .vl-step__wrapper {
  border: 1px solid #b1dcbb;
  background-color: #ecf6ee
}

.vl-step--warning .vl-step__icon {
  background-color: #ffc515;
  color: #fff9e8
}

.vl-step--warning .vl-step__wrapper {
  border: 1px solid #ffe8a1;
  background-color: #fff9e8
}

.vl-step--error .vl-step__icon {
  background-color: #db3434;
  color: #fbebeb
}

.vl-step--error .vl-step__wrapper {
  border: 1px solid #f1aeae;
  background-color: #fbebeb
}

.vl-steps--timeline .vl-step::before {
  position: absolute;
  display: block;
  background-color: #cbd2da;
  content: "";
  width: .3rem;
  top: 6rem;
  bottom: -4.6rem;
  left: -5rem
}

@media screen and (max-width: 767px) {
  .vl-steps--timeline .vl-step::before {
    top: 4.4rem;
    bottom: -2.1rem;
    left: -3.35rem
  }
}

.vl-steps--timeline .vl-step__icon {
  background-color: var(--vl-theme-primary-color);
  font-size: 1.8rem;
  color: #333332;
  height: auto;
  line-height: 1.5rem;
  border-radius: 0;
  padding: 1.2rem 0;
  top: 0
}

@media screen and (max-width: 767px) {
  .vl-steps--timeline .vl-step__icon {
    font-size: 1.5rem;
    padding: .5rem 0
  }
}

.vl-steps--timeline .vl-step__icon__sub {
  display: block;
  font-size: 1.4rem;
  font-weight: 300
}

@media screen and (max-width: 767px) {
  .vl-steps--timeline .vl-step__icon__sub {
    font-size: 1.3rem
  }
}

.vl-steps--timeline .vl-step--success .vl-step__icon {
  background-color: #3ca854;
  color: #ecf6ee
}

.vl-steps--timeline .vl-step--warning .vl-step__icon {
  background-color: #ffc515;
  color: #fff9e8
}

.vl-steps--timeline .vl-step--error .vl-step__icon {
  background-color: #db3434;
  color: #fbebeb
}

.vl-steps--timeline-simple .vl-step {
  padding-top: 0
}

.vl-steps--timeline-simple .vl-step::before {
  position: absolute;
  display: block;
  background-color: #cbd2da;
  content: "";
  width: .3rem;
  top: 1.3rem;
  bottom: -6.3rem;
  left: -5.1rem
}

@media screen and (max-width: 767px) {
  .vl-steps--timeline-simple .vl-step::before {
    left: -3.35rem
  }
}

.vl-steps--timeline-simple .vl-step:last-child::before {
  bottom: 0
}

.vl-steps--timeline-simple .vl-step__icon {
  background-color: #000;
  border: 2px solid #f7f9fc;
  height: 1.3rem;
  width: 1.3rem;
  top: 1.3rem;
  left: -5.55rem
}

@media screen and (max-width: 767px) {
  .vl-steps--timeline-simple .vl-step__icon {
    top: .65rem;
    left: -3.9rem
  }
}

.vl-duration-step {
  position: relative;
  font-size: 1.6rem;
  color: #687483;
  padding: 5rem 0 5rem 7rem
}

@media screen and (max-width: 767px) {
  .vl-duration-step {
    font-size: 1.4rem;
    padding: 2.5rem 0 2.5rem 7rem
  }
}

.vl-duration-step::after, .vl-duration-step::before {
  content: "";
  position: absolute;
  display: block;
  left: 2.1rem
}

@media screen and (max-width: 767px) {
  .vl-duration-step::after, .vl-duration-step::before {
    left: 1.75rem
  }
}

.vl-duration-step::before {
  background-image: linear-gradient(#cbd2da 0, #cbd2da 70%, transparent 60%, transparent 100%), linear-gradient(transparent 50%, #cbd2da 50%);
  background-size: 100%, .6rem .6rem;
  background-repeat: no-repeat, repeat;
  width: .3rem;
  top: 0;
  bottom: .4rem;
  margin-left: -.1rem
}

@media screen and (max-width: 767px) {
  .vl-duration-step::before {
    top: .4rem
  }
}

.vl-duration-step::after {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #000;
  border: 2px solid #f7f9fc
}

.vl-step__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  border: 0;
  padding: 0;
  text-align: left;
  text-decoration: none
}

.vl-step--accordion .vl-step__header:focus, .vl-step--accordion .vl-step__header:hover {
  color: #05c
}

.vl-step--accordion .vl-step__header:focus .vl-step__title, .vl-step--accordion .vl-step__header:hover .vl-step__title {
  text-decoration: underline
}

@media screen and (max-width: 767px) {
  .vl-step__header__action {
    display: inline-block;
    margin-top: 1rem
  }
}

.vl-step__header__info {
  color: #333332
}

.vl-step__header__info i {
  margin-left: 1rem;
  text-decoration: none !important
}

.vl-step--disabled .vl-step__header__info {
  opacity: .5
}

.vl-step__header__titles {
  margin-top: .8rem
}

.vl-steps--timeline-simple .vl-step__header__titles {
  margin-top: .1rem
}

.vl-step__icon {
  display: block;
  position: absolute;
  background-color: var(--vl-theme-primary-color);
  font-size: 2rem;
  font-weight: 500;
  color: #333332;
  line-height: 4.2rem;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  text-align: center;
  left: -7rem
}

.vl-step__icon .vl-badge {
  width: inherit;
  height: inherit;
  min-height: 2.8rem;
  border-radius: inherit
}

.vl-step__icon .vl-badge__icon {
  font-size: 2rem;
  height: 2rem;
  color: inherit
}

.vl-step--disabled .vl-step__icon {
  background-color: #cbd2da;
  color: #fff
}

.vl-step--highlighted .vl-step__icon {
  background-color: #05c;
  color: #fff
}

@media screen and (max-width: 767px) {
  .vl-step__icon {
    font-size: 1.8rem;
    width: 3.5rem;
    height: 3.5rem;
    line-height: 3.5rem;
    top: .2rem;
    left: -5rem
  }

  .vl-step__icon .vl-badge__icon {
    font-size: 1.6rem;
    height: 1.6rem
  }
}

.vl-u-visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  margin: -1px;
  padding: 0;
  border: 0;
  left: 0;
  top: 0
}

@keyframes fade-transition {
  0% {
    transform: translateY(20px);
    opacity: 0
  }
  100% {
    transform: translateY(0);
    opacity: 1
  }
}

@keyframes bounce {
  0%, 100%, 20%, 50%, 80% {
    transform: translateY(0)
  }
  40% {
    transform: translateY(-12px)
  }
  60% {
    transform: translateY(-5px)
  }
  90% {
    transform: translateY(-2px)
  }
}

.vl-u-align-left {
  text-align: left !important
}

.vl-u-align-center {
  text-align: center !important
}

.vl-u-align-right {
  text-align: right !important
}

@media screen and (min-width: 1023px) {
  .vl-u-align-left--l {
    text-align: left !important
  }

  .vl-u-align-center--l {
    text-align: center !important
  }

  .vl-u-align-right--l {
    text-align: right !important
  }
}

@media screen and (max-width: 1023px) {
  .vl-u-align-left--m {
    text-align: left !important
  }

  .vl-u-align-center--m {
    text-align: center !important
  }

  .vl-u-align-right--m {
    text-align: right !important
  }
}

@media screen and (max-width: 767px) {
  .vl-u-align-left--s {
    text-align: left !important
  }

  .vl-u-align-center--s {
    text-align: center !important
  }

  .vl-u-align-right--s {
    text-align: right !important
  }
}

@media screen and (max-width: 500px) {
  .vl-u-align-left--xs {
    text-align: left !important
  }

  .vl-u-align-center--xs {
    text-align: center !important
  }

  .vl-u-align-right--xs {
    text-align: right !important
  }
}

.vl-u-flex-align-flex-start, .vl-u-flex-align-left {
  align-items: flex-start !important
}

.vl-u-flex-align-center {
  align-items: center !important
}

.vl-u-flex-align-flex-end, .vl-u-flex-align-right {
  align-items: flex-end !important
}

.vl-u-flex-align-baseline {
  align-items: baseline !important
}

.vl-u-flex-align-stretch {
  align-items: stretch !important
}

.vl-u-flex-v-flex-start, .vl-u-flex-v-top {
  justify-content: flex-start !important
}

.vl-u-flex-v-center {
  justify-content: center !important
}

.vl-u-flex-v-bottom, .vl-u-flex-v-flex-end {
  justify-content: flex-end !important
}

.vl-u-flex-v-space-between {
  justify-content: space-between !important
}

.vl-u-flex-v-space-around {
  justify-content: space-around !important
}

.vl-u-flex-direction-row {
  flex-direction: row !important
}

.vl-u-flex-direction-column {
  flex-direction: column !important
}

.vl-u-flex-direction-row-reverse {
  flex-direction: row-reverse !important
}

.vl-u-flex-direction-column-reverse {
  flex-direction: column-reverse !important
}

.vl-u-flex-wrap-wrap {
  flex-wrap: wrap !important
}

.vl-u-flex-wrap-nowrap {
  flex-wrap: nowrap !important
}

.vl-u-flex-wrap-reverse {
  flex-wrap: wrap-reverse !important
}

@media screen and (min-width: 1023px) {
  .vl-u-flex-align-left--l {
    align-items: flex-start !important
  }

  .vl-u-flex-align-flex-start--l, .vl-u-flex-align-left--l {
    align-items: flex-start !important
  }

  .vl-u-flex-align-center--l {
    align-items: center !important
  }

  .vl-u-flex-align-flex-end--l, .vl-u-flex-align-right--l {
    align-items: flex-end !important
  }

  .vl-u-flex-align-baseline--l {
    align-items: baseline !important
  }

  .vl-u-flex-align-stretch--l {
    align-items: stretch !important
  }

  .vl-u-flex-v-flex-start--l, .vl-u-flex-v-top--l {
    justify-content: flex-start !important
  }

  .vl-u-flex-v-center--l {
    justify-content: center !important
  }

  .vl-u-flex-v-bottom--l, .vl-u-flex-v-flex-end--l {
    justify-content: flex-end !important
  }

  .vl-u-flex-v-space-between--l {
    justify-content: space-between !important
  }

  .vl-u-flex-v-space-around--l {
    justify-content: space-around !important
  }

  .vl-u-flex-direction-row--l {
    flex-direction: row !important
  }

  .vl-u-flex-direction-column--l {
    flex-direction: column !important
  }

  .vl-u-flex-direction-row-reverse--l {
    flex-direction: row-reverse !important
  }

  .vl-u-flex-direction-column-reverse--l {
    flex-direction: column-reverse !important
  }

  .vl-u-flex-wrap-wrap--l {
    flex-wrap: wrap !important
  }

  .vl-u-flex-wrap-nowrap--l {
    flex-wrap: nowrap !important
  }

  .vl-u-flex-wrap-reverse--l {
    flex-wrap: wrap-reverse !important
  }
}

@media screen and (max-width: 1023px) {
  .vl-u-flex-align-left--m {
    align-items: flex-start !important
  }

  .vl-u-flex-align-flex-start--m, .vl-u-flex-align-left--m {
    align-items: flex-start !important
  }

  .vl-u-flex-align-center--m {
    align-items: center !important
  }

  .vl-u-flex-align-flex-end--m, .vl-u-flex-align-right--m {
    align-items: flex-end !important
  }

  .vl-u-flex-align-baseline--m {
    align-items: baseline !important
  }

  .vl-u-flex-align-stretch--m {
    align-items: stretch !important
  }

  .vl-u-flex-v-flex-start--m, .vl-u-flex-v-top--m {
    justify-content: flex-start !important
  }

  .vl-u-flex-v-center--m {
    justify-content: center !important
  }

  .vl-u-flex-v-bottom--m, .vl-u-flex-v-flex-end--m {
    justify-content: flex-end !important
  }

  .vl-u-flex-v-space-between--m {
    justify-content: space-between !important
  }

  .vl-u-flex-v-space-around--m {
    justify-content: space-around !important
  }

  .vl-u-flex-direction-row--m {
    flex-direction: row !important
  }

  .vl-u-flex-direction-column--m {
    flex-direction: column !important
  }

  .vl-u-flex-direction-row-reverse--m {
    flex-direction: row-reverse !important
  }

  .vl-u-flex-direction-column-reverse--m {
    flex-direction: column-reverse !important
  }

  .vl-u-flex-wrap-wrap--m {
    flex-wrap: wrap !important
  }

  .vl-u-flex-wrap-nowrap--m {
    flex-wrap: nowrap !important
  }

  .vl-u-flex-wrap-reverse--m {
    flex-wrap: wrap-reverse !important
  }
}

@media screen and (max-width: 767px) {
  .vl-u-flex-align-left--s {
    align-items: flex-start !important
  }

  .vl-u-flex-align-flex-start--s, .vl-u-flex-align-left--s {
    align-items: flex-start !important
  }

  .vl-u-flex-align-center--s {
    align-items: center !important
  }

  .vl-u-flex-align-flex-end--s, .vl-u-flex-align-right--s {
    align-items: flex-end !important
  }

  .vl-u-flex-align-baseline--s {
    align-items: baseline !important
  }

  .vl-u-flex-align-stretch--s {
    align-items: stretch !important
  }

  .vl-u-flex-v-flex-start--s, .vl-u-flex-v-top--s {
    justify-content: flex-start !important
  }

  .vl-u-flex-v-center--s {
    justify-content: center !important
  }

  .vl-u-flex-v-bottom--s, .vl-u-flex-v-flex-end--s {
    justify-content: flex-end !important
  }

  .vl-u-flex-v-space-between--s {
    justify-content: space-between !important
  }

  .vl-u-flex-v-space-around--s {
    justify-content: space-around !important
  }

  .vl-u-flex-direction-row--s {
    flex-direction: row !important
  }

  .vl-u-flex-direction-column--s {
    flex-direction: column !important
  }

  .vl-u-flex-direction-row-reverse--s {
    flex-direction: row-reverse !important
  }

  .vl-u-flex-direction-column-reverse--s {
    flex-direction: column-reverse !important
  }

  .vl-u-flex-wrap-wrap--s {
    flex-wrap: wrap !important
  }

  .vl-u-flex-wrap-nowrap--s {
    flex-wrap: nowrap !important
  }

  .vl-u-flex-wrap-reverse--s {
    flex-wrap: wrap-reverse !important
  }
}

@media screen and (max-width: 500px) {
  .vl-u-flex-align-left--xs {
    align-items: flex-start !important
  }

  .vl-u-flex-align-flex-start--xs, .vl-u-flex-align-left--xs {
    align-items: flex-start !important
  }

  .vl-u-flex-align-center--xs {
    align-items: center !important
  }

  .vl-u-flex-align-flex-end--xs, .vl-u-flex-align-right--xs {
    align-items: flex-end !important
  }

  .vl-u-flex-align-baseline--xs {
    align-items: baseline !important
  }

  .vl-u-flex-align-stretch--xs {
    align-items: stretch !important
  }

  .vl-u-flex-v-flex-start--xs, .vl-u-flex-v-top--xs {
    justify-content: flex-start !important
  }

  .vl-u-flex-v-center--xs {
    justify-content: center !important
  }

  .vl-u-flex-v-bottom--xs, .vl-u-flex-v-flex-end--xs {
    justify-content: flex-end !important
  }

  .vl-u-flex-v-space-between--xs {
    justify-content: space-between !important
  }

  .vl-u-flex-v-space-around--xs {
    justify-content: space-around !important
  }

  .vl-u-flex-direction-row--xs {
    flex-direction: row !important
  }

  .vl-u-flex-direction-column--xs {
    flex-direction: column !important
  }

  .vl-u-flex-direction-row-reverse--xs {
    flex-direction: row-reverse !important
  }

  .vl-u-flex-direction-column-reverse--xs {
    flex-direction: column-reverse !important
  }

  .vl-u-flex-wrap-wrap--xs {
    flex-wrap: wrap !important
  }

  .vl-u-flex-wrap-nowrap--xs {
    flex-wrap: nowrap !important
  }

  .vl-u-flex-wrap-reverse--xs {
    flex-wrap: wrap-reverse !important
  }
}

.vl-u-bg-alt {
  background-color: #f7f9fc
}

.vl-u-bg-error {
  background-color: #fbebeb
}

.vl-u-bg-warning {
  background-color: #fff9e8
}

.vl-u-bg-success {
  background-color: #ecf6ee
}

.vl-u-border {
  padding-left: 3.5rem;
  position: relative
}

@media screen and (max-width: 767px) {
  .vl-u-border {
    padding-left: 1.75rem
  }
}

.vl-u-border:after {
  content: "";
  width: .5rem;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background: var(--vl-theme-primary-color)
}

.vl-u-border.vl-grid:after {
  height: 100%;
  bottom: 0;
  top: auto;
  left: 3rem
}

@media screen and (max-width: 767px) {
  .vl-u-border.vl-grid:after {
    left: 1.5rem
  }
}

.vl-u-border.vl-grid--is-stacked:after {
  height: calc(100% - 3rem)
}

@media screen and (max-width: 767px) {
  .vl-u-border.vl-grid--is-stacked:after {
    height: calc(100% - 1.5rem)
  }
}

.vl-u-highlight-content {
  padding: 4.1666666667%;
  border: 1px #cbd2da solid
}

.vl-u-highlight-content--alt {
  background: #f7f9fc;
  border: none
}

button.vl-vi {
  border: 0;
  appearance: none;
  padding: 0;
  outline: 0
}

a.vl-vi {
  text-decoration: none
}

.vl-vi.vl-vi-u-hidden-text {
  font-size: 0
}

.vl-vi.vl-vi-u-xs::before {
  font-size: .8rem
}

.vl-vi.vl-vi-u-s::before {
  font-size: 1.3rem
}

.vl-vi.vl-vi-u-m::before {
  font-size: 1.7rem
}

.vl-vi.vl-vi-u-l::before {
  font-size: 2rem
}

.vl-vi.vl-vi-u-xl::before {
  font-size: 2.2rem
}

.vl-vi.vl-vi-u-90deg::before {
  display: inline-block;
  transform: rotate(90deg)
}

.vl-vi.vl-vi-u-180deg::before {
  display: inline-block;
  transform: rotate(180deg)
}

.vl-vi.vl-vi-u-link::before {
  display: inline-block;
  margin-right: 1rem;
  color: #000;
  font-size: 1.3rem;
  text-decoration: none
}

.vl-vi.vl-vi-u-color-grey {
  color: #cbd2da
}

.vl-vi.vl-vi-u-badge {
  display: inline-block;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle
}

.vl-vi.vl-vi-u-badge::before {
  margin: 0;
  vertical-align: middle;
  display: block
}

.vl-vi.vl-vi-u-badge--link {
  margin-right: 1rem
}

.vl-vi.vl-vi-u-badge--link-after {
  margin-left: 1rem
}

.vl-vi.vl-vi-u-badge--positive {
  background-color: #3ca854;
  color: #ecf6ee
}

.vl-vi.vl-vi-u-badge--positive:focus, .vl-vi.vl-vi-u-badge--positive:hover, a:focus .vl-vi.vl-vi-u-badge--positive, a:hover .vl-vi.vl-vi-u-badge--positive {
  background-color: #3ca854;
  color: #ecf6ee
}

.vl-vi.vl-vi-u-badge--action {
  background-color: #05c;
  color: #e6eefa
}

.vl-vi.vl-vi-u-badge--action:focus, .vl-vi.vl-vi-u-badge--action:hover, a:focus .vl-vi.vl-vi-u-badge--action, a:hover .vl-vi.vl-vi-u-badge--action {
  background-color: #003bb0;
  color: #e6eefa
}

.vl-vi.vl-vi-u-badge--negative {
  background-color: #db3434;
  color: #fbebeb
}

.vl-vi.vl-vi-u-badge--negative:focus, .vl-vi.vl-vi-u-badge--negative:hover, a:focus .vl-vi.vl-vi-u-badge--negative, a:hover .vl-vi.vl-vi-u-badge--negative {
  background-color: #af2929;
  color: #fbebeb
}

.vl-vi.vl-vi-u-badge--warning {
  background-color: #ffc515;
  color: #fff9e8
}

.vl-vi.vl-vi-u-badge--neutral {
  background-color: #f7f9fc;
  color: #333332
}

.vl-vi.vl-vi-u-badge--neutral:focus, .vl-vi.vl-vi-u-badge--neutral:hover, a:focus .vl-vi.vl-vi-u-badge--neutral, a:hover .vl-vi.vl-vi-u-badge--neutral {
  background-color: #05c;
  color: #e6eefa
}

.vl-vi.vl-vi-u-badge--light {
  background-color: #fff;
  color: #333332
}

.vl-vi.vl-vi-u-badge--light:focus, .vl-vi.vl-vi-u-badge--light:hover, a:focus .vl-vi.vl-vi-u-badge--light, a:hover .vl-vi.vl-vi-u-badge--light {
  background-color: #05c;
  color: #e6eefa
}

.vl-vi.vl-vi-u-badge--xxsmall {
  width: 1.8rem;
  height: 1.8rem;
  line-height: 1.8rem
}

.vl-vi.vl-vi-u-badge--xxsmall::before {
  font-size: .8rem
}

@media screen and (max-width: 767px) {
  .vl-vi.vl-vi-u-badge--xxsmall {
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem
  }

  .vl-vi.vl-vi-u-badge--xxsmall::before {
    font-size: .7rem
  }
}

.vl-vi.vl-vi-u-badge--xsmall {
  width: 1.8rem;
  height: 1.8rem;
  line-height: 1.8rem
}

.vl-vi.vl-vi-u-badge--xsmall::before {
  font-size: 1.3rem
}

@media screen and (max-width: 767px) {
  .vl-vi.vl-vi-u-badge--xsmall {
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem
  }

  .vl-vi.vl-vi-u-badge--xsmall::before {
    font-size: 1.1rem
  }
}

.vl-vi.vl-vi-u-badge--small {
  width: 2.6rem;
  height: 2.6rem;
  line-height: 2.6rem
}

.vl-vi.vl-vi-u-badge--small::before {
  font-size: 1.3rem
}

@media screen and (max-width: 767px) {
  .vl-vi.vl-vi-u-badge--small {
    width: 2.2rem;
    height: 2.2rem;
    line-height: 2.2rem
  }

  .vl-vi.vl-vi-u-badge--small::before {
    font-size: 1.2rem
  }
}

.vl-vi.vl-vi-u-badge--medium {
  width: 4rem;
  height: 4rem;
  line-height: 4rem
}

.vl-vi.vl-vi-u-badge--medium::before {
  font-size: 2rem
}

@media screen and (max-width: 767px) {
  .vl-vi.vl-vi-u-badge--medium {
    width: 3rem;
    height: 3rem;
    line-height: 3rem
  }

  .vl-vi.vl-vi-u-badge--medium::before {
    font-size: 1.5rem
  }
}

.vl-vi.vl-vi-u-badge--large {
  width: 5rem;
  height: 5rem;
  line-height: 5rem
}

.vl-vi.vl-vi-u-badge--large::before {
  font-size: 2.5rem
}

@media screen and (max-width: 767px) {
  .vl-vi.vl-vi-u-badge--large {
    width: 4rem;
    height: 4rem;
    line-height: 4rem
  }

  .vl-vi.vl-vi-u-badge--large::before {
    font-size: 2rem
  }
}

.vl-u-mark {
  background-color: transparent;
  box-shadow: inset 0 -10px 0 0 rgba(255, 197, 21, .3)
}

.vl-u-mark--accent {
  background-color: transparent;
  box-shadow: inset 0 -10px 0 0 var(--vl-theme-primary-color-rgba-30)
}

.vl-u-mark--info {
  background-color: transparent;
  box-shadow: inset 0 -10px 0 0 rgba(203, 210, 218, .4)
}

.vl-u-mark--success {
  background-color: transparent;
  box-shadow: inset 0 -10px 0 0 rgba(60, 168, 84, .2)
}

.vl-u-mark--warning {
  background-color: transparent;
  box-shadow: inset 0 -10px 0 0 rgba(255, 197, 21, .2)
}

.vl-u-mark--error {
  background-color: transparent;
  box-shadow: inset 0 -10px 0 0 rgba(219, 52, 52, .2)
}

@media screen and (max-width: 767px) {
  .vl-u-mobile-no-equal-height {
    min-height: 0 !important
  }
}

.js-vl-clamp-useless {
  display: none !important
}

.js .js-vl-show-checked {
  display: none
}

.js .js-vl-show-checked--open {
  display: block
}

.js.vl-flexbox .js-vl-col-float-right {
  position: absolute;
  z-index: 1;
  padding-bottom: 3rem;
  right: 0
}

@media screen and (max-width: 767px) {
  .js.vl-flexbox .js-vl-col-float-right {
    position: static;
    padding-bottom: 0;
    margin-top: 1.5rem
  }
}

@media screen and (max-width: 767px) {
  .js-vl-col-float-right--pushed {
    margin-top: 0 !important
  }
}

[data-vl-show-on-select-content] {
  display: none
}

[data-vl-show-on-select-content][data-vl-show=true] {
  display: block
}

.vl-u-offset--spacing {
  padding: 0 4.1666666667% 1rem
}

.vl-u-offset--left {
  margin-left: -4.1666666667%
}

@media screen and (max-width: 1023px) {
  .vl-u-offset--left {
    margin-left: 0;
    margin-right: 0
  }
}

.vl-u-offset--left.vl-u-offset--spacing {
  padding-left: 0
}

.vl-u-offset--right {
  margin-right: -4.1666666667%
}

@media screen and (max-width: 1023px) {
  .vl-u-offset--right {
    margin-left: 0;
    margin-right: 0
  }
}

.vl-u-offset--right.vl-u-offset--spacing {
  padding-right: 0
}

.vl-u-float-right {
  float: right !important
}

.vl-u-float-left {
  float: left !important
}

.vl-u-float-none {
  float: none !important
}

.vl-u-display-block {
  display: block !important
}

.vl-u-display-inline-block {
  display: inline-block !important
}

.vl-u-display-flex {
  display: flex !important
}

.vl-u-display-inline-flex {
  display: inline-flex !important
}

.vl-u-clearfix::after, .vl-u-clearfix::before {
  content: "";
  display: table
}

.vl-u-clearfix::after {
  clear: both
}

.vl-u-no-overflow {
  overflow: hidden
}

.vl-u-position-relative {
  position: relative
}

.vl-u-named-target::before, .vl-u-offset::before {
  content: "";
  display: block;
  height: 90px;
  margin: -90px 0 0;
  z-index: -1;
  position: relative
}

.vl-u-named-target-wrapper {
  position: relative
}

.vl-u-named-target-dummy:empty, .vl-u-offset-dummy:empty {
  display: block;
  position: absolute;
  top: 0;
  margin-top: -90px;
  height: 1px;
  width: 1px;
  visibility: hidden;
  opacity: 0
}

.vl-u-inline-list {
  display: inline-block;
  vertical-align: top
}

@media print {
  .vl-u-hide-on-print {
    display: none
  }

  .vl-u-show-on-print {
    display: block
  }

  footer, header {
    display: none
  }

  .vl-main-content footer, .vl-main-content header, [role=main] footer, [role=main] header, main footer, main header {
    display: block
  }

  .iwgf2, .iwgf3, .iwgh2, .iwgh3 {
    display: none
  }
}

.vl-u-hr {
  border: 0;
  border-bottom: 1px solid #cbd2da;
  margin-top: 0;
  margin-bottom: 0
}

.vl-u-hr--wave {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='19' viewBox='0 0 100 19' %3E%3Cpath d='M0,3.5c12.5,0,12.5,12,25,12s12.5-12,25-12,12.5,12,25,12,12.5-12,25-12' fill='none' stroke='%23d2d7dd' stroke-miterlimit='10' stroke-width='6'/%3E%3C/svg%3E") repeat-x;
  background-size: 20px 4px;
  height: 4px;
  border-bottom: 0
}

.vl-u-hr--dashed {
  min-height: 6px;
  border: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6.04 5.99'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23bec5cf;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EAsset 1%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Crect class='cls-1' x='1.01' y='3.99' width='1.01' height='1'/%3E%3Crect class='cls-1' y='4.99' width='1.01' height='1'/%3E%3Crect class='cls-1' x='3.02' y='2' width='1.01' height='1'/%3E%3Crect class='cls-1' x='2.01' y='2.99' width='1.01' height='1'/%3E%3Crect class='cls-1' x='5.04' width='1.01' height='1'/%3E%3Crect class='cls-1' x='4.03' y='1' width='1.01' height='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat-x;
  background-size: 6px 6px
}

::selection {
  background-color: var(--vl-theme-primary-color-rgba-30)
}

::-moz-selection {
  background-color: var(--vl-theme-primary-color-rgba-30)
}

.vl-u-spacer {
  margin-bottom: 2rem
}

.vl-u-spacer--xsmall {
  margin-bottom: 1rem
}

.vl-u-spacer--small {
  margin-bottom: 1.5rem
}

.vl-u-spacer--medium {
  margin-bottom: 3rem
}

.vl-u-spacer--large {
  margin-bottom: 6rem
}

@media screen and (max-width: 767px) {
  .vl-u-spacer--large {
    margin-bottom: 3rem
  }
}

.vl-u-spacer--none {
  margin-bottom: 0
}

.js-vl-sticky-placeholder {
  position: relative
}

@media screen and (max-width: 767px) {
  .js-vl-sticky-placeholder {
    height: auto !important
  }
}

.js-vl-sticky--absolute {
  position: absolute
}

.js-vl-sticky--fixed {
  position: fixed
}

.vl-u-sticky {
  top: 0;
  position: sticky
}

.vl-u-sticky-gf {
  display: flex;
  flex-direction: column;
  min-height: 100vh
}

@media screen and (-ms-high-contrast: active),(-ms-high-contrast: none) {
  .vl-u-sticky-gf {
    display: block
  }
}

.vl-u-sticky-gf .vl-page {
  flex: 1
}

@media screen and (-ms-high-contrast: active),(-ms-high-contrast: none) {
  .vl-u-sticky-gf .vl-page {
    overflow: hidden
  }
}

.vl-u-text--ellipse {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
}

.vl-u-text--uppercase {
  text-transform: uppercase
}

.vl-u-text--lowercase {
  text-transform: lowercase
}

.vl-u-text--capitalize::first-letter {
  text-transform: uppercase
}

.vl-u-text--success {
  color: #3ca854
}

.vl-u-text--warning {
  color: #ffc515
}

.vl-u-text--error {
  color: #db3434
}

.vl-u-text--bold {
  font-weight: 500
}

.vl-u-text--italic {
  font-style: italic
}

.vl-u-text--small {
  font-size: 1.4rem !important
}

.vl-u-text--xsmall {
  font-size: 1.2rem !important
}

.vl-u-text--xxsmall {
  font-size: 1rem !important
}

.vl-u-text--marked, mark {
  background-color: transparent;
  box-shadow: inset 0 -10px 0 0 rgba(255, 197, 21, .3)
}

@media screen and (min-width: 1023px) {
  .vl-u-visible--l {
    display: block !important
  }
}

@media screen and (max-width: 1023px) {
  .vl-u-visible--m {
    display: block !important
  }
}

@media screen and (max-width: 767px) {
  .vl-u-visible--s {
    display: block !important
  }
}

@media screen and (max-width: 500px) {
  .vl-u-visible--xs {
    display: block !important
  }
}

.vl-u-hidden {
  display: none
}

@media screen and (min-width: 1023px) {
  .vl-u-hidden--l {
    display: none !important
  }
}

@media screen and (max-width: 1023px) {
  .vl-u-hidden--m {
    display: none !important
  }
}

@media screen and (max-width: 767px) {
  .vl-u-hidden--s {
    display: none !important
  }
}

@media screen and (max-width: 500px) {
  .vl-u-hidden--xs {
    display: none !important
  }
}

.vl-u-whitespace {
  white-space: normal
}

.vl-u-whitespace--nowrap {
  white-space: nowrap
}

.vl-u-whitespace--pre {
  white-space: pre
}

.vl-u-whitespace--pre-line {
  white-space: pre-line
}

.vl-u-whitespace--pre-wrap {
  white-space: prewrap
}

.vl-u-whitespace--unset {
  white-space: unset
}

.vl-u-whitespace--break-spaces {
  white-space: break-spaces
}

#title-label {
  display: inline-block;
  margin-left: 3rem
}

.vl-step--accordion.js-vl-accordion--open .vl-step__content-wrapper {
  overflow: inherit
}

      </style>
      <ul id="steps" class="vl-steps"></ul>
    `);
  }

  connectedCallback() {
    // this._observer = this.__observeChildElements(() => this._processSteps());
    this._processSteps();
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
        this.querySelectorAll('vl-step, vl-duration-step').forEach((item, index) => {
          this._stepsElement.append(item.template(index));
          const contentSlot = item.querySelector(`[slot="content"]`);
          if (contentSlot) {
            contentSlot.setAttribute('slot', `content-${index}`);
            this.append(contentSlot);
          }
        });
      });
    });
  }

  __observeChildElements(callback) {
    const observer = new MutationObserver(callback);
    observer.observe(this, {childList: true, attributes: true, subtree: true});
    return observer;
  }
}

define('vl-steps', VlSteps);

