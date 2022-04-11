module.exports = {
  // can be string or function
  url: function () {
    return this.api.launchUrl + '/news'
  },
  elements: {
    // shorthand, specifies selector
    articleLink: {
      selector: "//a[text()='SAMBA launches Rattling Creek Trails expansion Phase 2']",
      locateStrategy: 'xpath'
    },
    articleText: {
      selector: '//p[contains(text(), "SAMBA is stoked and proud")]',
      locateStrategy: 'xpath'
    },
    search: {
      selector: '//input[@type="text"]',
      locateStrategy: 'xpath'
    },
  }
}