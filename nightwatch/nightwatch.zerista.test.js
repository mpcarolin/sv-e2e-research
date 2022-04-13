describe('Nightwatch Proof of Concept: Zerista', function () {

  // Nightwatch doesn't have a built-in way to preserve auth state between tests,
  // So we need to run through the login procedure each time
  beforeEach(function (browser) {
    console.log('LOGGING IN')
    const loginPage = browser.page.login() 
    loginPage
      .navigate()
      .login()
  })

  it('should have logged in with the login page', function (browser) {
    browser
      .url('https://michael-test.staging.zerista.io/')
      .assert.urlEquals('https://michael-test.staging.zerista.io/')
      .end()
  })

  it('should display user name', function (browser) {
    const home = browser.page.home()

    // technically '@accountDropdown` isn't visible immediately 
    // after page load. It takes 300ms or so to render.
    // But nightwatch BY DEFAULT retries failed assertions for 5 seconds
    // (configurable in settings), so this assertion succeeds
    home
      .navigate()
      .assert.visible('@accountDropdown')
  })

  it('should enable attendee search in attendees tab', function (browser) {
    const home = browser.page.home()

    home
      .navigate()
      .openAttendeePage()
      .useXpath()
      .setValue(
        '//*[@placeholder="Ex: Name, Company, Position, Country, Tags"]',
        'Jacob'
      )
      .useCss()
      .click('#search-button')
      .useXpath()
      .assert.visible('//*[text()="Jacob Smith"]')

  })
})