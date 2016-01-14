var react = require('./react');

console.time('react, 1000 divs');
react.generateHtmlWithSimpleDivs();
console.timeEnd('react, 1000 divs');
