'use strict';

var _name, _name2, _person, _mutatorMap;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

var name = 'Stepan',
    age = '29',
    mail = 'stepan.87@gmail.com',
    person = (_person = {
	name: name,
	age: age,
	mail: mail,
	sayHello: function sayHello() {
		console.log('Hi my name is ' + this.name);
	}
}, _name = 'name', _mutatorMap = {}, _mutatorMap[_name] = _mutatorMap[_name] || {}, _mutatorMap[_name].get = function () {
	return this.name;
}, _name2 = 'name', _mutatorMap[_name2] = _mutatorMap[_name2] || {}, _mutatorMap[_name2].set = function (value) {
	this.name = value;
}, _defineEnumerableProperties(_person, _mutatorMap), _person);

console.log(person);
//person.sayHello();

function createCar(propertyName, value) {
	var _ref;

	return _ref = {}, _defineProperty(_ref, propertyName, value), _defineProperty(_ref, propertyName.toUpperCase(), value), _defineProperty(_ref, '_' + propertyName, value), _defineProperty(_ref, 'get_' + propertyName, function () {
		return this[propertyName];
	}), _ref;
}

//console.log( createCar( 'color', 'red' ) );