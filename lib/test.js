process.env.NODE_ENV = 'production';

var react = require('./react');
var jade = require('./jade');
var dot = require('./dot');
var ejs = require('./ejs');

console.time('react');
react.generateHtml();
console.timeEnd('react');

console.time('jade');
jade.generateHtml();
console.timeEnd('jade');

console.time('dot');
dot.generateHtml();
console.timeEnd('dot');

console.time('ejs');
ejs.generateHtml();
console.timeEnd('ejs');
