module.exports = {

    getRandomMessage: function() {

        var messageIndex = Math.floor((Math.random() * 10));

        var messages = [
            "sneeeeeekkk....",
            "Never don't give up!",
            "=D",
            "; DROP DATABASE",
            "Snake, we have a problem!",
            "Why are we still here, just to suffer...",
            "HELP ME! OMG WTF!!!",
            "beeep boop",
            "Target aquired..",
            "P I Z Z A"
        ]

        return messages[messageIndex]
    }
}