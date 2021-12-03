const { expect, } = require('@playwright/test');
const ELEMENTS = require('./elements').ELEMENTS

exports.CreateAccountPage = class CreateAccountPage {
     /**
     * 
     */ 
    constructor(page) {
      this.page = page;
    }
    
    async checkHeading(heading){
      await expect(this.page.locator(ELEMENTS.heading)).toHaveText(`${heading}`)
    }

    async fillForm(firstName,lastName,company,address,password,mobilePhone,city,zipcode,aliasAdress) {
    await this.page.waitForURL('http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation')
    
    await this.page.check(ELEMENTS.idGender1);
      
    await this.page.fill(ELEMENTS.custumerFristname, `${firstName}`)
    const valueFirstName = await this.page.$eval(ELEMENTS.custumerFristname, el => el.value)
   
    await this.page.fill(ELEMENTS.customerLastname, `${lastName}`)
    const valueSecondName = await this.page.$eval(ELEMENTS.customerLastname, el => el.value)

    await this.page.fill(ELEMENTS.password, `${password}`)

    await this.page.selectOption(ELEMENTS.days, '18');
    await this.page.selectOption(ELEMENTS.months, '2');
    await this.page.selectOption(ELEMENTS.years, '1992');

    await this.page.fill(ELEMENTS.firstName, `${valueFirstName}`)
    await this.page.fill(ELEMENTS.lastName, `${valueSecondName}`)
    

    await this.page.type(ELEMENTS.company, `${company}`);

    await this.page.type(ELEMENTS.adress1, `${address}`);
    
    await this.page.selectOption(ELEMENTS.idCountry, { label: 'United States' });

    await this.page.selectOption(ELEMENTS.idState, { label: 'California' });

    await this.page.fill(ELEMENTS.phoneMobile, `${mobilePhone}`) 
    
    await this.page.fill(ELEMENTS.city, `${city}` ) 

    await this.page.type(ELEMENTS.postcode, `${zipcode}`);
   
    await this.page.press(ELEMENTS.alias,'Delete');
    await this.page.type(ELEMENTS.alias, `${aliasAdress}`)

    await this.page.locator(ELEMENTS.submitAccount).click()

    }
  };