// global-setup.js
const { chromium } = require('@playwright/test');

module.exports = async config => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://my.staging.zerista.io/login');
  await page
    .locator('[placeholder="Email"]')
    .click();
  await page.locator('[placeholder="Email"]').fill(process.env.USERNAME);
  await page.locator('[placeholder="Email"]').press('Tab');
  await page.locator('[placeholder="Password"]').fill(process.env.PASSWORD);
  await page.locator('input:has-text("Login")').click();

  await page.context().storageState({ path: 'playwright/storageState.json' });

  await browser.close();
};