var gameObjects = require('./GameObjects.js')

module.exports = {

    createGameArray: function(data) {

        var gameArray = createArray(data.width, data.height)

        // put snakes on game array
        data.snakes.forEach(function(snake) {
            snake.coords.forEach(function(coord) {
                game[coord[0], coord[1]] = gameObjects.EnemySnakeBody
                console.log(game)
            }, this)
        }, this)

        return gameArray
    },

    createArray: function(length) {
        var arr = new Array(length || 0),
            i = length;

        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while(i--) arr[length-1 - i] = createArray.apply(this, args);
        }

        return arr;
    }
}
