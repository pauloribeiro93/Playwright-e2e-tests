const { expect } = require('@playwright/test');
const ELEMENTS = require('./elements').ELEMENTS

exports.MyAccount = class MyAccount {

    constructor(page) {
      this.page = page;
    }

    async checkSucessLoginHeading(heading){
      await expect(this.page.locator(ELEMENTS.pageHeading)).toHaveText(`${heading}`)
        
    }

    async checkSubheading(subheading){
    await expect(this.page.locator(ELEMENTS.pageSubheading)).toHaveText(`${subheading}`)
      
    }

    async submitCreate() {
      await this.page.click(ELEMENTS.buttonCreate)
    }
    
    async fillEmailCreate(email) {
      await this.page.fill(ELEMENTS.inputEmailCreate, `${email}`);
    }
  };

  