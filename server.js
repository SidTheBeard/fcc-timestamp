var express = require("express");
var app = express();

app.set("views", __dirname, "./templates");

app.set("view engine", "pug");

app.get("*", function(req, res) {
    res.writeHead(200, {
        "Content-Type" : "text/html"
    });
});

app.get("/", function(req, res) {
    res.send("Hello World!");
});

app.listen(8080, function() {
    console.log('App running on port 8080');
});