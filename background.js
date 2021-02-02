'use strict';

// activate extension when host is www.website.com
chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
				conditions: [new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals: 'www.nespresso.com'},
				})
			],
		    actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});