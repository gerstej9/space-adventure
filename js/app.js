//Global Variables

var allEventCards = []
var totalCrew = 5;
var totalFuel = 10;
var totalPoints = 0;


// Event Card Constructor Function

var EventCard = function (name, fuel, crew, points, percentSuccess, textSummary, gainText, lossText){
    this.name = name;
    this.textSummary = textSummary;
    this.fuel = fuel;
    this.crew = crew;
    this.points = points;
    this.percentSuccess = percentSuccess;
    this.gainText = gainText;
    this.lossText = lossText;

    allEventCards.push(this);
}


new EventCard('Mine for Fuel', 1, -1, 0, .7, 'You have landed on an Orion type planet that is rich in Neptunium fuel but potentially dangerous. Would you like to mine for 1 unit of Neptunium at the risk of losing 1 crew member?', 'Your mining was a success, all crew members survived, and you obtained 1 unit of Neptunium', 'Your mining was a disaster, you lost one crew member and obtained zero Neptunium');

new EventCard('Steal Fuel', 2, -2, 0, .4, 'This planet is home to space bandits who hoard large amounts of Neptunium fuel. Would you like to steal 2 units of Neptunium at the risk of losing 2 crew members?”', 'You successfully stole 2 units of Neptunium from the bandits without losing any crew members.', 'The bandits were wise to your plan and you lost 2 crew members in the scuffle.');

new EventCard('Restock Fuel', 1, -1, 0, .8, 'Upon landing on this planet, you have remembered you have fuel stored in a hatch located on the outside of your ship. Would you like to send a crew member outside to retrieve 1 unit of Neptunium at the risk of them being attacked by aliens?', 'Your crew member safely retrieved the fuel, you have gained 1 unit of Neptunium.', 'Vicious aliens attacked your crew member while they were outside, you have lost 1 crew member.');

new EventCard('New Crew Member', -2, 1, 0, .3, 'This planet is home to a space station with potential crew members, but it will take some time to convince them to join your crew. Would you like to risk exhausting 2 units of Neptunium to try and recruit 1 crew member?', 'You successfully convinced someone to join your team, you gain 1 crew member and lose no fuel.', 'Your attempts at convincing someone to join your team have failed, you lost 2 units of Neptunium in the process.');

new EventCard('Hunt for Space Ruby', -3, 0, 5000, .33, 'This planet is home to the rarest space gems, the Space Ruby worth 5,000 points. Would you like to risk 3 units of Neptunium to obtain one?', 'While incredibly rare, you were able to find a Space Ruby! You have gained 5,000 points.', 'The Space Ruby is an elusive treasure, unfortunately you could not find one and lost 3 units of Neptunium in the process.');

new EventCard('Search for Moon Gems', -1, 0, 1000, .7, 'This planet is of the Galactico variety and is home to precious Moon Gems that will increase your point total by 1,000. Would you like to risk 1 unit of Neptunium fuel to obtain one?', 'You struck it big by finding a Moon Gem on your first try! You have gained 1,000 points.', 'Your attempts at locating a Moon Gem were in vain, you have lost 1 unit of Neptunium in the process.');

new EventCard('Crew Member Falls Ill', 0, -1, 0, 0, 'Upon arriving at this planet, you realize one of your crew members has fallen ill on the journey, you lose 1 crew member.', '', '');

new EventCard('Efficient Journey', 1, 0, 0, 0, 'Upon arriving at this planet, you realize that your trip was more fuel efficient than expected. You gain 1 unit of Neptunium.', '', '');

