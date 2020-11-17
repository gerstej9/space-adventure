'use strict';

// global variables

var planetOne = document.getElementById('world-one');
var planetTwo = document.getElementById('world-two');
var planetThree = document.getElementById('world-three');
var planetFour = document.getElementById('world-four');
var planetFive = document.getElementById('world-five');
var planetSix = document.getElementById('world-six');
var planetSeven = document.getElementById('world-seven');
var planetEight = document.getElementById('world-eight');
var planetNine = document.getElementById('world-nine');
var planetTen = document.getElementById('world-ten');
var plotCourse = document.getElementById('player-ship');
var planetGoal = document.getElementById('finish-space');
var displayEvent = document.getElementById('display-event');
var cardTitleHolder = document.getElementById('event-title');
var cardTextHolder = document.getElementById('event-text');
var cardImage = document.getElementById('event-image');
var btnContainer = document.getElementById('button-container');
var allPlanets = [planetOne, planetTwo, planetThree, planetFour, planetFive, planetSix, planetSeven, planetEight, planetNine, planetTen];
var navPoints = ['nav-start', 'nav-one', 'nav-two', 'nav-three', 'nav-four', 'nav-five', 'nav-six', 'nav-seven', 'nav-eight', 'nav-nine', 'nav-ten'];
var functionArray = [planetOneZoomIn, planetTwoZoomIn, planetThreeZoomIn, planetFourZoomIn, planetFiveZoomIn, planetSixZoomIn, planetSevenZoomIn, planetEightZoomIn, planetNineZoomIn, planetTenZoomIn];
var planetFuelCounter = 0;

// game start

function startGame(){
    planetOne.addEventListener('click', planetOneZoomIn);
    planetTwo.addEventListener('click', planetTwoZoomIn);
    planetOne.classList.add('easy-choice');
    planetTwo.classList.add('easy-choice');
    blankCard();
}

// arrive planet 1

function planetOneZoomIn() {
    removeHalos();
    removeNavPoints();
    plotCourse.classList.add('nav-one');

    if (planetOne.classList.contains('one')) {
        planetOne.classList.remove('one');
        loadEvent();
        removePlanetListeners();
        displayEvent.classList.add('zoom');
        planetOne.addEventListener('click', planetOneZoomIn); // temp until card button set up
        btnContainer.addEventListener('click', choiceClick);
    } else {
        planetOne.classList.add('one');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetTwo.classList.add('easy-choice');
        planetThree.classList.add('easy-choice');
        planetFour.classList.add('easy-choice');
        planetFive.classList.add('med-choice');
        planetTwo.addEventListener('click', planetTwoZoomIn);
        planetThree.addEventListener('click', planetThreeZoomIn);
        planetFour.addEventListener('click', planetFourZoomIn);
        planetFive.addEventListener('click', planetFiveZoomIn);
    }
}

// arrive planet 2

function planetTwoZoomIn() {
    removeHalos();
    removeNavPoints();
    plotCourse.classList.add('nav-two');

    if (planetTwo.classList.contains('two')) {
        planetTwo.classList.remove('two');
        loadEvent();
        removePlanetListeners();
        displayEvent.classList.add('zoom');
        planetTwo.addEventListener('click', planetTwoZoomIn); // temp until card button set up
    } else {
        planetTwo.classList.add('two');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetFive.classList.add('easy-choice');
        planetSix.classList.add('hard-choice');
        planetFive.addEventListener('click', planetFiveZoomIn);
        planetSix.addEventListener('click', planetSixZoomIn);
    }
}

// arrive planet 3

function planetThreeZoomIn() {
    removeHalos();
    removeNavPoints();
    plotCourse.classList.add('nav-three');

    if (planetThree.classList.contains('three')) {
        planetThree.classList.remove('three');
        loadEvent();
        removePlanetListeners();
        displayEvent.classList.add('zoom');
        planetThree.addEventListener('click', planetThreeZoomIn); // temp until card button set up
    } else {
        planetThree.classList.add('three');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetFour.classList.add('easy-choice');
        planetFour.addEventListener('click', planetFourZoomIn);
    }
}

// arrive planet 4

function planetFourZoomIn() {
    removeHalos();
    removeNavPoints();
    plotCourse.classList.add('nav-four');

    if (planetFour.classList.contains('four')) {
        planetFour.classList.remove('four');
        loadEvent();
        removePlanetListeners();
        displayEvent.classList.add('zoom');
        planetFour.addEventListener('click', planetFourZoomIn); // temp until card button set up
    } else {
        planetFour.classList.add('four');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetFive.classList.add('med-choice');
        planetSeven.classList.add('med-choice');
        planetEight.classList.add('hard-choice');
        planetFive.addEventListener('click', planetFiveZoomIn);
        planetSeven.addEventListener('click', planetSevenZoomIn);
        planetEight.addEventListener('click', planetEightZoomIn);
    }
}

// arrive planet 5

function planetFiveZoomIn() {
    removeHalos();
    removeNavPoints();
    plotCourse.classList.add('nav-five');

    if (planetFive.classList.contains('five')) {
        planetFive.classList.remove('five');
        loadEvent();
        removePlanetListeners();
        displayEvent.classList.add('zoom');
        planetFive.addEventListener('click', planetFiveZoomIn); // temp until card button set up
    } else {
        planetFive.classList.add('five');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetSix.classList.add('med-choice');
        planetSeven.classList.add('easy-choice');
        planetSix.addEventListener('click', planetSixZoomIn);
        planetSeven.addEventListener('click', planetSevenZoomIn);
    }
}

// arrive planet 6

function planetSixZoomIn() {
    removeHalos();
    removeNavPoints();
    plotCourse.classList.add('nav-six');

    if (planetSix.classList.contains('six')) {
        planetSix.classList.remove('six');
        loadEvent();
        removePlanetListeners();
        displayEvent.classList.add('zoom');
        planetSix.addEventListener('click', planetSixZoomIn); // temp until card button set up
    } else {
        planetSix.classList.add('six');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetNine.classList.add('med-choice');
        planetTen.classList.add('easy-choice');
        planetNine.addEventListener('click', planetNineZoomIn);
        planetTen.addEventListener('click', planetTenZoomIn);
    }
}

// arrive planet 7

function planetSevenZoomIn() {
    removeHalos();
    removeNavPoints();
    plotCourse.classList.add('nav-seven');

    if (planetSeven.classList.contains('seven')) {
        planetSeven.classList.remove('seven');
        loadEvent();
        removePlanetListeners();
        displayEvent.classList.add('zoom');
        planetSeven.addEventListener('click', planetSevenZoomIn); // temp until card button set up
    } else {
        planetSeven.classList.add('seven');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetSix.classList.add('med-choice');
        planetEight.classList.add('med-choice');
        planetNine.classList.add('hard-choice');
        planetSix.addEventListener('click', planetSixZoomIn);
        planetEight.addEventListener('click', planetEightZoomIn);
        planetNine.addEventListener('click', planetNineZoomIn);
    }
}

// arrive planet 8

function planetEightZoomIn() {
    removeHalos();
    removeNavPoints();
    plotCourse.classList.add('nav-eight');

    if (planetEight.classList.contains('eight')) {
        planetEight.classList.remove('eight');
        loadEvent();
        removePlanetListeners();
        displayEvent.classList.add('zoom');
        planetEight.addEventListener('click', planetEightZoomIn); // temp until card button set up
    } else {
        planetEight.classList.add('eight');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetGoal.classList.add('final-choice');
        planetGoal.addEventListener('click', planetGoalZoomIn);
    }
}

// arrive planet 9

function planetNineZoomIn() {
    removeHalos();
    removeNavPoints();
    plotCourse.classList.add('nav-nine');

    if (planetNine.classList.contains('nine')) {
        planetNine.classList.remove('nine');
        loadEvent();
        removePlanetListeners();
        displayEvent.classList.add('zoom');
        planetNine.addEventListener('click', planetNineZoomIn); // temp until card button set up
    } else {
        planetNine.classList.add('nine');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetGoal.classList.add('final-choice');
        planetGoal.addEventListener('click', planetGoalZoomIn);
    }
}

// arrive planet 10

function planetTenZoomIn() {
    removeHalos();
    removeNavPoints();
    plotCourse.classList.add('nav-ten');

    if (planetTen.classList.contains('ten')) {
        planetTen.classList.remove('ten');
        loadEvent();
        removePlanetListeners();
        displayEvent.classList.add('zoom');
        planetTen.addEventListener('click', planetTenZoomIn); // temp until card button set up
    } else {
        planetTen.classList.add('ten');
        displayEvent.classList.remove('zoom');
        blankCard();
        planetNine.classList.add('med-choice');
        planetNine.addEventListener('click', planetNineZoomIn);
    }
}

// arrive goal

function planetGoalZoomIn() {
    planetGoal.classList.remove('final-choice');
    removeNavPoints();
    removePlanetListeners();
    plotCourse.classList.add('nav-goal');
    var congrats = document.createElement('h3');
    congrats.textContent = 'Congratulations!! You Made It!';
    cardTitleHolder.appendChild(congrats);
    displayEvent.classList.add('success');
    displayEvent.classList.add('zoom');
    tabulatePoints();
    console.log(totalFuel,totalCrew,totalPoints);
    if(!localStorage.leaderboard){

    }else{
        returnLeaderBoardLs();
    }
    new HighScore(userName,totalPoints);
    leaderBoardStoreLs();
}

// render random event card from array

function loadEvent(){
    var eventInfo = eventCardSelector();
    var eventTitle = document.createElement('h3');
    eventTitle.textContent = eventInfo.name;
    cardImage.src = 'img/alien-skateboard.jpg';
    var eventText = document.createElement('p');
    eventText.textContent = eventInfo.textSummary;
    cardTitleHolder.appendChild(eventTitle);
    cardTextHolder.appendChild(eventText);
    createButtons(eventInfo);
}

function createButtons(eventData){
    var eventInfo = eventData;

    if(eventInfo.type === 'no-action'){
        var confirm = document.createElement('button');
        confirm.id = 'confirm';
        confirm.textContent = 'Proceed';
        btnContainer.appendChild(confirm);
    } else {
        var acceptRisk = document.createElement('button');
        acceptRisk.id = 'accept';
        acceptRisk.textContent = 'Risk it!';
        var rejectRisk = document.createElement('button');
        rejectRisk.id = 'reject';
        rejectRisk.textContent = 'No Way!';
        btnContainer.appendChild(acceptRisk);
        btnContainer.appendChild(rejectRisk);
    }
}

// empty event card

function blankCard() {
    cardTitleHolder.innerHTML = '';
    cardImage.src = '';
    cardTextHolder.innerHTML = '';
    btnContainer.innerHTML = '';
}

// functions to move ship and to remove halos and event listeners

function removeHalos(){
    for(var i = 0 ; i < allPlanets.length ; i++){
        allPlanets[i].classList.remove('easy-choice');
        allPlanets[i].classList.remove('med-choice');
        allPlanets[i].classList.remove('hard-choice');
    }
}

function removeNavPoints(){
    for(var i = 0 ; i < navPoints.length ; i++){
        plotCourse.classList.remove(navPoints[i]);
    }
}

function removePlanetListeners(){
    for(var i = 0 ; i < allPlanets.length ; i++){
        allPlanets[i].removeEventListener('click', functionArray[i]);
    }
}

function choiceClick(e){
    console.log(e.target);
    var buttonId = e.target;
    if(buttonId.id === 'confirm'){
        console.log(`Confirmed!!`);
        // show results
    } else if(buttonId.id === 'accept'){
        console.log(`Let's Do This!!`);
        // show results
    } else if(buttonId.id === 'reject'){
        console.log(`Are You Crazy?!?`);
        // show results
    }

}

// generates chart of resources

function generateChart(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['Crew', 'Fuel'],
        datasets: [
            {
            label: 'Resources',
            data: [totalCrew, totalFuel],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(255, 99, 132, 0.4)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
            },
        ],
        },
        options: {
        scales: {
            yAxes: [
            {
                ticks: {
                beginAtZero: true,
                },
            },
            ],
        },
        },
    });
}

function getUserName(){
    userName = prompt("What is your Captain's name?");
    var captainName = document.getElementById('player-title');
    captainName.textContent = `Captain ${userName}`;
}



startGame();
generateChart();
getUserName();