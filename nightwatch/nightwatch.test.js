describe('Nightwatch Proof of Concept: https://sambabiker.com', () => {

  const delay = async seconds => 
    await new Promise((res) => setTimeout(res, seconds * 1000))

  it('should be able to click on elements by text content', function (browser) {
    const expectedArticleTitle = 'SAMBA launches Rattling Creek Trails expansion Phase 2'
    browser
      .url('https://sambabiker.com/')
      .useXpath()
      .click("//a[text()='News']")
      .assert.visible(`//a[text()='${expectedArticleTitle}']`)
      .end()
  })

  it.only('should work with async/await and chai matchers', async browser => {
    await browser.url('https://sambabiker.com/news')
    await browser.useXpath()
    await browser.click(
      `//a[text()='SAMBA launches Rattling Creek Trails expansion Phase 2']`
    )

    // wait 3 seconds using an api other than nightwatch
    await delay(3)
    
    const element = await browser.findElement(
      '//p[contains(text(), "SAMBA is stoked and proud")]'
    )

    // chai matcher
    expect(element).to.be.visible

    await browser.end()
  })

  it('should support selenium assertion functions', async function(browser) {
    browser
      .url('https://sambabiker.com/')
      .ensure.titleMatches(/Home Page - SAMBA/)
      .ensure.elementIsVisible('#et-main-area')
  })

  it('should support the WebDriver Actions API for complex user gestures', (browser) => {
    // this matches the selenium api
    browser
      .url('https://sambabiker.com/')
      .useXpath()
      .click("//a[text()='News']")
      .perform(async function() {
        const actions = this.actions({ async: true })
        return actions
          .dragAndDrop(
            { x: 20, y: 20 }, 
            { x: 200, y: 200 }
          )
      })

  })

  it('should work with nightwatch page objects', function (browser) {
    const news = browser.page.news()
    news
      .navigate()
      .assert.visible(news.elements.articleLink)
      .assert.enabled(news.elements.search)
      .click(news.elements.articleLink)
      .assert.visible(news.elements.articleText)
      .end()
  })

  it.skip('should allow you to continue testing after failure', function (browser) {
    const home = browser.page.home()
    home
      .navigate()
      .verify.visible('.broken-selector')
      .verify.enabled('.really-broken-selector')
      .verify.enabled('.seriously-broken-selector')
      .verify.enabled('.just-plain-broken-selector')
      .verify.elementPresent('.utterly-broken-selector')
  })

})