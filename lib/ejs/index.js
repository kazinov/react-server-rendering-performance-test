var ejs = require('ejs');
var fs = require('fs');

var template = fs.readFileSync(__dirname + '/template.ejs', 'utf8');

module.exports = {
  generateHtmlWithSimpleDivs: function () {
    var html = ejs.render(template);
  }
};
