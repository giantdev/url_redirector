chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	switch(request.msg) {
		default:
			break;
	}
});

function openURL(info,tab) {
  // console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: 'https://www.amazon.ca/dp/' + info.selectionText
  });
}

chrome.contextMenus.create({
  title: "Amazon Canada", 
  contexts:["selection"], 
  onclick: openURL
});