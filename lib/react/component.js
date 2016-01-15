var React = require('react'),
  DOM = React.DOM, div = DOM.div, body = DOM.body;

var ChildComponent = React.createFactory(React.createClass({
  render: function() {
    return div(null, this.props.value);
  }
}));

var ChildComponentTop = React.createFactory(React.createClass({
  render: function() {
    return ChildComponent({value: this.props.value});
  }
}));

var ParentComponent =  React.createFactory(React.createClass({
  render: function() {
    var divs = [];
    for (var i = 0; i < 1000; i++) {
      divs.push(ChildComponentTop({value: i}));
    }
    return div(null, divs);
  }
}));

module.exports =  body(null, ParentComponent());
