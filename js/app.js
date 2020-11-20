//Global Variables

var allEventCards = []
var eventCardNumberArray = []
var totalCrew = 5;
var totalFuel = 10;
var totalPoints = 0;
var inGamePoints = 0;
var resourcePoints = 0;
var pathArray = [];
var leaderBoard = [];
var userName = 'Captain Guinea-Pig';
var eventCardCounter = -1;
var userLost = false;
var gameDifficulty = 'easy';
var radioEasy = document.getElementById('radio-easy');
var radioMedium = document.getElementById('radio-medium');
var radioHard = document.getElementById('radio-hard');

//Constructor Functions

//Leaderboard input constructor function
//sorts leaderboard numerically and keeps only top 10 high scores
var HighScore = function(name, points){
    this.name = name;
    this.points = points;
    leaderBoard.unshift(this);
    leaderBoard.sort(function(a, b){return b.points - a.points});
    if(leaderBoard.length>10){
        leaderBoard.pop();
    }
}


// Event Card Constructor Function
var EventCard = function (name, img, fuel, crew, points, percentSuccess, type, textSummary, gainText, lossText, success = false){
    this.name = name;
    this.textSummary = textSummary;
    this.fuel = fuel;
    this.crew = crew;
    this.points = points;
    this.percentSuccess = percentSuccess;
    this.gainText = gainText;
    this.lossText = lossText;
    this.success = success
    this.type = type;
    this.img = `img/events/${img}.jpg`;

    allEventCards.push(this);
}

//Starting leaderboard value
new HighScore('Insane-O', 27000);

//Event card instantiations 
new EventCard('Mine for Fuel', 'mine-durr', 1, -1, 0, .7, 'fuel', 'You have landed on an Orion type planet that is rich in fuel but potentially dangerous. Would you like to mine for 1 unit of fuel at the risk of losing 1 crew member?', 'Your mining was a success, all crew members survived, and you obtained 1 unit of fuel', 'Your mining was a disaster, you lost one crew member and obtained zero fuel', false);

new EventCard('Steal Fuel', 'steal-dahms', 2, -2, 0, .4, 'fuel', 'This planet is home to space bandits who hoard large amounts of fuel. Would you like to steal 2 units of fuel at the risk of losing 2 crew members?”', 'You successfully stole 2 units of fuel from the bandits without losing any crew members.', 'The bandits were wise to your plan and you lost 2 crew members in the scuffle.', false);

new EventCard('Restock Fuel', 'restock-dziedzic', 1, -1, 0, .8, 'fuel', 'Upon landing on this planet, you have remembered you have fuel stored in a hatch located on the outside of your ship. Would you like to send a crew member outside to retrieve 1 unit of fuel at the risk of them being attacked by aliens?', 'Your crew member safely retrieved the fuel, you have gained 1 unit of fuel.', 'Vicious aliens attacked your crew member while they were outside, you have lost 1 crew member.', false);

new EventCard('New Crew Member', 'crew-lobos', -2, 1, 0, .3, 'crew', 'This planet is home to a space station with potential crew members, but it will take some time to convince them to join your crew. Would you like to risk exhausting 2 units of fuel to try and recruit 1 crew member?', 'You successfully convinced someone to join your team, you gain 1 crew member and lose no fuel.', 'Your attempts at convincing someone to join your team have failed, you lost 2 units of fuel in the process.', false);

new EventCard('Hunt for Space Ruby', 'ruby-jasond', -3, 0, 5000, .33, 'fuelTreasure', 'This planet is home to the rarest space gems, the Space Ruby worth 5,000 points. Would you like to risk 3 units of fuel to obtain one?', 'While incredibly rare, you were able to find a Space Ruby! You have gained 5,000 points.', 'The Space Ruby is an elusive treasure, unfortunately you could not find one and lost 3 units of fuel in the process.', false);

new EventCard('Search for Moon Gems', 'gems-wolf', -1, 0, 1000, .7, 'fuelTreasure', 'This planet is of the Galactico variety and is home to precious Moon Gems that will increase your point total by 1,000. Would you like to risk 1 unit of fuel fuel to obtain one?', 'You struck it big by finding a Moon Gem on your first try! You have gained 1,000 points.', 'Your attempts at locating a Moon Gem were in vain, you have lost 1 unit of fuel in the process.');

new EventCard('Dam Righted!!', 'dam-justinw', -1, 0, 2000, .6, 'fuelTreasure', 'The locals offer you 2000 points to help save their town by using your ship to brace the failing dam upstream while they repair it? It may require 1 unit of fuel.', 'The easiest 2000 points you have made in a while, you even got a free ship wash with the deal!', 'The dam can not be saved. You burn extra fuel trying futily to keep it upright long enough to evacuate, but the town and its wealth are washed away.', false)

new EventCard('Exotic Beastie', 'beastie', 0, -2, 5000, .5, 'crewTreasure', 'A rare albino sabrewraith is on the lose. A live one would fetch 5000 points on the market. Risk 2 crew to hunt it down and capture it?', 'The two lucky "volunteers" come across it while it is sleeping and capture it', 'The erstwhile hunters are never heard from again... You lose 2 crew.', false);

new EventCard('Start Your Engines!', 'race-lampel', -1, 0, 5000, .3, 'race', 'You have arrived in time to enter the Orion IV Grand Prix. Stake 1 fuel unit to enter the race and try to win 5000 points?', 'You blow the competition away and leave with the 5000 point purse.', 'You make a good showing, but still lose one fuel.', false);

new EventCard('Special Modifications', 'flashing-mcgowan', 2, 0, -2000, .5, 'special', 'A trader offers you an experimental engine part that could reduce fuel consumption. Invest 2000 points to purchase it and gain 2 units of fuel?', 'It works like a charm easily, paying for itself and saving fuel', 'What a piece of junk. You burn 2000 points replacing it.', false);

new EventCard('Crew Member Falls Ill', 'ill-cdc', 0, -1, 0, 1.0, 'no-action', 'Upon arriving at this planet, you realize one of your crew members has fallen ill on the journey, you lose 1 crew member.', '', '', false);

new EventCard('Efficient Journey', 'efficient-halacious', 1, 0, 0, 1.0, 'no-action', 'Upon arriving at this planet, you realize that your trip was more fuel efficient than expected. You gain 1 unit of fuel.', '', '', false);

new EventCard('Unintended Extraction', 'stowaway-ratushny', -1, 1, 0, 1.0, 'no-action', 'A local stows away on your ship. But it turns out they are being hunted. You burn 1 fuel unit to throw off pursuit, but the grateful passenger decides to join your crew for the journey.', '', '', false);

new EventCard('Cha-Ching', 'chaching-strauss', 0, 0, 2000, 1.0, 'no-action', 'The only thing you discover on this remote planet is a concealed pod of teasure worth 2000 points', '', '', false);

new EventCard('Look out!!', 'sticky-lee', 0, -1, 0, 1.0, 'no-action', 'The settlements on this planet are deserted. You discover why when one of your crew are engulfed by a land anenome!! Lose 1 crew.', '', '', false);

new EventCard('Intruder!!', 'intruder-rasmussen', 0, 0, -3000, 1.0, 'no-action', `A local invades your ship and makes off with 3000 points out of your cargo hold. You've been robbed!!`, '', '', false);


//Event Handlers

//Event Handler for establishing game difficulty and adjusting starting resources accordingly
function difficultyLevel(){
    if(radioEasy.checked == true){
        totalCrew = 5;
        totalFuel = 10;
        gameDifficulty = 'easy';
        removeChart();
        generateChart();
    }
    if(radioMedium.checked == true){
        totalCrew = 3;
        totalFuel = 7;
        gameDifficulty = 'medium';
        removeChart();
        generateChart();
    }
    if(radioHard.checked == true){
        totalCrew = 2;
        totalFuel = 5;
        gameDifficulty = 'hard';
        removeChart();
        generateChart();
    }
}

//General Helper Functions

//Function to remove fuel and crew resources chart to prevent old data appearing on mouseover
function removeChart(){
    var divChartEl = document.getElementById('ship-status');
    divChartEl.innerHTML = '';
    var canvasEl = document.createElement('canvas');
    canvasEl.setAttribute('id', 'myChart');
    canvasEl.setAttribute('width', '180');
    canvasEl.setAttribute('height', '300');
    divChartEl.appendChild(canvasEl);
}

// Generates chart of fuel and crew resources
function generateChart(){
    var chartDataset = [totalCrew, totalFuel];
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['Crew', 'Fuel'],
        datasets: [
            {
            label: 'Resources',
            data: chartDataset,
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
            legend: {
            display: true,
            labels: {
                fontColor: ['rgb(255,255,255)']}
            },
        scales: {
            yAxes: [
            {
                ticks: {
                beginAtZero: true,
                fontColor: ['rgb(255,255,255)']
                },
            },
            ],
        },
        },
    });
}

//Stringifies leaderboard high score data and stores it in local storage
function leaderBoardStoreLs(){
    // leaderBoard.sort(function(a, b){return a.points - b.points});
    var stringLeaderBoard = JSON.stringify(leaderBoard);
    localStorage.setItem('leaderboard', stringLeaderBoard);
}

//Parses local storage leaderboard and returns values to object instances
function generateLeaderBoardLs(parsedScores){
    leaderBoard = [];
    for(var i = 0; i < parsedScores.length; i++){
        new HighScore (parsedScores[i].name, parsedScores[i].points);
    }
}

//Returns leaderboard array in the form of object instances from local storage
function returnLeaderBoardLs(){
    var scoresLs = localStorage.getItem('leaderboard');
    var parsedScores = JSON.parse(scoresLs);
    generateLeaderBoardLs(parsedScores);
}

//Generates a random number for use in random selection of event cards
function randomNumberGeneratorEventCard(){
    return Math.floor(Math.random() * allEventCards.length);
}

//Creates an array of non-repeating random numbers for use in random event card selection
function eventCardArrayGenerator(){
    for( var i = 0; i < allEventCards.length; i++){
        var randomNumber = randomNumberGeneratorEventCard();
        while(eventCardNumberArray.includes(randomNumber)){
            randomNumber = randomNumberGeneratorEventCard();
        }
        eventCardNumberArray.unshift(randomNumber);
    }
    while(eventCardNumberArray.length>allEventCards.length){
        eventCardNumberArray.pop();
    }
    return eventCardNumberArray;
}

//Generates a random decimal for use in event card action success or failure
function randomSuccessGenerator(){
    return Math.random();
}

//Analyzes if random decimal generated is within the rang of probability of success for a given event card
function eventCardSuccess(eventCard){
    eventSuccessNumber = randomSuccessGenerator();
    if(eventSuccessNumber < eventCard.percentSuccess){
        eventCard.success = true;
    }else{
        eventCard.success = false;
    }
}

//Selects an event card using the non-repeating random number array eventCardNumberArray and cycles through array for each invocation
function eventCardSelector(){
    eventCardCounter++;
    var eventCardSelect = eventCardNumberArray[eventCardCounter];
    return allEventCards[eventCardSelect];
}

//Analyzes type of event card and performs necessary actions based on event card success, failure, or no action
function eventCardAction(eventCard){
    eventCardSuccess(eventCard);
    if(!eventCard.success){
        if(eventCard.type === 'no-action'){
            totalCrew+= eventCard.crew;
            totalFuel+= eventCard.fuel;
            inGamePoints+= eventCard.points;
        }
        if(eventCard.type === 'fuel'){
            totalCrew+= eventCard.crew;
        };
        if(eventCard.type === 'crew'){
            totalFuel+= eventCard.fuel;
        }
        if(eventCard.type === 'fuelTreasure'){
            totalFuel+= eventCard.fuel;
        }
        if(eventCard.type === 'crewTreasure'){
            totalCrew+= eventCard.crew;
        }
        if(eventCard.type === 'special'){
            inGamePoints+= eventCard.points;
        }
        if(eventCard.type === 'race'){
            totalFuel+= eventCard.fuel;
        }
    }else{
        if(eventCard.type === 'no-action'){
            totalCrew+= eventCard.crew;
            totalFuel+= eventCard.fuel;
            inGamePoints+= eventCard.points;
        }
        if(eventCard.type === 'fuel'){
            totalFuel+= eventCard.fuel;
        };
        if(eventCard.type === 'crew'){
            totalCrew+= eventCard.crew;
        }
        if(eventCard.type === 'fuelTreasure'){
            inGamePoints+= eventCard.points;
        }
        if(eventCard.type === 'special'){
            inGamePoints+= eventCard.points;
            totalFuel+= eventCard.fuel;
        }
        if(eventCard.type === 'race'){
            totalFuel+= eventCard.fuel;
            inGamePoints+= eventCard.points;
        }
    }
    return eventCard.success; 
}

//Tabulates total points using pre-determined algorithm for points
function tabulatePoints(){
    totalPoints = 0
    resourcePoints = 0
    resourcePoints = ((totalCrew * 2000) + (totalFuel * 1000));
    totalPoints += inGamePoints + resourcePoints;
    if(totalPoints < 0){
        totalPoints = 0;
    }
    document.getElementById("current-score-h5").innerHTML = `Your current score is ${totalPoints}`;
    return totalPoints;
}

//Decrements fuel based on fuel needed to reach each planet
function fuelDecrement(fuel){
    totalFuel -= fuel;
}

//Analyzes if user has run out of fuel on trip to a given planet and if true user loses
function totalStatCheckLand(){
    if(totalFuel < 0){
        totalFuel = 0;
        userLost = true;
    }
}

//Analyzes if user has run out of a given resource after an event card action and if true user loses
function totalStatCheckLeave(){
    if(totalCrew < 0){
        totalCrew = 0;
        userLost = true
    }
    if(totalFuel <= 0){
        totalFuel = 0;
        userLost = true;
    }
}

//Reloads game from start if user chooses "new captain" option after a game ends
function refreshNewGame(){
    window.location.reload();
}

//Adds value to local storage in the event user has wiped local storage upon loading
if(localStorage.leaderboard == undefined){
    leaderBoardStoreLs();
}

//Generates event card array for use in game.js
eventCardArrayGenerator();

//Add score to right side bar on game page
// document.getElementById("current-score-h5").innerHTML = `Your current score is ${totalPoints}`;