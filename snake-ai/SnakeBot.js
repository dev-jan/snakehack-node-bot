var occupied = require('./OccupiedFields.js')
var gameBuilder = require('./GameBuilder.js')

module.exports = {

    gameArray,

    getNextMove: function (data) {

        gameArray = gameBuilder.createGameArray(data)

        occupied.getOccupiedFields(data)

        var response = {
            move: 'down', // one of: ['up','down','left','right']
            taunt: "Moving...." // optional, but encouraged!
        }
        return response;
    }
}