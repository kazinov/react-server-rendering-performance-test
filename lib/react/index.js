var ReactDOMServer = require('react-dom/server');
var component = require('./component');

module.exports = {
  generateHtml: function () {
    ReactDOMServer.renderToStaticMarkup(component);
  }
};
