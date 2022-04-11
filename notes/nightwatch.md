## Pros
* Uses standard apis
  * WebDriver
  * XPath (necessary for selectors by text, for example)
* Supports all major web browsers, including safari
* Supports Cucumber.js test runners for BDD
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
    * accessibility tree roles: //p[@aria-role="header"]
    * user-facing text: //p[text()="Test"]
* Switching between XPath and CSS selectors requires calling functions
  * `.useXPath()`
  * `.useCss()`
* Nightwatch supports async-await, but it was mainly designed to use function chaining
  * I could imagine devs producing callback hell with functions like `.perform` if they aren't careful
* 
    
