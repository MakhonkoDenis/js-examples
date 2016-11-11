'use strict';

var person = {
	firstName: 'Stepan',
	lastName: 'Petrovich',
	social: {
		facebook: 'stepan',
		twitter: 'petrovich-87'
	}
},
    firstName = person.firstName,
    lastName = person.lastName,
    fb = person.social.facebook,
    _person$age = person.age,
    age = _person$age === undefined ? 29 : _person$age,
    first = person['first' + 'Name'],
    last = person.lastName; //измененные имена переменных

console.log(firstName, lastName, age);
console.log(first, last);
//console.log(facebook);
console.log(fb);

var post = function post(url, _ref) {
	var _ref$data = _ref.data,
	    firstName = _ref$data.firstName,
	    lastName = _ref$data.lastName,
	    cache = _ref.cache;
	return console.log(firstName, lastName, cache);
};
//let post = ( url, {data, cache} ) => console.log(data, cache);

var result = post('api', { data: person, cache: false });

var getUserInfo = function getUserInfo() {
	return person;
},
    _getUserInfo = getUserInfo(),
    personFirstName = _getUserInfo.personFirstName,
    twitter = _getUserInfo.social.twitter;


console.log(firstName, twitter);