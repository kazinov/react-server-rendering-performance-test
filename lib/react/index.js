var React = require('react');
var generateBodyMarkup = require('./generateBodyMarkup');
var simpleDivs = React.createFactory(require('./simple-divs'))

module.exports = {
  generateHtmlWithSimpleDivs: function () {
    generateBodyMarkup(simpleDivs);
  }
};
