The vision is to create a fun and interactive web-based space adventure puzzle game. The pain point this solves is in aiding relaxation during these stressful times. Why should one care? Because everyone needs a little bit of fun in their life.

The web application will:
* Direct a spaceship from one planet to another
* Provide the user with a series of choices that effect their progress in the game
* Tabulate a score depending on user performance
* Utilize custom fonts and design to create a better user experience
* The game will provide a legend of current game statistics indicating user performance

The web application will not:
* The application will never be turned into a multiplayer game
* The application will not be 3D

Our minimum viable product will be a game where you control a ship and move across a path of planets to an end goal. At each stop an event will happen that will tell you what happens or present you with a choice to make. The events will be generated randomly with differing outcomes being weighted differently. The ships stats will be affected by events. The goal is to reach the final frontier.

Stretch goals include:
* Greater animation
* More paths between planets
* Premium design
* More events that do not repeat
* Make planets more sophisticated in appearance i.e. spinning

Functionality:
* User can input name
* User can view leaderboard
* User will be presented with instructions
* User can start new game or continue game
* User can choose path of planets
* User can make decisions based on event cards presented
* User can view site creators

Data Flow:
1. Page loads to home page with About information, instructions and leaderboard
2. User can start a new game
3. User chooses planet path to follow
4. Event card is random generated
5. User choosees an option
6. Based on percentages option has an effect on crew or fuel
7. User chooses another path and steps 4-6 repeat
8. This happens until the user reaches the end of the user loses all crew or fuel
9. Score is uploaded to leaderboard if high enough point total
