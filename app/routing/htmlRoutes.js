var path = require("path");

module.exports = function (app) {
    // Serves survey.html
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // Serves home.html as default html
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};