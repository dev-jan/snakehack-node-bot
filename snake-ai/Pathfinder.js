var gameFieldConstants = require('./GameFieldConstants.js')

module.exports = {
    exitStategy: 'right',

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
      console.log("try " + direction)
        if (recursionCounter > 20) {
          console.log("recursion overflow, use exit strategy " + this.exitStategy)
          return this.exitStategy
        }
        if (direction === 'up') {
          if (!this.isCollision(game, positionX, positionY - 1, direction)) {
              return 'up'
            }
            return this.fallbackIfNeeded(game, positionX, positionY, this.getFallbackDirection('up'), recursionCounter + 1)
        }
        if (direction === 'down') {
          if (!this.isCollision(game, positionX, positionY + 1, direction)) {
            return 'down'
          }
          return this.fallbackIfNeeded(game, positionX, positionY, this.getFallbackDirection('down'), recursionCounter + 1)
        }
        if (direction === 'right') {
          if (!this.isCollision(game, positionX + 1, positionY, direction)) {
            return 'right'
          }
          return this.fallbackIfNeeded(game, positionX, positionY, this.getFallbackDirection('right'), recursionCounter + 1)
        }
        if (direction === 'left') {
          if (!this.isCollision(game, positionX - 1, positionY, direction)) {
            return 'left'
          }
          return this.fallbackIfNeeded(game, positionX, positionY, this.getFallbackDirection('left'), recursionCounter + 1)
        }
    },

    getFallbackDirection: function(direction) {
      if (direction === 'up') {
        return 'right'
      }
      if (direction === 'right') {
        return 'down'
      }
      if (direction === 'down') {
        return 'left'
      }
      if (direction === 'left') {
        return 'up'
      }
    },

    isCollision: function(game, x, y, nextDirection) {
      if (x < 0 || y < 0) {
        return true
      }
      if (x >= game.gameWidth || y >= game.gameHeight) {
        return true
      }
      if (!this.isFieldACollision(game, x, y)) {
        console.log(nextDirection + " is no collision, check near collision...")
        return this.nearCollition(game, x, y, nextDirection)
      }
      return true
    },

    isFieldACollision: function(game, x, y) {
      // border is not a near collision...
      if (x < 0 || y < 0) {
        return false
      }
      if (x >= game.gameWidth || y >= game.gameHeight) {
        return false
      }
      if (game.gameArray[x][y] === gameFieldConstants.Empty || game.gameArray[x][y] === gameFieldConstants.Food) {
        return false
      }
      return true
    },

    nearCollition: function(game, x, y, direction) {
      if (direction === 'up') {
        if (this.isFieldACollision(game, x, y - 1)) {
          console.log(direction + " is near collision!")
          this.exitStategy = 'up'
          return true
        }
      }
      if (direction === 'right') {
        if (this.isFieldACollision(game, x + 1, y)) {
          this.exitStategy = 'right'
          return true
        }
      }
      if (direction === 'down') {
        if (this.isFieldACollision(game, x, y + 1)) {
          this.exitStategy = 'down'
          return true
        }
      }
      if (direction === 'left') {
        if (this.isFieldACollision(game, x - 1, y)) {
          this.exitStategy = 'left'
          return true
        }
      }
      console.log("no near collision :)")
      return false
    }
}
