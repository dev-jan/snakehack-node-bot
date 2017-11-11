var express = require('express')
var router  = express.Router()
var snakeBot = require('../snake-ai/SnakeBot.js')

// called when a game is setup
router.post('/start', function (req, res) {
  var data = {
    color: "#ff303044",
    name: "'; DROP DATABASE Snake",
    head_url: "https://i.imgur.com/NRGrAxP.png",
    head_type: "tongue",
    tail_type: "small-rattle",
    taunt: "Something..."
  }
  return res.json(data)
})

// called on every move
router.post('/move', function (req, res) {
  console.log(req.body)

  var response = snakeBot.calculateMoveResponse(req.body)

  return res.json(response)
})

module.exports = router
