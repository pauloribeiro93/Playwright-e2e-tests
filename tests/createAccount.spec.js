const { test } = require('@playwright/test');
const {CreateAccountPage} =  require('../models/createAccount/createAccount')
const {HomePage} =  require('../models/home/home')
const {MyAccount} =  require('../models/myAccount/myAccount')
let faker = require('faker');

test.describe('Suite Create Account', () => {
test.beforeEach(async ({ page }) => {
    await page.goto('/');
    email = faker.internet.email()
    firstName = faker.name.firstName()
    lastName = faker.name.lastName()
    password = faker.random.alpha(5)
    address = faker.address.city()
    city = faker.address.cityName()
    company = faker.company.companyName()
    zipcode = faker.address.zipCode("#####")
    mobilePhone = faker.phone.phoneNumber('(###) ###-####')
    aliasAdress = faker.random.word()
  });

test('Test Create New Account @smoke', async ({ page }) => {
    const createAccount = new CreateAccountPage(page) 
    const home = new HomePage(page)
    const myAccount = new MyAccount(page)

    await home.clickLogin()
    await myAccount.checkSubheading('Create an account')

    await myAccount.fillEmailCreate(email)
    await myAccount.submitCreate()

    await createAccount.fillForm(firstName,lastName,company,address,password,mobilePhone,
      city,zipcode,aliasAdress)

    await myAccount.checkSucessLoginHeading('My account')
  
  });
});