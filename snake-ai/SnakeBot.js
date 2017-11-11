var moveDecision = require('./MoveDecision.js')
var game = require('./Game.js')

module.exports = {

    calculateMoveResponse: function (data) {
        game.initializeGame(data)

        var response = {
            move: moveDecision.getNextMove(game),
            taunt: "Moving...." // optional, but encouraged!
        }
        return response;
    }
}
