const { test, expect } = require('@playwright/test');

test.describe('two tests', () => {

test.beforeEach(async ({ context }) => {
    // Block any css requests for each test in this file.
    await context.route(/.css/, route => route.abort());
  });
  

test('basic test', async ({ page }) => {
  await page.goto('/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
  


});

test('my test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  
    // Expect an attribute "to be strictly equal" to the value.
    await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');
  
    // Expect an element "to be visible".
    await expect(page.locator('text=Learn more').first()).toBeVisible();
  
    await page.click('text=Get Started');
    // Expect some text to be visible on the page.
    await expect(page.locator('text=Introduction').first()).toBeVisible();

  });
});