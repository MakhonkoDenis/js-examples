'use strict';

function greet() {
	var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';

	console.log(greeting + ' ' + name);
}

//greet( 'Hi', 'Stepan' );


function sum() {
	var sum = 0;

	for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
		values[_key] = arguments[_key];
	}

	values.forEach(function (value) {
		sum += value;
	});
	console.log(sum);
}

sum(5, 7, 2, 10);

function sum_2() {
	for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		values[_key2] = arguments[_key2];
	}

	var sum = values.reduce(function (prevValue, nextValue) {
		return prevValue + nextValue;
	});
	console.log(sum);
}

sum_2(5, 7, 2, 10);