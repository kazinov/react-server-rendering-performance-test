var express = require('express');
var app = express();
var generateBodyMarkup = require('./generateBodyMarkup');

app.use(express.static(__dirname + '/../build'));

app.get('/', function (req, res) {
  var props = {
    items: [
      'Item 0',
      'Item 1',
      'Item 2',
      'Item 3',
    ]
  };

  res.send(generateBodyMarkup(props));
});

app.listen(4000, function () {
  console.log('Listening on port 4000');
})
