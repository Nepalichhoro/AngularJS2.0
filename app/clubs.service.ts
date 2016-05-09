//  service is just a plain typescript class. nothing more. 

// to use this service in the componen, we have to import this service in our component. 
// reference it. can be done in several ways: 
// a)  new operator (can cause tight coupling between different components)
// b) pass as parameter into constructor
 export class ClubsService {
     getClubs(): string [] {
          return ["Leicester City", "Tottenham Hotspur", "Arsenal", "Manchester City", "Manchester United", "Southampton", "West Ham United", "Liverpool", "Chelsea", "Stoke City", "Swansea City", "Everton", "Watford", "Crystal Palace", "West Bromwich Albion", "AFC Bournemouth", "Sunderland", "Newcastle United", "Norwich City", "Aston Villa"]; 
     }
 }