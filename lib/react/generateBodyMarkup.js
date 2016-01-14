var React = require('react'),
  ReactDOMServer = require('react-dom/server'),
  DOM = React.DOM, body = DOM.body, div = DOM.div;

module.exports = function (component) {
  return ReactDOMServer.renderToStaticMarkup(body(null,
    div({
      dangerouslySetInnerHTML: {
        __html: ReactDOMServer.renderToString(component())
      }
    })
  ));
};
