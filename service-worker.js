chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "UPDATE_BADGE") {
        // change to tagname 
        chrome.action.setBadgeText({ text: message.text.length });
    }
});