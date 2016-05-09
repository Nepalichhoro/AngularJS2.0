//  service is just a plain typescript class. nothing more. 
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClubsService;
    return {
        setters:[],
        execute: function() {
            // to use this service in the componen, we have to import this service in our component. 
            // reference it. can be done in several ways: 
            // a)  new operator (can cause tight coupling between different components)
            // b) pass as parameter into constructor
            ClubsService = (function () {
                function ClubsService() {
                }
                ClubsService.prototype.getClubs = function () {
                    return ["Leicester City", "Tottenham Hotspur", "Arsenal", "Manchester City", "Manchester United", "Southampton", "West Ham United", "Liverpool", "Chelsea", "Stoke City", "Swansea City", "Everton", "Watford", "Crystal Palace", "West Bromwich Albion", "AFC Bournemouth", "Sunderland", "Newcastle United", "Norwich City", "Aston Villa"];
                };
                return ClubsService;
            }());
            exports_1("ClubsService", ClubsService);
        }
    }
});
//# sourceMappingURL=clubs.service.js.map