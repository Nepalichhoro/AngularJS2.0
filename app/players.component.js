System.register(['angular2/core', './players.service', './auto-grow.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, players_service_1, auto_grow_directive_1;
    var PlayersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (players_service_1_1) {
                players_service_1 = players_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            PlayersComponent = (function () {
                // camelCase: PascalCase
                function PlayersComponent(playersService) {
                    // to make this class component, we have decorate/annotate it. 
                    this.title = "Outstanding players from EPL season 2015-2016: ";
                    this.yourPlayer = " Enter your favorite player: ";
                    this.players = playersService.getPlayers();
                    // data can be fetched from RESTful API or local storage in the browser instead.  
                }
                PlayersComponent = __decorate([
                    core_1.Component({
                        selector: 'players',
                        // what does back tick do instead of single quote?
                        // back tick allows us to break template into multiple lines. 
                        template: "\n    <h2> Top Players </h2>\n    {{ yourPlayer}}\n    <input type=\"text\" autoGrow /> <br>\n    {{ title }}\n    <ol>\n        <li *ngFor=\"#player of players\"> \n         {{ player}}\n        </li> \n    </ol>\n    ",
                        providers: [players_service_1.PlayersService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [players_service_1.PlayersService])
                ], PlayersComponent);
                return PlayersComponent;
            }());
            exports_1("PlayersComponent", PlayersComponent);
        }
    }
});
//# sourceMappingURL=players.component.js.map