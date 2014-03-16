var fs = require('fs');
var read = fs.readFileSync;
var text = read(__dirname + '/test.txt', 'utf-8');
var align = require('../');

var out = align(text, 80);

console.log(out);
