import {Component} from 'angular2/core';
import {ClubsComponent} from './clubs.component'; 
import {PlayersComponent} from './players.component'; 

@Component({
    selector: 'my-app',
    template: 
    `
    <h1 class="jumbotron">Our First Angular 2.0 App with incredible EPL 2015-16</h1>
    <clubs></clubs>
    <players></players>
    `
   , 
    directives: [ClubsComponent, PlayersComponent]
    
})
export class AppComponent { }