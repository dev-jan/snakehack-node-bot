var express = require('express')
var router  = express.Router()

// Handle POST request to '/start'
router.post('/start', function (req, res) {
  // NOTE: Do something here to start the game

  // Response data
  var data = {
    color: "#ff3030",
    name: "'; DROP DATABASE Snake",
    head_url: "https://openclipart.org/image/2400px/svg_to_png/211479/Simple-Image-Not-Found-Icon.png",
    taunt: "Let's do thisss thang!", // optional, but encouraged!
  }

  return res.json(data)
})

// Handle POST request to '/move'
router.post('/move', function (req, res) {
  // NOTE: Do something here to generate your move

  // Response data
  var data = {
    move: 'down', // one of: ['up','down','left','right']
    taunt: 'Outta my way, snake!', // optional, but encouraged!
  }

  return res.json(data)
})

module.exports = router
