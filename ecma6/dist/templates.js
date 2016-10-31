'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
	console.log('Hello ' + name);
	console.log(_typeof('Hello ' + name));
	console.log(('Hello ' + name).toUpperCase());
}

greet('Denis');

function createEmail(to, from, subject, message) {
	console.log('\n\t\tto: ' + to + '\n\t\tfrom: ' + from + '\n\t\tsubject: ' + subject + '\n\t\tmessage: ' + message + '\n\t\t');
}

createEmail('Stepan', 'Denis', 'Hello', 'My message');

function sum(x, y) {
	console.log(x + ' + ' + y + ' = ' + (x + y));
	console.log(x + ' + ' + y + ' = ' + (parseInt(x) + y));
	console.log('--------------------------------------');
}

sum(8, 5);
sum('8', 5);

var name = 'denis';
console.log(upperName(_templateObject, name));

function upperName(literals) {
	//...values - будет массивом в котором может хранится неограниченное количество символов.
	return literals[0] + value.toUpperCase();
}