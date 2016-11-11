'use strict';

var add = function add(x, y) {
	return x + y;
};
var square = function square(x) {
	return x * x;
};
var giveMyAnswer = function giveMyAnswer() {
	return 42;
};
var log = function log() {
	return console.log('log');
};
var multiply = function multiply(x, y) {
	var result = x * y;
	return result;
};
var getPerson = function getPerson() {
	return { name: 'Stepan' };
};

(function () {
	return console.log('IIFE');
})();

/*console.log( add( 2, 5 ) );
console.log( square( 5 ) );
console.log( giveMyAnswer() );
log();
console.log( multiply( 2, 5 ) );
console.log( getPerson() );*/

var numbers = [1, 2, 3, 4, 5, 6],
    sum = 0,
    squared = numbers.map(function (num) {
	return num * num;
});

numbers.forEach(function (num) {
	return sum += num;
});

//console.log(sum);
//console.log(squared);

var person = {
	name: 'Max',
	greet: function greet() {
		console.log('Hello, my name is ' + person.name);
		console.log(undefined); //this будет указывать на объект window
	},
	greet_time: function greet_time() {
		var _this = this;

		setTimeout(function () {
			console.log('Hello, my name is ' + _this.name);
			console.log(_this); //this будет указывать на объект person
		}, 10);
	}
};

person.greet();
person.greet_time();