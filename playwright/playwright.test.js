const { test, expect } = require('@playwright/test')

test('Demo', async ({ page }) => {
  await page.goto('https://www.arstechnica.com')
  await page.locator('text=Biz & IT').click()
  const title = page.locator('.archive-desc')
  await expect(title).toHaveText('Information Technology')
})