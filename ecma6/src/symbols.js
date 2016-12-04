'use strict';

let symbol = Symbol( 'name' ),
	symbol2 = Symbol( 'name' ),
	symbol3 = Symbol.for( 'name' );
	name = Symbol.keyFor( symbol );

console.log( symbol, symbol2 );
console.log( symbol === symbol2 );
console.log( symbol3 === symbol3 );
console.log( symbol2 );

let email = Symbol(),
	user = {
		username: 'r2d2',
		[ Symbol.for( 'password' ) ]: 'c3p0',
		[ email ]: 'adad@asdad.com'
	},
	password = user[ Symbol.for( 'password' ) ]

console.log( user.password );
console.log( password );
console.log( Object.getOwnPropertySymbols( user ) );
