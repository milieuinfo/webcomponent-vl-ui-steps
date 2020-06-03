const VlSteps = require('../components/vl-steps');
const {Page, Config} = require('vl-ui-core').Test;

class VlStepsPage extends Page {
  async getSteps(number) {
    return this._getSteps(`#vl-steps-${number}`);
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-steps.html');
  }

  async _getSteps(selector) {
    return new VlSteps(this.driver, selector);
  }
}

module.exports = VlStepsPage;
