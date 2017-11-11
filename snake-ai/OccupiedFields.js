module.exports = {
    getOccupiedFields: function (data) {

        // the game board starts with coordinates 0,0 in the top left corner
        var game = []

        console.log(data);
        data.snakes.forEach(function(snake) {
            snake.coords.forEach(function(coord) {
                game[coord[0], coord[1]] = 1
                console.log(game)
            }, this)
        }, this)

        return game
    }
}