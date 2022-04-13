module.exports = {
  // can be string or function
  url: function () {
    return 'https://sambabiker.com/'
  },
  elements: {
    // shorthand, specifies selector
    newsButton: {
      selector: "//a[text()='News']",
      locateStrategy: 'xpath'
    },

  }
}