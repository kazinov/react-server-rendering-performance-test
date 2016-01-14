var React = require('react'),
  ReactDOMServer = require('react-dom/server'),
  DOM = React.DOM, body = DOM.body, div = DOM.div, script = DOM.script,
  App = React.createFactory(require('./App'));

module.exports = function (props) {
  return ReactDOMServer.renderToStaticMarkup(body(null,
    div({
      id: 'content', dangerouslySetInnerHTML: {
        __html: ReactDOMServer.renderToString(App(props))
      }
    }),

    script({
      dangerouslySetInnerHTML: {
        __html: 'var APP_PROPS = ' + JSON.stringify(props) + ';'
      }
    }),

    script({src: '/bundle.js'})
  ));
};
