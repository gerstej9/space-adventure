'use strict'





var modal1 = document.getElementById("myModalOne");

// Get the label that opens the modal
var btn1 = document.getElementById("myBtnOne");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the label, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of mogal content close it up

window.addEventListener("click", function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
});

// ---------------------- second modal leaderboard ------------------------ 

var modal2 = document.getElementById("myModalTwo");

// Get the label that opens the modal
var btn2 = document.getElementById("myBtnTwo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeA")[0];


// When the user clicks on the label, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of mogal content close it up 

window.addEventListener("click", function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
});

// ---------------------- second modal leaderboard ------------------------ 

var modal3 = document.getElementById("myModalThree");

// Get the label that opens the modal
var btn3 = document.getElementById("myBtnThree");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeB")[0];


// When the user clicks on the label, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of mogal content close it up 

window.addEventListener("click", function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
});



// get the leaderboard and render to modual body 


