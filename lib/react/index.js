var ReactDOMServer = require('react-dom/server');
var component = require('./component');

module.exports = {
  generateHtmlWithSimpleDivs: function () {
    ReactDOMServer.renderToStaticMarkup(component);
  }
};
