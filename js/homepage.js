'use strict'





var modal = document.getElementById("myModalOne");

// Get the label that opens the modal
var btn = document.getElementById("myBtnOne");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the label, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of mogal content close it up 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// ---------------------- second modal leaderboard ------------------------ 

var modal = document.getElementById("myModalTwo");

// Get the label that opens the modal
var btn = document.getElementById("myBtnTwo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeA")[0];


// When the user clicks on the label, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of mogal content close it up 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// ---------------------- second modal leaderboard ------------------------ 

var modal = document.getElementById("myModalThree");

// Get the label that opens the modal
var btn = document.getElementById("myBtnThree");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeB")[0];


// When the user clicks on the label, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of mogal content close it up 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}