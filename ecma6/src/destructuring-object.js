'use strict';
let person = {
		firstName: 'Stepan',
		lastName: 'Petrovich',
		social: {
			facebook: 'stepan',
			twitter: 'petrovich-87'
		}
	},
	{ firstName, lastName, social: { facebook: fb }, age = 29 } = person, //название переменных и свойст должны совпадать
	{ ['first' + 'Name']: first, lastName: last } = person; //измененные имена переменных

console.log(firstName, lastName, age);
console.log(first, last);
//console.log(facebook);
console.log(fb);

let post = ( url, { data: { firstName, lastName }, cache} ) => console.log(firstName, lastName, cache);
//let post = ( url, {data, cache} ) => console.log(data, cache);

let result = post( 'api', { data: person, cache: false } )

let getUserInfo = () => {
		return person;
	},
	{ personFirstName, social: { twitter } } = getUserInfo();

console.log( firstName, twitter );
