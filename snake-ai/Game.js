var gameBuilder = require('./GameArrayBuilder.js')

module.exports = {

    gameArray: null,
    myHeadPosition: null,
    myHealth: null,
    initializeGame: function(data) {

        gameArray = gameBuilder.createGameArray(data)

        myHeadPosition = { x: 0, y: 0 } // todo

        myHealth = 100
    }
}