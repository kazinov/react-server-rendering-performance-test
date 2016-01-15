var ejs = require('ejs');

var simpleDivs =
  '<!DOCTYPE html> \
  <html> \
    <head lang="en"> \
      <meta charset="UTF-8"> \
      <title></title> \
    </head> \
    <body> \
      <div> \
      <% for(var i=0; i<1000; i++) {%> \
      <div><%= i %></div> \
      <% } %> \
      </div> \
    </body> \
  </html> \
  ';


module.exports = {
  generateHtmlWithSimpleDivs: function () {
    var html = ejs.render(simpleDivs);
    //console.log(html);
  }
};
