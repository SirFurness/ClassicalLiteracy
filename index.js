var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

var server = app.listen(8081, function () {
    var port = server.address().port;

    console.log("listening on port %s", port);
})
