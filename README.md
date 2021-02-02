# CoffeePodScraper
Chrome Extension for  scraping pod names from Nepresso website
 
This example of Chrome Extensions was derived from the following example given on this website: https://usefulangle.com/post/339/chrome-extension-create-page-scraper 
 
 **************Chrome Extension Learning Links:******************************
 
Google Guide: https://developer.chrome.com/docs/extensions/mv3/

Basic files/architecture to a chrome extension
https://developer.chrome.com/docs/extensions/mv3/architecture-overview/

Basic set of files for an Extension:
Manifest.json (config file - must set Extension permissions / boundaries there)
Popup.html (response page from clicking on extension icon or executing KB command)
Popup.js (for fancy UI)
Extension.png (this is the extension icon)
Background.js (event handler page with listeners for actions)
Content.js (content script(s) - JavaScript that executes in the contexts of a page that has been loaded into the browser. Content scripts read and modify the DOM of web pages the browser visits.)

Hello World Example Extension: https://developer.chrome.com/docs/extensions/mv3/overview/

Asynchronous vs. synchronous methods:
Most Chrome API methods are asynchronous: they return immediately without waiting for the operation to finish. If an extension needs to know the outcome of an asynchronous operation it can pass a callback function into the method. The callback is executed later, potentially much later, after the method returns.

Promises: https://www.vojtechruzicka.com/javascript-async-await/

Overview of cool stuff you can do with Chrome Extensions:
https://developer.chrome.com/docs/extensions/mv3/faq/

Samples getting into more advanced coding:
https://developer.chrome.com/docs/extensions/mv3/getstarted/

Chrome Extension API which can inspire some creative applications:
https://developer.chrome.com/docs/extensions/reference/

Developer guide to learn the advanced features
https://developer.chrome.com/docs/extensions/mv3/devguide/

Useful for data scraping/collecting: Content Scripts
https://developer.chrome.com/docs/extensions/mv3/content_scripts/

Tutorial on web page scraping with Extensions:
https://usefulangle.com/post/339/chrome-extension-create-page-scraper

DOM syntyax: https://www.w3schools.com/XML/dom_nodes_get.asp
https://www.w3schools.com/jsref/met_document_queryselectorall.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors

Useful Icons for your app:
https://thenounproject.com/
