const { test, expect } = require('@playwright/test');
let faker = require('faker');


test.describe('Fluxo cadastro de usuario', () => {

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    email = faker.internet.email()
    primeiroNome = faker.name.firstName()
    segundoNome = faker.name.lastName()
    password = faker.random.alpha(5)
    endereco = faker.address.city()
    city = faker.address.cityName()
    compania = faker.company.companyName()
    zipcode = faker.address.zipCode("#####")
    mobilePhone = faker.phone.phoneNumber('(###) ###-####')
    aliasAdress = faker.random.word()
  });

test('Teste de cadastro @smoke', async ({ page }) => {

    await page.locator('.login').click()

    createAcount = await page.locator('#create-account_form > .page-subheading')
    
    await page.fill('#email_create', `${email}`);
    
    await page.click("#SubmitCreate")

    formNewAccount = await page.locator('h1:has-text("Create an account")')
    await expect(formNewAccount).toHaveText("Create an account")
   
    await page.check('#id_gender1');

    await page.fill('#customer_firstname', `${primeiroNome}`)
    const valueFirstName = await page.$eval('#customer_firstname', el => el.value)
   
    await page.fill('#customer_lastname', `${segundoNome}`)
    const valueSecondName = await page.$eval('#customer_lastname', el => el.value)

    await page.fill('#passwd', `${password}`)

    await page.selectOption('#days', '18');
    await page.selectOption('#months', '2');
    await page.selectOption('#years', '1992');

    await page.fill('#firstname', `${valueFirstName}`)
    await page.fill('#lastname', `${valueSecondName}`)
    

    await page.type('#company', `${compania}`);

    await page.type('#address1', `${endereco}`);
    
    await page.selectOption('#id_country', { label: 'United States' });

    await page.selectOption('#id_state', { label: 'California' });

    await page.fill('#phone_mobile', `${mobilePhone}`) 
    
    await page.fill('#city', `${city}` ) 

    await page.type('#postcode', `${zipcode}`);
   
    await page.press('#alias','Delete','Delete');
    await page.type('#alias', `${aliasAdress}`)

    await page.locator('#submitAccount').click()

    await expect(page.locator('.page-heading')).toHaveText('My account');

  });
});