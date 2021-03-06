'use strict';

// start navigation when Scrape Coffee Pod Data button is clicked
startNavigation.onclick = function(element) {
	// query the current tab to find its id
	chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
		// navigate to next url
		await goToPage("https://www.nespresso.com/us/en/order/capsules/vertuo", 1, tabs[0].id);
		// navigation of all pages is finished
		//alert('Navigation Completed');
	});
};

async function goToPage(url, url_index, tab_id) {
	return new Promise(function(resolve, reject) {
		// update current tab with new url
		chrome.tabs.update({url: url});
		// fired when tab is updated
			chrome.tabs.onUpdated.addListener(function openPage(tabID, changeInfo) {
				// tab has finished loading, validate whether it is the same tab
				if(tab_id == tabID && changeInfo.status === 'complete') {
					// remove tab onUpdate event as it may get duplicated
					chrome.tabs.onUpdated.removeListener(openPage);

					// fired when content script sends a message
					chrome.runtime.onMessage.addListener(function getDOMInfo(message) {
						// remove onMessage event as it may get duplicated
						chrome.runtime.onMessage.removeListener(getDOMInfo);

						// save data from message to a JSON file and download
						let json_data = {
							title: JSON.parse(message).title,
							h1: JSON.parse(message).h1,
							Pod_Names: JSON.parse(message).Pod_Names,
							url: url
						};
						let blob = new Blob([JSON.stringify(json_data)], {type: "application/json;charset=utf-8"});
						let objectURL = URL.createObjectURL(blob);
						chrome.downloads.download({ url: objectURL, filename: ('coffeepods.json'), conflictAction: 'overwrite' });
					});
			
					chrome.tabs.executeScript({ file: '/scripts/content_vertuo.js' }, function() {
						// resolve Promise after content script has executed
						resolve();
					});
				}
			});	
	});
}

// async function to wait for x seconds 
async function waitSeconds(seconds) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve();
		}, seconds*1000);
	});
}
