var characters = require("../data/characters")


module.exports = function(app) {



    app.get("/app/data/friends", function(req, res) {
        res.json(data);
    });

    app.post("/app/data/friends", function(req, res) {
        if (err) res.status(500).end();
        tableData.push(req.body);
        res.json(true);
    });

};


module.exports = function(app) {

    app.post('/api/characters', function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            characterDifference: Infinity
        }

        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference;


        for (var i = 0; i < characters.length; i++) {
            var currentCharacter = characters[i];
            totalDifference = 0;
            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentCharacterScore = currentCharacter.scores[j];
                var currentUserScore = userScores[j];
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentCharacterScore));

            }
            if (totalDifference <= bestMatch.characterDifference) {
                bestMatch.name = currentCharacter.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.characterDifference = totalDifference;
            }
        }
        characters.push(userData)
        res.json(bestMatch);

    })
}