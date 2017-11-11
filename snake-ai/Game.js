var gameBuilder = require('./GameArrayBuilder.js')

module.exports = {

    gameArray: null,
    myHeadPosition: null,
    myHealth: null,
    nearestFood: null,
    initializeGame: function(data) {

        console.log("Game.initializeGame()")

        gameArray = gameBuilder.createGameArray(data)

        myHeadPosition = { x: 0, y: 0 } // todo

        myHealth = 100

        nearestFood = {x: 1, y: 1 }
    }
}