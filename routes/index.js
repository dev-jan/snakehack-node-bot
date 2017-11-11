var express = require('express')
var router  = express.Router()

// called when a game is setup
router.post('/start', function (req, res) {
  var data = {
    color: "#ff3030",
    name: "'; DROP DATABASE Snake",
    head_url: "https://i.imgur.com/AOc1DjF.png",
    head_type: "tongue",
    tail_type: "small-rattle",
    taunt: "Something..."
  }
  return res.json(data)
})

// called on every move
router.post('/move', function (req, res) {
  console.log(req.body)

  var data = {
    move: 'down', // one of: ['up','down','left','right']
    taunt: "Moving...." // optional, but encouraged!
  }

  return res.json(data)
})

module.exports = router
