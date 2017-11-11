var gameObjects = require('./GameObjects.js')

module.exports = {

    gameArray: null,

    createGameArray: function(data) {

        console.log("GameArrayBuilder.createGameArray()")

        gameArray = this.createArray(data.width, data.height)

        console.log(data)

        this.addSnakes(data)
        this.addFood(data)

        return gameArray
    },

    // put snakes on game array
    addSnakes: function(data) {
        
        console.log("GameArrayBuilder.addSnakes()")

        var myId = data.you

        data.snakes.forEach(function(snake) {
            
            var isHead = true; // todo: make sure this is the head.. maybe it's the tail
            snake.coords.forEach(function(coord) {

                var objectToPlace = gameObjects.EnemySnakeBody
                if (isHead) {
                    if (snake.id == myId) {
                        objectToPlace = gameObjects.PlayerSnakeHead
                    } else {
                        objectToPlace = gameObjects.EnemySnakeHead
                    }
                } else if (snake.id == myId) {
                    objectToPlace = gameObjects.PlayerSankeBody
                }
                isHead = false;             
                gameArray[coord[0]][coord[1]] = objectToPlace
            }, this)
        }, this)
    },

    // put foods on game array
    addFood: function(data) {

        console.log("GameArrayBuilder.addFood()")

        data.food.forEach(function(f) {
            gameArray[f[0]][f[1]] = gameObjects.Food
        }, this)
    },

    // Copy pasta from Stackoverflow. Creates 2 dimensional array
    createArray: function(width, height) {

        console.log("GameArrayBuilder.createArray()")

        var xArray = []
        for (x = 0; x < width; x++) {
            var yArray = []
            for (y = 0; y < height; y++) {
                yArray[y] = 0
            }
            xArray[x] = yArray
        }
        return xArray
    }
}
