'use strict';

function* generate() {
	console.log('Start');

	yield 1;

	console.log('Finish');

	yield 2;

	console.log('Finished');
}

let iterator = generate();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


function* range( start, end ) {
	let current = start;

	while(current <= end){
		yield current++;
	}
}

for ( let num of range( 1, 10 ) ) {
	console.log( num );
}


function* generate2() {
	let result = 1 + ( yield );

	console.log (result );
}
let iterator2 = generate2();

iterator2.next();
iterator2.next(2);

// yield* - * оператор делгирования. может вызывать функции и обекты.
// iterator2.return() - досрочно останавливает генератор.
// iterator2.throw( objecy ) - передает в генератор данные.
