var gameBuilder = require('./GameArrayBuilder.js')

module.exports = {

    gameArray: null,
    myHeadPosition: null,
    myHealth: null,
    nearestFood: null,
    initializeGame: function(data) {

        console.log("Game.initializeGame()")

        this.gameArray = gameBuilder.createGameArray(data)

        var mySnake = this.getMySnake(data)

        var xHead = mySnake.coords[0][0]
        var yHead = mySnake.coords[0][1]
        this.myHeadPosition = { x: xHead, y: yHead }
        
        this.myHealth = mySnake.health_points

        this.setNearestFood(data.food)
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
    },

    setNearestFood: function(food) {

        var shortestDistance = this.calcDistance(food[0])
        var targetFood = food[0]

        food.forEach(function(f) {
            var distance = this.calcDistance(f)
            if (distance < shortestDistance) {
                shortestDistance = distance
                targetFood = f
            }
        }, this)
        
        this.nearestFood = { x: targetFood[0], y: targetFood[1] }
    },

    calcDistance: function(food) {

        return Math.abs(this.myHeadPosition.x - food[0]) + Math.abs(this.myHeadPosition.y - food[1])
    }
}