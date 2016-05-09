System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PlayersService;
    return {
        setters:[],
        execute: function() {
            PlayersService = (function () {
                function PlayersService() {
                }
                PlayersService.prototype.getPlayers = function () {
                    return ["	Riyad Mahrez", "Jamie Vardy", "Harry Kane", "Sergio Agüero", "Mesut Özil", "Dimitri Payet", "	Kevin De Bruyne", "	Dele Alli"];
                };
                return PlayersService;
            }());
            exports_1("PlayersService", PlayersService);
        }
    }
});
//# sourceMappingURL=players.service.js.map