const ELEMENTS = require('./elements').ELEMENTS

exports.HomePage = class HomePage {

    constructor(page) {
      this.page = page;
    }

    async clickLogin() {
    await this.page.locator(ELEMENTS.butonLogin).click()
      
    }
  };

