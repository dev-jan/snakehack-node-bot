var food = require('./Food.js')
var enemy = require('./Enemy.js')
var defaultMove = require('./DefaultMove.js')

module.exports = {

    getNextMove: function(game) {
        var nextMove = "up"; // up is the default move (if the server not respond)

        console.log(game)
        nextMove = food.getNextMove(game)

        return nextMove
    }
}
