var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public/css"));
// Sets up the Express app to handle data parsing

require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

//Sets up the view engine to ejs
app.set("view engine", "ejs");

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
