var matches = require("./data/matches");

module.exports = function(app) {

  app.get("/api/matches", function(req, res) {
    res.json(matches);
  });

  app.post("/api/matches", function(req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      matchDifference: Infinity
    };

    var userData = req.body;
    var userScores = userData.scores;
    var totalDifference;

    for (var i = 0; i < matches.length; i++) {
      var currentMatch = matches[i];
      totalDifference = 0;

      console.log(currentMatch.name);

      for (var j = 0; j < currentMatch.scores.length; j++) {
        var currentMatchScore = currentMatch.scores[j];
        var currentUserScore = userScores[j];

        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentMatchScore));
      }
      if (totalDifference <= bestMatch.matchDifference) {
        bestMatch.name = currentMatch.name;
        bestMatch.photo = currentMatch.photo;
        bestMatch.matchDifference = totalDifference;
      }
    }
    matches.push(userData);
    res.json(bestMatch);
  });
};
