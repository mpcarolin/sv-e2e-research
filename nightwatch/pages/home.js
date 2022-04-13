module.exports = {
  // can be string or function
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    accountDropdown: {
      selector: '//*[contains(text(), "Hi, Michael")]',
      locateStrategy: 'xpath'
    },
    attendeesTab: {
      selector: '//a[text()="Attendees"]',
      locateStrategy: 'xpath'
    }
  },
  commands: [{
    openAttendeePage: function () {
      return this
        .waitForElementVisible('body', 1000)
        .click('@attendeesTab')
    }
  }]
}