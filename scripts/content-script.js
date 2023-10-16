"use strict";

window.onload = async () => {
    const header = document.querySelector("h1");
  
    console.log("Inside the content file");
    if (header) {
      console.log(header);
      header.innerText = "Hello, this is from sense on page load";
    }

    // listening to the message
    chrome.runtime.onMessage.addListener((message) => {
      if (message.type === "UPDATE_TITLE") {
        const header = document.querySelector("h1");
  
        console.log("Inside the content file");
        if (header) {
          console.log(header);
          header.innerText = message.text;
        }
      }
      if (message.type === "UPDATE_DESCRIPTION") {
        const header2 = document.querySelector("h2");
  
        console.log("Inside the content file");
        if (header2) {
          console.log(header2);
          header2.innerText = message.text;
        }
      }

    })


      // text selection
  window.addEventListener("mouseup", (e) => {
    chrome.action.setBadgeText({ text: message.tagName });
  });
}