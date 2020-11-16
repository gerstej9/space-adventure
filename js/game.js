function planetOneZoomIn() {
    var displayEvent = document.getElementById("display-event-one");
    planetOneClicked.classList.remove("easy-choice");
    plotCourse.classList.add("nav-one");
    plotCourse.classList.remove("nav-start");
    if (planetOneClicked.classList.contains("one")) {
    planetOneClicked.classList.remove("one");

    displayEvent.classList.add("zoom");
    } else {
    planetOneClicked.classList.add("one");
    displayEvent.classList.remove("zoom");
    }
}

var planetOneClicked = document.getElementById("world-one");
var planetTwoClicked = document.getElementById("world-two");
var plotCourse = document.getElementById("player-ship");

function planetTwoZoomIn() {
    var displayEvent = document.getElementById("display-event-two");
    planetTwoClicked.classList.remove("easy-choice");
    if (planetTwoClicked.classList.contains("two")) {
    planetTwoClicked.classList.remove("two");

    displayEvent.classList.add("zoom");
    } else {
    planetTwoClicked.classList.add("two");
    displayEvent.classList.remove("zoom");
    }
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

planetTwoClicked.addEventListener("click", planetTwoZoomIn);
planetOneClicked.addEventListener("click", planetOneZoomIn);

var allPlanets = [];

function Planet(name, location, pathOne = '', pathTwo = '', pathThree = '', pathFour = '', fromOne = '', fromTwo = '', fromThree = ''){
    this.name = name;
    this.location = location;
    this.pathOne = pathOne;
    this.pathTwo = pathTwo;
    this.pathThree = pathThree;
    this.pathFour = pathFour;
    this.fromOne = fromOne;
    this.fromTwo = fromTwo;
    this.fromThree = fromThree;

    allPlanets.push(this);
}

new Planet('Arrival', 'startnew', 'start-one', 'start-two');
new Planet('Alpha', 'one', 'one-two', 'one-three', 'one-four', 'one-five', 'fromStart');
new Planet('Beta', 'two', 'two-five', 'two-six', '', '', 'fromStart', 'fromOne');
new Planet('Gamma', 'three', 'three-four', '', '', '', 'fromOne');
new Planet('Delta', 'four', 'four-five', 'four-seven', 'four-eight', '', 'fromOne', 'fromThree')
new Planet('Epsilon', 'five', 'five-six', 'five-seven', '', '', 'fromOne', 'fromTwo', 'fromFour');
new Planet('Iota', 'six', 'six-nine', 'six-ten', '', '', 'fromTwo', 'fromFive', 'fromSeven');
new Planet('Kappa', 'seven', 'seven-eight', 'seven-nine', '', '', 'fromFour', 'fromFive');
new Planet('Lambda', 'eight', 'eight-goal', '', '', '', 'fromFour', 'fromSeven');
new Planet('Omicron', 'nine', 'nine-goal', '', '', '', 'fromSix', 'fromSeven', 'fromTen');
new Planet('Sigma', 'ten', 'ten-nine', '', '', '', 'fromSix');
new Planet('Destination', 'goal', '', '' ,'' ,'', 'fromEight', 'fromNine');


console.log(allPlanets);