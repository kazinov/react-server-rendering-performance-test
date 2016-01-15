var React = require('react'),
  DOM = React.DOM, div = DOM.div;//, button = DOM.button, ul = DOM.ul, li = DOM.li

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

module.exports = React.createClass({
  render: function() {
    var divs = [];
    for (var i = 0; i < 1000; i++) {
      divs.push(ChildComponentTop({value: i}));
    }
    return div(null, divs);
  }
});


//return div(null,
//
//  button({onClick: this.handleClick, disabled: this.state.disabled}, 'Add Item'),
//
//  ul({children: this.state.items.map(function(item) {
//    return li(null, item)
//  })})
