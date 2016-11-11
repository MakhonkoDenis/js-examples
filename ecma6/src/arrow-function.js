'use strict';

let add = ( x, y ) => x + y;
let square = x => x * x;
let giveMyAnswer = () => 42;
let log = () => console.log('log');
let multiply = ( x, y ) => {
	let result = x * y;
	return result;
}
let getPerson = () => ( {name: 'Stepan'} );

( () => console.log('IIFE') )();

/*console.log( add( 2, 5 ) );
console.log( square( 5 ) );
console.log( giveMyAnswer() );
log();
console.log( multiply( 2, 5 ) );
console.log( getPerson() );*/

let numbers = [1, 2, 3, 4, 5, 6],
	sum = 0,
	squared = numbers.map( num => num * num );

numbers.forEach( num => sum += num );

//console.log(sum);
//console.log(squared);

let person = {
	name: 'Max',
	greet: () => {
		console.log(`Hello, my name is ${person.name}`)
		console.log(this)//this будет указывать на объект window
	},
	greet_time: function() {
		setTimeout(() => {
			console.log(`Hello, my name is ${this.name}`)
			console.log(this)//this будет указывать на объект person
		}, 10);
	}
}

person.greet();
person.greet_time();
