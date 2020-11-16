function planetOneZoomIn() {
    var displayEvent = document.getElementById("display-event-one");
    planetOneClicked.classList.remove("choice");
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
    planetTwoClicked.classList.remove("choice");
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