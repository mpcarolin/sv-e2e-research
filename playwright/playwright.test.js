const { test, expect } = require('@playwright/test')
const { HomePage } = require('./pages/home')

const { describe } = test

describe('Playwright Proof of Concept: Zerista', () => {
  test('should have logged in', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL('https://michael-test.staging.zerista.io/');
  })

  test('should display user name and user options', async ({ page }) => {
    // this will wait for page to fire "load" event
    await page.goto('/')

    // By default, playwright does NOT retry failed assertions,
    // so we need to waitFor this element to be visible on the page,
    // since it takes 300ms or so to appear.
    //
    // This IS configurable using the --retries flag.
    await page.locator('text=Hi, Michael').waitFor()
  })

  // test out the Page-Object-Model
  test('should enable attendee search in attendees tab', async ({ page }) => {
    const home = new HomePage(page)
    await home.goto()
    await home.openAttendeePage()

    // fill input 
    await page
      .locator('[placeholder="Ex: Name, Company, Position, Country, Tags"]')
      .fill('Jacob')

    await page.click('#search-button')

    await page.locator('text=Jacob Smith').waitFor()
  })


})