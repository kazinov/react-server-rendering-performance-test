process.env.NODE_ENV = 'production';

var react = require('./react');
var jade = require('./jade');
var dot = require('./dot');
var ejs = require('./ejs');

console.time('react');
react.generateHtmlWithSimpleDivs();
console.timeEnd('react');

console.time('jade');
jade.generateHtmlWithSimpleDivs();
console.timeEnd('jade');

console.time('dot');
dot.generateHtmlWithSimpleDivs();
console.timeEnd('dot');

console.time('ejs');
ejs.generateHtmlWithSimpleDivs();
console.timeEnd('ejs');
