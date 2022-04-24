module.exports = {
  // can be string or function
  url: function () {
    return `${this.api.launchUrl}/login`
  },
  elements: {
    // shorthand, specifies selector
    emailInput: {
      selector: '//input[@placeholder="Email"]',
      locateStrategy: 'xpath'
    },
    passwordInput: {
      selector: '//input[@placeholder="Password"]',
      locateStrategy: 'xpath'
    },
    loginButton: {
      selector: '//input[@type="submit"]',
      locateStrategy: 'xpath'
    },
  },
  commands: [{
    login: function () {
      return this.waitForElementVisible('body', 1000)
        .verify.visible('@emailInput')
        .verify.visible('@passwordInput')
        .verify.visible('@loginButton')
        .setValue('@emailInput', process.env.USERNAME)
        .setValue('@passwordInput', process.env.PASSWORD)
        .click('@loginButton')
    }
  }]
}
