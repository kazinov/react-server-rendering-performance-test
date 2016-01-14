var express = require('express');
var app = express();
var React = require('react');

var generateBodyMarkup = require('./generateBodyMarkup');
var Divs = React.createFactory(require('./Divs'))

app.use(express.static(__dirname + '/../build'));

app.get('/divs', function (req, res) {
  res.send(generateBodyMarkup(Divs));
});

app.listen(4000, function () {
  console.log('Listening on port 4000');
})
