var jade = require('jade');
var fs = require('fs');

var options = { pretty: true, locals: {} };

var simpleDivsTemlate = fs.readFileSync(__dirname + '/simple-divs.jade', 'utf8');


module.exports = {
  generateHtmlWithSimpleDivs: function () {
    var fn = jade.compile(simpleDivsTemlate, options);
  }
};
