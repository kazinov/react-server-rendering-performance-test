var dots = require("dot");
var fs = require('fs');

var template = fs.readFileSync(__dirname + '/template.dot', 'utf8');

module.exports = {
  generateHtml: function () {
    dots.template(template)();
  }
};
