var gameObjects = require('./GameObjects.js')

module.exports = {
    getNextMove: function(game) {
        var nearestFood = game.nearestFood
        var myPosition = game.myHeadPosition
        var nextMove = "down"
        console.log("Food: ")
        console.log(nearestFood)
        console.log("Position: ")
        console.log(myPosition)

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
          if (!this.isCollision(game, positionX, positionY - 1)) {
              return 'up'
            }
            return this.fallbackIfNeeded(game, positionX, positionY, 'right', recursionCounter + 1)
        }
        if (direction === 'down') {
          if (!this.isCollision(game, positionX, positionY + 1)) {
            return 'down'
          }
          return this.fallbackIfNeeded(game, positionX, positionY, 'left', recursionCounter + 1)
        }
        if (direction === 'right') {
          if (!this.isCollision(game, positionX + 1, positionY)) {
            return 'right'
          }
          return this.fallbackIfNeeded(game, positionX, positionY, 'up', recursionCounter + 1)
        }
        if (direction === 'left') {
          if (!this.isCollision(game, positionX - 1, positionY)) {
            return 'left'
          }
          return this.fallbackIfNeeded(game, positionX, positionY, 'down', recursionCounter + 1)
        }
    },

    isCollision: function(game, x, y) {
      if (x < 0 || y < 0) {
        return true
      }
      if (game.gameArray[x][y] === gameObjects.Empty) {
        return false
      }
      if (game.gameArray[x][y] === gameObjects.Food) {
        return false
      }
      return true
    }
}
