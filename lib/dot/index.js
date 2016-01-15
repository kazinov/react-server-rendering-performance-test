var dots = require("dot");
var fs = require('fs');

var template = fs.readFileSync(__dirname + '/template.dot', 'utf8');

module.exports = {
  generateHtmlWithSimpleDivs: function () {
    dots.template(template)();
  }
};
