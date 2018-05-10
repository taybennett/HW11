
var path = require("path");


module.exports = function(app) {-

  app.get("/questions.html", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/questions.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

};
