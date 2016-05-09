import {Component} from 'angular2/core'
// these decorators are functions so we have to call them. 
import {PlayersService } from './players.service'
import {AutoGrowDirective} from './auto-grow.directive'


@Component({
    selector: 'players', 
    // what does back tick do instead of single quote?
    // back tick allows us to break template into multiple lines. 
    template: `
    <h2> Top Players </h2>
    {{ yourPlayer}}
    <input type="text" autoGrow /> <br>
    {{ title }}
    <ol>
        <li *ngFor="#player of players"> 
         {{ player}}
        </li> 
    </ol>
    `
    , 
    providers: [PlayersService], 
    directives: [AutoGrowDirective]
})
export class PlayersComponent {
    // to make this class component, we have decorate/annotate it. 
    title = "Outstanding players from EPL season 2015-2016: "; 
    yourPlayer= " Enter your favorite player: "; 
    players; 
    // camelCase: PascalCase
    constructor(playersService: PlayersService) {    
     this.players=playersService.getPlayers(); 
     // data can be fetched from RESTful API or local storage in the browser instead.  
     
    }
}
