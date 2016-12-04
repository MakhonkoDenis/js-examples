'use strict';

let men = ['Shin', 'Behaart', 'Cheh'];


for ( let man of men ) {
	console.log( man );
}

let iterator = men[Symbol.iterator]();

/*onsole.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());*/

//console.log(iterator.length);

let next = iterator.next();

while ( ! next.done ) {
	console.log( next.value );
	next = iterator.next();
}

let randomGenerater = {
		generate(){
			return this[ Symbol.iterator ]()
		},
		[ Symbol.iterator ]() {
			let count = 0;
			return {
				next(){
					let value = Math.ceil( Math.random() * 100) ,
						done = count > 10 ;

						count +=1;

					return { value, done }
				}
			}
		}
}

let random = randomGenerater.generate();

//console.log(random.next().value);
/*for ( let random of randomGenerater ) {
	console.log(random);
}*/

class ArrayIterator {
	constructor( array ) {
		this.array = array;
		this.index = 0;
	}

	next(){
		let result = { value: undefined, done: true }

			if ( this.index < this.array.length ) {
				result.value = this.array[ this.index ];
				result.done = false;

				this.index++;
			}

		return result;
	}
}


class TackList {
	constructor() {
		this.tasks = [];
	}

	addTacks(...tasks) {
		this.tasks = this.tasks.concat( tasks );
	}

	[ Symbol.iterator ]() {
		return new ArrayIterator( this.tasks )
	}
}

let tasklist = new TackList();

tasklist.addTacks( 'Задача 1', 'Задача 2', 'Задача 3' );

for ( let task of tasklist ) {
	console.log(task);
}
