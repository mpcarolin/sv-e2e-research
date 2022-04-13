## Background
* Began as a Microsoft fork of Puppeteer, but dedicated to E2E testing
  * Puppeteer is a node library dedicated to automating *chromium* browsers with a JS API
  * This is why it isn't built on WebDriver, because it has origins in a tool focusing on Chromium

## Playwright's Vision
* Build a straightforward API that simplifies the learning curve for using automation
* Ensure compatibility across: 
  * all browsers: including chromium, webkit, and firefox
  * cross-platform: test on windows, linux, macOS, locally, or on CI, headless, or headed
  * cross-language: support for TypeScript, JavaScript, and others
  * mobile web: native mobile emulation of google chrome for Android and Mobile Safari
* Resilient tests
  * auto-wait 
    * playwright waits for elements to be actionable prior to performing actions
    * it also has a set of introspection events
    * this eliminates need for artificial timeouts - the primary cause of flaky tests
  * web-first assertions
    * assertions created specifically for the dynamic web
    * they are automatically retried until the conditions are met
    * tracing
* Test isolation

## Pros

* More powerful than NightwatchJS overall, and with an API that is as simple as Nightwatch
  * Has features for:
    * Recording browser execution (video or photos)
    * Record website interaction as generated code
* It will soon accept implicit accessibility-tree role-based selectors (only experimental right now)

## Cons 
* Downloads special test browsers to machine, so it doesn't use your built in ones
* Zero support for IE11 or other browsers than Chromium-based, Firefox, and Webkit-based
