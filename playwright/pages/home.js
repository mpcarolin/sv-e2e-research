// playwright-dev-page.js
exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.userAccountDropdown = page.locator('text=Hi, Michael')
    // this.attendeeTab = page.locator('role=link text=Attendees')
    this.attendeeTab = page.locator('a', { hasText: 'Attendees' })
  }

  async goto() {
    await this.page.goto('/')

    // ensure it has finished rendering things
    await this.userAccountDropdown.waitFor() 
  }

  async openAttendeePage () {
    await this.attendeeTab.click()
  }
}