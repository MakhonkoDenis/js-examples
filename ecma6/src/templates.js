'use strict';

function greet( name ) {
	console.log( `Hello ${name}` );
	console.log( typeof `Hello ${name}` );
	console.log( `Hello ${name}`.toUpperCase() );
}

greet( 'Denis' );


function createEmail( to, from, subject, message ) {
	console.log(`
		to: ${to}
		from: ${from}
		subject: ${subject}
		message: ${message}
		`
	);
}

createEmail('Stepan', 'Denis', 'Hello', 'My message');

function sum( x, y ) {
	console.log(`${x} + ${y} = ${ x + y }`);
	console.log(`${x} + ${y} = ${ parseInt( x ) + y }`);
	console.log('--------------------------------------');
}

sum( 8, 5 );
sum( '8', 5 );

let name = 'denis';
console.log( upperName`Hello ${name}` );

function upperName( literals, ...values  ) { //...values - будет массивом в котором может хранится неограниченное количество символов.
	return literals[0] + value.toUpperCase();
}
