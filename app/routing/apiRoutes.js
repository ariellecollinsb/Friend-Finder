
var characterList = require("../../app/data/friends")


module.exports = function (app) {



  app.get("/app/data/friends", function (req, res) {
    res.json(data);
  });

  app.post("/app/data/friends", function (req, res) {
    if () {
      tableData.push(req.body);
      res.json(true);
    }
   
};


// Your apiRoutes.js file should contain two routes:

// A GET route with the url / api / friends.
// This will be used to display a JSON of all possible friends.
// A POST routes / api / friends.This will be used to handle 
// incoming survey results.This route will also be used to handle 
// the compatibility logic.