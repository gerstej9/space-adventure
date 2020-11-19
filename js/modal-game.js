// create leader board
function makeLeaderBoard(){
 
  // call table
  var leaderboardParent = document.getElementById('leaderboard-list');
  // clear table
  leaderboardParent.innerHTML = ""; 
  // make row
  var trElement = document.createElement('tr');
  leaderboardParent.appendChild(trElement);

  //make a table header
  var thElement = document.createElement('th');
  thElement.textContent = 'Name';
  trElement.appendChild(thElement);

  //make a td
  var thElement = document.createElement('th')
  thElement.textContent = 'Score';
  //append it to table row
  trElement.appendChild(thElement);

  
  var trElement = document.createElement('tr');
  leaderboardParent.appendChild(trElement);
  
  
  for(var i=0; i<leaderBoard.length;i++){
    //make a table row
    var trElement = document.createElement('tr');
    leaderboardParent.appendChild(trElement);
    var tdElement = document.createElement('td');
    tdElement.textContent = leaderBoard[i].name;
    trElement.appendChild(tdElement);
    var tdTwoElement = document.createElement('td');
    tdTwoElement.textContent = leaderBoard[i].points;
    trElement.appendChild(tdTwoElement);
  }


}



// ---------------------- second modal leaderboard ------------------------ 

var modal2 = document.getElementById("myModalTwo");

// Get the label that opens the modal
var btn2 = document.getElementById("myBtnTwo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeA")[0];


// When the user clicks on the label, open the modal
btn2.onclick = function() {

  modal2.style.display = "block";
  returnLeaderBoardLs();
  makeLeaderBoard();
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


// ---------------------- new game button ------------------------ 

var btnNewGame = document.getElementById("myBtnOne");

btnNewGame.addEventListener("click", refreshNewGame);



