var moveDecision = require('./MoveDecision.js')
var gameBuilder = require('./GameBuilder.js')

module.exports = {

    gameArray,

    calculateMoveResponse: function (data) {
        gameArray = gameBuilder.createGameArray(data)

        var response = {
            move: moveDecision.getNextMove(data, gameArray),
            taunt: "Moving...." // optional, but encouraged!
        }
        return response;
    }
}
