# Playwright Best Practices

## Table of Contents
1. [Overview](#overview)
2. [Selectors](#selectors)
3. [Using the Inspector](#using-the-inspector)
3. [Automating Login State](#automating-login)

## Overview

Playwright is a framework for writing end-to-end tests, on any browser or platform. 

It has *excellent* documentation, and we highly recommend you use it for reference: [Playwright Docs](https://playwright.dev/)

You can also start learning with the getting-started page [here](http://playwright.dev/docs/intro)

This document will cover the highlights of what you need to know to be productive with Playwright. 

## Selectors

**Goal**: Test your application in the same way that your users interact with them.

### Reading
* [Playwright Best Practices](http://playwright.dev/docs/selectors#best-practices)
* [Playwright Selectors Docs](https://playwright.dev/docs/selectors)

### Overview
* Playwright offers several powerful selectors for finding elements on the page
* From Playwright:
> The choice of selectors determines the resiliency of automation scripts. To reduce the maintenance burden, we recommend prioritizing user-facing attributes and explicit contracts.
* Mostly, this means searching for elements via their user-facing features
* As much as possible, avoid CSS and XPath selectors
	* These couple your tests to implementation details, like CSS classes or the structure of the DOM
	* These can change even if the UI does not, which spawns brittle tests

### Text Selector
* The best (and simplest!) option for finding elements through their user-facing feature is Playwright's text engine.
* [Text Engine Docs](http://playwright.dev/docs/selectors#text-selector)
* Example:
```js
await page.locator('text=Hi, Michael').click();
```
* This finds the one element on the page containing the text "Hi, Michael", then clicks on it
	* If multiple elements contain that text, Playwright throws an error
* Playwright is pretty smart about this, capturing elements that contain that text even if it is displayed using multiple child nodes
	* example: 
	```html
		<span>Hi,<p>Michael></p></span>
	```

### Fallbacks 
* If you cannot find your element using text alone, here are a few other good Playwright options to try before resorting to CSS and XPath selectors

####  Role Selectors

* [Role Engine Docs](http://playwright.dev/docs/selectors#role-selector)
* This engine enables you to search for elements based on their ARIA role, ARIA Attributes, and accessible name -- which accessibility tools like screen readers use.
* Only use this if your team writes accessible components in your web app. If you change a `button` element to a `div`, you must be in the practice of setting that div's `role` attribute to `button`, or else any test using this role selector will break.

#### Test Ids

* [ID Docs](http://playwright.dev/docs/selectors#id-data-testid-data-test-id-data-test-selectors)
* If you set `data-testid` attribute to your elements, you can access those elements using the `data-testid=` selector engine
* Again only use this as a backup to text selectors. Using test-ids does not resemble how users interact with your software. However, they are nonetheless far superior to querying the DOM structure and CSS classes.


### Follow Up Reading
* Writing UI tests that are resilient to change: https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change
* Testing-Library Guiding Principles: https://testing-library.com/docs/guiding-principles

## Using the Inspector
* Most testing frameworks provide limited options for fast feedback loops during development. You write your tests, you run them (hoping nothing breaks), and it prints out messages to your terminal when something goes wrong. This makes for a slow development process.
* Playwright provides a visual tool, called the inspector, to help with this
* [Inspector Docs](http://playwright.dev/docs/inspector)
* 




