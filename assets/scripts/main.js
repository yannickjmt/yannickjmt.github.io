"use strict";

document.addEventListener("DOMContentLoaded", function(){
  
  // Modifies z-index property of main content div
  const radios = document.getElementsByName("menu-group-1");
  var previousDiv; // Stores the previous highlighted div

  for (let radio of radios) {
    if (radio.checked) previousDiv = document.getElementsByClassName(radio.id)[0];
  
    radio.onchange = function() {
      previousDiv.style.zIndex = "-1";
      const selectedDiv = document.getElementsByClassName(this.id)[0];
      selectedDiv.style.zIndex = "1";
      previousDiv = selectedDiv;
    }
  }
  
});

// Navigation from menu-1 div
const changeNav = function (menuIndex) {
  var event = document.createEvent('Event');
  var radio = document.getElementById(menuIndex);

  event.initEvent('change', true, false);
  radio.checked = true;
  radio.dispatchEvent(event);
}