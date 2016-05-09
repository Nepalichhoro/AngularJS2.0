System.register(['angular2/core', './clubs.service', './auto-grow.directive'], function(exports_1, context_1) {
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
    var core_1, clubs_service_1, auto_grow_directive_1;
    var ClubsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (clubs_service_1_1) {
                clubs_service_1 = clubs_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            ClubsComponent = (function () {
                // camelCase: PascalCase
                function ClubsComponent(clubsService) {
                    // to make this class component, we have decorate/annotate it.
                    this.title = "English Premier League 2015-2016 Ranking : ";
                    this.yourClub = " Enter your favorite club: ";
                    this.clubs = clubsService.getClubs();
                }
                ClubsComponent = __decorate([
                    core_1.Component({
                        selector: 'clubs',
                        // what does back tick do instead of single quote?
                        // back tick allows us to break template into multiple lines.
                        template: "\n    <h2> Clubs </h2>\n    {{ yourClub}}\n    <input type=\"text\" autoGrow /> <br>\n    {{ title }}\n    \n    <ol>\n        <li *ngFor=\"#club of clubs\">\n         {{ club}}\n        </li>\n    </ol>\n    ",
                        providers: [clubs_service_1.ClubsService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [clubs_service_1.ClubsService])
                ], ClubsComponent);
                return ClubsComponent;
            }());
            exports_1("ClubsComponent", ClubsComponent);
        }
    }
});
//# sourceMappingURL=clubs.component.js.map