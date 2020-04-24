const { VlElement } = require('vl-ui-core').Test;
const { By } = require('vl-ui-core').Test.Setup;

class VlStep extends VlElement {
    async getIdentifier() {
        return this._getSlotElement('identifier');
    }

    async getIdentifierAnnotation() {
        return this._getSlotElement('identifier-annotation');
    }

    async getTitle() {
        return this._getSlotElement('title');
    }

    async getSubTitle() {
        return this._getSlotElement('sub-title');
    }

    async getTitleAnnotation() {
        return this._getSlotElement('title-annotation');
    }

    async getContent() {
        return this._getSlotElement('content');
    }

    async isDisabled() {
        return this._hasClass('disabled');
    }

    async isSuccess() {
        return this._hasClass('success');
    }

    async isWarning() {
        return this._hasClass('warning');
    }

    async isError() {
        return this._hasClass('error');
    }

    async _hasClass(type) {
        return this.hasClass(`vl-step--${type}`);
    }

    async _getSlotElement(identifier) {
        return this._getElement(`[slot="${identifier}"]`);
    }

    async _getElement(identifier) {
        const element = await this.findElement(By.css(identifier));
        return new VlElement(this.driver, element);
    }
}

module.exports = VlStep;
