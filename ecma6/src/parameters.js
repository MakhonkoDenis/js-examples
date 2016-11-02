'use strict';

function greet( greeting = 'Hello', name = 'friend' ) {
	console.log( `${greeting} ${name}` );
}

//greet( 'Hi', 'Stepan' );


function sum( ...values ) {
	let sum = 0;
	values.forEach(
		function( value ){
			sum += value;
		}
	)
	console.log(sum);
}

sum( 5, 7, 2, 10 );

function sum_2( ...values ) {
	let sum = values.reduce( function ( prevValue, nextValue ) {
		return prevValue + nextValue;
	});
	console.log(sum);
}

sum_2( 5, 7, 2, 10 );
