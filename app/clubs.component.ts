import {Component} from 'angular2/core'
// these decorators are functions so we have to call them.
import {ClubsService } from './clubs.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'clubs',
    // what does back tick do instead of single quote?
    // back tick allows us to break template into multiple lines.
    template:
    `
    <h2> Clubs </h2>
    {{ yourClub}}
    <input type="text" autoGrow /> <br>
    {{ title }}
    
    <ol>
        <li *ngFor="#club of clubs">
         {{ club}}
        </li>
    </ol>
    `
    ,
    providers: [ClubsService],
    directives: [AutoGrowDirective]
})
export class ClubsComponent {
    // to make this class component, we have decorate/annotate it.
    title = "English Premier League 2015-2016 Ranking : ";
    yourClub= " Enter your favorite club: "; 
   
    clubs;
    // camelCase: PascalCase
    constructor(clubsService: ClubsService) {

     this.clubs=clubsService.getClubs();
    }
}
