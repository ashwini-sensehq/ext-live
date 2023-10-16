"use strict";

window.onload = async () => {
  // update title
  const updateTitleButton = document.getElementById("updateTitle");
  const titleText = document.getElementById("titleText");
  updateTitleButton.addEventListener("click", () => {

    // logic to update the title
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
          type: "UPDATE_TITLE",
          text: titleText.value,
        });
      });

  });

};
