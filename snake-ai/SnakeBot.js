var pathfinder = require('./Pathfinder.js')
var game = require('./Game.js')
var messageGenerator = require('./MessageGenerator.js')

module.exports = {

    lastMessage: "I'm a bee",
    calculateMoveResponse: function (data) {
        game.initializeGame(data)

        if (data.turn % 5 == 0) {
            lastMessage = messageGenerator.getRandomMessage()
        }
        var response = {
            move: pathfinder.getNextMove(game),
            taunt: lastMessage
        }
        console.log("Next Move: " + response.move)
        return response;
    }
}
