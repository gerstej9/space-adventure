'use strict';

var planetOne = document.getElementById("world-one");
var planetTwo = document.getElementById("world-two");
var planetThree = document.getElementById("world-three");
var planetFour = document.getElementById("world-four");
var planetFive = document.getElementById("world-five");
var planetSix = document.getElementById("world-six");
var planetSeven = document.getElementById("world-seven");
var planetEight = document.getElementById("world-eight");
var planetNine = document.getElementById("world-nine");
var planetTen = document.getElementById("world-ten");
var plotCourse = document.getElementById("player-ship");
var displayEvent = document.getElementById("display-event");
var allPlanets = [];


function planetOneZoomIn() {
    planetOne.classList.remove("easy-choice");
    planetTwo.classList.remove("easy-choice");
    plotCourse.classList.add("nav-one");
    plotCourse.classList.remove("nav-start");
    if (planetOne.classList.contains("one")) {
        planetOne.classList.remove("one");
        planetTwo.removeEventListener("click", planetTwoZoomIn);
        displayEvent.classList.add("zoom");
    } else {
        planetOne.classList.add("one");
        displayEvent.classList.remove("zoom");
        planetTwo.classList.add('easy-choice');
        planetThree.classList.add('easy-choice');
        planetFour.classList.add('easy-choice');
        planetFive.classList.add('med-choice');
        planetTwo.addEventListener("click", planetTwoZoomIn);
        planetThree.addEventListener("click", planetThreeZoomIn);
        planetFour.addEventListener("click", planetFourZoomIn);
        planetFive.addEventListener("click", planetFiveZoomIn);
    }
}


function planetTwoZoomIn() {
    planetTwo.classList.remove("easy-choice");
    planetOne.classList.remove("easy-choice");
    planetFive.classList.remove('med-choice');
    planetThree.classList.remove('easy-choice');
    planetFour.classList.remove('easy-choice');
    plotCourse.classList.add('nav-two');
    plotCourse.classList.remove("nav-start");
    plotCourse.classList.remove("nav-one");
    if (planetTwo.classList.contains("two")) {
    planetTwo.classList.remove("two");
    planetOne.removeEventListener("click", planetOneZoomIn);
    planetThree.removeEventListener("click", planetThreeZoomIn);
    planetFour.removeEventListener("click", planetFourZoomIn);
    planetFive.removeEventListener("click", planetFiveZoomIn);
    displayEvent.classList.add("zoom");
    } else {
    planetTwo.classList.add("two");
    displayEvent.classList.remove("zoom");
    planetFive.classList.add('easy-choice');
    planetSix.classList.add('hard-choice');
    planetFive.addEventListener("click", planetFiveZoomIn);
    planetSix.addEventListener("click", planetSixZoomIn);
    }
}

function planetThreeZoomIn() {
    planetTwo.classList.remove("easy-choice");
    planetFive.classList.remove('med-choice');
    planetThree.classList.remove('easy-choice');
    planetFour.classList.remove('easy-choice');
    plotCourse.classList.add('nav-three');
    plotCourse.classList.remove("nav-one");
    if (planetThree.classList.contains("three")) {
    planetThree.classList.remove("three");
    planetTwo.removeEventListener("click", planetTwoZoomIn);
    planetFour.removeEventListener("click", planetFourZoomIn);
    planetFive.removeEventListener("click", planetFiveZoomIn);
    displayEvent.classList.add("zoom");
    } else {
    planetThree.classList.add("three");
    displayEvent.classList.remove("zoom");
    planetFour.classList.add('easy-choice');
    planetFour.addEventListener("click", planetFourZoomIn);
    }
}

function planetFourZoomIn() {
    planetTwo.classList.remove("easy-choice");
    planetFive.classList.remove('med-choice');
    planetThree.classList.remove('easy-choice');
    planetFour.classList.remove('easy-choice');
    plotCourse.classList.add('nav-four');
    plotCourse.classList.remove("nav-one");
    plotCourse.classList.remove('nav-three');
    if (planetFour.classList.contains("four")) {
    planetFour.classList.remove("four");
    planetTwo.removeEventListener("click", planetTwoZoomIn);
    planetThree.removeEventListener("click", planetThreeZoomIn);
    planetFive.removeEventListener("click", planetFiveZoomIn);
    displayEvent.classList.add("zoom");
    } else {
    planetFour.classList.add("four");
    displayEvent.classList.remove("zoom");
    planetFour.classList.add('easy-choice');
    planetFour.addEventListener("click", planetFourZoomIn);
    }
}

function planetFiveZoomIn() {

}

function planetSixZoomIn() {

}

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
    labels: ["Ship", "Crew", "Fuel"],
    datasets: [
        {
        label: "Resources",
        data: [9, 3, 7],
        backgroundColor: [
            "rgba(255, 99, 132, 0.4)",
            "rgba(255, 99, 132, 0.4)",
            "rgba(255, 99, 132, 0.4)",
        ],
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
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



function Planet(name, location, pathOne = '', pathTwo = '', pathThree = '', pathFour = '', firstFrom = '', secondFrom = '', thirdFrom = ''){
    this.name = name;
    this.location = location;
    this.pathOne = pathOne;
    this.pathTwo = pathTwo;
    this.pathThree = pathThree;
    this.pathFour = pathFour;
    this.firstFrom = firstFrom;
    this.secondFrom = secondFrom;
    this.thirdFrom = thirdFrom;

    allPlanets.push(this);
}

new Planet('Arrival', 'startnew', 'start-one', 'start-two');
new Planet('Alpha', 'one', 'one-two', 'one-three', 'one-four', 'one-five', 'fromStart');
new Planet('Beta', 'two', 'two-five', 'two-six', '', '', 'fromStart', 'fromOne');
new Planet('Gamma', 'three', 'three-four', '', '', '', 'fromOne');
new Planet('Delta', 'four', 'four-five', 'four-seven', 'four-eight', '', 'fromOne', 'fromThree')
new Planet('Epsilon', 'five', 'five-six', 'five-seven', '', '', 'fromOne', 'fromTwo', 'fromFour');
new Planet('Iota', 'six', 'six-nine', 'six-ten', '', '', 'fromTwo', 'fromFive', 'fromSeven');
new Planet('Kappa', 'seven', 'seven-six', 'seven-eight', 'seven-nine', '', 'fromFour', 'fromFive');
new Planet('Lambda', 'eight', 'eight-goal', '', '', '', 'fromFour', 'fromSeven');
new Planet('Omicron', 'nine', 'nine-goal', '', '', '', 'fromSix', 'fromSeven', 'fromTen');
new Planet('Sigma', 'ten', 'ten-nine', '', '', '', 'fromSix');
new Planet('Destination', 'goal', '', '' ,'' ,'', 'fromEight', 'fromNine');


console.log(allPlanets);

function startGame(){
    planetOne.addEventListener("click", planetOneZoomIn);
    planetTwo.addEventListener("click", planetTwoZoomIn);
}

startGame();