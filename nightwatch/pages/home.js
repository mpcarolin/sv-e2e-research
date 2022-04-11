module.exports = {
  // can be string or function
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    // shorthand, specifies selector
    newsButton: {
      selector: "//a[text()='News']",
      locateStrategy: 'xpath'
    },

  }
}