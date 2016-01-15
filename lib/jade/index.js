var jade = require('jade');
var fs = require('fs');

var template = fs.readFileSync(__dirname + '/template.jade', 'utf8');

var options = { pretty: true, locals: {} };

module.exports = {
  generateHtml: function () {
    var fn = jade.compile(template, options);
  }
};
