const { test, expect } = require('@playwright/test');
let faker = require('faker');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    email = faker.internet.email()
    primeiroNome = faker.name.firstName()
    segundoNome = faker.name.lastName()
  });
  
test('Smoke test', async ({ page }) => {
    await page.locator('.login').click()

    createAcount = await page.locator('#create-account_form > .page-subheading')
    
    await page.fill('#email_create', `${email}`);
    
    await page.click("#SubmitCreate")

    formNewAccount = await page.locator('h1:has-text("Create an account")')
    await expect(formNewAccount).toHaveText("Create an account")
   
    await page.fill('#customer_firstname', `${primeiroNome}`)
   
});