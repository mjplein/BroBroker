
var broData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        console.log(broData);
        return res.json(broData);

    });

    app.post("/api/friends", function (req, res) {
        // var newBro = req.body;
        // var matchedBro;

        // for (var i = 0; i <)
        //     if (broData.length < 5) {
        //     tableData.push(req.body);
        //     res.json(true);
        // }
        // else {
        //     res.json(false);
        // }
        // });

        broData.push(req.body);
        res.json(matchedBro);

        // app.post("/api/clear", function() {

        //     broData = [];
        //     console.log(broData);
    });
};
