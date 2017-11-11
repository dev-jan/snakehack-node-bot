var gameObjects = require('./GameObjects.js')

module.exports = {

    getNextMove: function(game) {
        var nextMove = "";
        // check up
        if (game.gameArray[game.myHeadPosition.x][game.myHeadPosition.y - 1] ===  gameObjects.Empty) {
          nextMove = 'up'
        }
        return nextMove
    }
}
