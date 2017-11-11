var gameObjects = require('./GameObjects.js')

module.exports = {
    getNextMove: function(game) {
        var nearestFood = {x: 1, y: 7} //game.nearestFood
        var myPosition = game.myHeadPosition
        var nextMove = ""

        if (nearestFood.x > myPosition.x) {
          nextMove = this.fallbackIfNeeded(game, myPosition.x, myPosition.y, 'right', 1)
        }
        else if (nearestFood.x < myPosition.x) {
          nextMove = this.fallbackIfNeeded(game, myPosition.x, myPosition.y, 'left', 1)
        }
        else if (nearestFood.y > myPosition.y) {
          nextMove = this.fallbackIfNeeded(game, myPosition.x, myPosition.y, 'down', 1)
        }
        else if (nearestFood.y < myPosition.y) {
          nextMove = this.fallbackIfNeeded(game, myPosition.x, myPosition.y, 'up', 1)
        }
        return nextMove
    },

    fallbackIfNeeded: function (game, positionX, positionY, direction, recursionCounter) {
        if (recursionCounter > 4) {
          console.log("DEAD :(")
          return "up"
        }
        if (direction === 'up') {
            if (game.gameArray[positionX][positionY - 1] === gameObjects.Empty) {
              return 'up'
            }
            return this.fallbackIfNeeded(game, positionX, positionY, 'right', recursionCounter + 1)
        }
        if (direction === 'down') {
          if (game.gameArray[positionX][positionY + 1] === gameObjects.Empty) {
            return 'down'
          }
          return this.fallbackIfNeeded(game, positionX, positionY, 'left', recursionCounter + 1)
        }
        if (direction === 'right') {
          if (game.gameArray[positionX + 1][positionY] === gameObjects.Empty) {
            return 'right'
          }
          return this.fallbackIfNeeded(game, positionX, positionY, 'up', recursionCounter + 1)
        }
        if (direction === 'left') {
          if (game.gameArray[positionX - 1][positionY] === gameObjects.Empty) {
            return 'left'
          }
          return this.fallbackIfNeeded(game, positionX, positionY, 'down', recursionCounter + 1)
        }
    }
}
