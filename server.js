var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var port = process.env.PORT || 3001;

// For serving of static files like css
app.use(express.static(__dirname + "/app/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(port, function() {
	console.log("App listening on PORT: " + port);
});
