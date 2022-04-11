describe('Nightwatch Proof of Concept: https://sambabiker.com', () => {

  const uri = 'https://sambabiker.com/'

  it('should be able to click on elements by text content', function (browser) {
    const expectedArticleTitle = 'SAMBA launches Rattling Creek Trails expansion Phase 2'
    browser
      .url(uri)
      .useXpath()
      .click("//a[text()='News']")
      .assert.visible(`//a[text()='${expectedArticleTitle}']`)
      .end()
  })

  it('should work with async/await and chai matchers', async browser => {
    await browser.url(uri + '/news')
    await browser.useXpath()
    await browser.click(
      `//a[text()='SAMBA launches Rattling Creek Trails expansion Phase 2']`
    )
    
    const element = await browser.findElement(
      '//p[contains(text(), "SAMBA is stoked and proud")]'
    )

    // chai matcher
    expect(element).to.be.visible

    await browser.end()
  })

  it('should support selenium assertion functions', async function(browser) {
    browser
      .url(uri)
      .ensure.titleMatches(/Home Page - SAMBA/)
      .ensure.elementIsVisible('#et-main-area')
  })

  it('should support the WebDriver Actions API for complex user gestures', (browser) => {
    // this matches the selenium api
    browser
      .url(uri)
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
})