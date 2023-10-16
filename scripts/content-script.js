"use strict";

window.onload = async () => {
    const header = document.querySelector("h1");
  
    console.log("Inside the content file");
    if (header) {
      console.log(header);
      header.innerText = "Hello, this is from sense on page load";
    }
}