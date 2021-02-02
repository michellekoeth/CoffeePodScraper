
var page_title1 = document.title;
var	page_h1_tag = "";
var productList = [];

if(document.querySelector("h2") !== null)
	page_h1_tag = document.querySelector("h2").textContent;

if(document.querySelector("a") !== null) {
	productList = [].map.call(document.querySelectorAll("article[class='ProductListElement ProductListElement__capsule']"), function(el) {
		return el.getAttribute("data-ta-product-name");
	}).join();
}
// prepare JSON data with page title & first h1 tag
var data = JSON.stringify({ Pod_Names: productList, h1: page_h1_tag});

// send message back to popup script
chrome.runtime.sendMessage(null, data);