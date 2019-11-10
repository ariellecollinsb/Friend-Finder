// var characters = require("../data/characters.js")


// module.exports = function(app) {

//     app.post('/api/characters.js', function(req, res) {
//         var bestMatch = {
//                 name: "",
//                 photo: "",
//                 characterDifference: Infinity
//             },
//             userData = req.body;

//         var userScores = userData.scores;
//         var totalDifference;
//         for (var i = 0; i < characters.length; i++) {
//             var currentCharacter = characters[i];
//             totalDifference = 0;
//             for (var j = 0; j < currentFriend.scores.length; j++) {
//                 var currentCharacterScore = currentCharacter.scores[j];
//                 var currentUserScore = userScores[j];
//                 totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentCharacterScore));
//             }
//             if (totalDifference <= bestMatch.characterDifference) {
//                 bestMatch.name = currentCharacter.name;
//                 bestMatch.photo = currentFriend.photo;
//                 bestMatch.characterDifference = totalDifference;
//             }
//         };
//         characters.push(userData)
//         res.json(bestMatch);

//     });
// }


var characters = require("../data/characters.js");

module.exports = function (app) {

    //json for current friends list
    app.get("/api/characters", function (req, res) {
        res.json(friends);
    })


    //posting a new user and returning a match
    app.post("/api/characters", function (req, res) {
        var newCharacter = req.body;

        var closestScore = 50;
        var closestCharacterID = 0;

        characters.forEach(function (character, index) {
            var compareArr = character.scores;
            var characterScore = 0;
            for (var i = 0; i < compareArr.length; i++) {
                characterScore += Math.abs(compareArr[i] - newCharacter.scores[i]);
            }
            if (characterScore < closestScore) {
                closestScore = characterScore;
                closestCharacterID = index;
            }
        });

        characters.push(newCharacter);

        res.json(characters[closestCharacterID]);
    })

}