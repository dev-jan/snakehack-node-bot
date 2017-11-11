var gameBuilder = require('./GameArrayBuilder.js')

module.exports = {

    gameArray: null,
    myHeadPosition: null,
    myHealth: null,
    nearestFood: null,
    initializeGame: function(data) {

        console.log("Game.initializeGame()")

        gameArray = gameBuilder.createGameArray(data)

        var mySnake = this.getMySnake(data)

        var xHead = mySnake.coords[0][0]
        var yHead = mySnake.coords[0][1]
        myHeadPosition = { x: xHead, y: yHead }
        
        myHealth = mySnake.health_points

        nearestFood = {x: 1, y: 1 }
    },

    getMySnake: function(data) {

        var myId = data.you
        var mySnake = null
        data.snakes.forEach(function(snake) {

            if (snake.id == myId) {
                mySnake = snake
            }
        }, this)

        return mySnake
    }
}