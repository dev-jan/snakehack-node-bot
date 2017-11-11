var gameBuilder = require('./GameArrayBuilder.js')

module.exports = {

    gameArray: null,
    myHeadPosition: null,
    initializeGame: function(data) {

        gameArray = gameBuilder.createGameArray(data)

        myHeadPosition = { x: 0, y: 0 } // todo
    }
}