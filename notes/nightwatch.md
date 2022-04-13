## Background
* First published in 2014, with goal to automate UI tests in a more straightforward way with minimal configuraiton and libraries

## Nightwatch's Vision
* Aim to build a tool that provides everything you need out of the box
  * deprioritizes plugins and customizability
* Devs should focus only on writing tests and not managing external plugins and dependencies
> In our experience, this usually leads to increasingly more time spent on maintaining dependencies and solving configuration issues, instead of writing actual tests.
* Follow industry practices and standards

## Pros
* Uses standard apis
  * WebDriver
  * XPath (necessary for selectors by text, for example)
* Good docs with global search
* Supports all web browsers with web-driver support, including safari
* Integrated support for Cucumber.js feature files and test runners
  * https://github.com/nightwatchjs/nightwatch/tree/main/examples/cucumber-js
* Its API is a direct mapping to many Selenium APIs
  * Good for devs with selenium experience
  * Examples:
    * `Element`: https://nightwatchjs.org/api/element/
    * `Actions`: https://nightwatchjs.org/api/useractions/
    * `Ensure`: https://nightwatchjs.org/api/ensure/

## Cons 
* XPath is the only way to get elements in a non-brittle way, so your opinion on Nightwatch will depend a lot on your opinion of XPath and whether or not the developers will write robust tests with it
  * I've seen xpath go wrong when people use it to create very brittle queries dependent on element order or the specific structure of the DOM
  * But if you stick with user-facing features, it's good and powerful, e.g.:
    * user-facing text: `//*[text()="Test"]`
* Switching between XPath and CSS selectors requires calling functions every time
  * `.useXPath()`
  * `.useCss()`
* Nightwatch supports async-await, but it was mainly designed to use function chaining
  * I could imagine devs producing callback hell with functions like `.perform` if they aren't careful
  * Output from functions when run with `async` is less useful than chaining
* Certain test configuration needs to be repeated per-browser as it is not global
  * Example: headless requires platform-specific flags for each browser
* Makes use of the `this` parameter quite a bit, which can be error prone if devs forget to use function over arrow syntax

    
