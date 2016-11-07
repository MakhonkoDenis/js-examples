'use strict';

class Task{
	constructor( title = Task.getDefaultTitle() ) {
		this.title = title;
		this._done = false ;

		Task.count +=1;
		//console.log('constructor');
	}

	get done(){
		return ( true === this._done ) ? 'Задача выполнена.' : 'Задача ещё не выполнена.' ;
	}

	set done( value ){
		if ( undefined !== value && 'boolean' === typeof value ) {
			this._done = value ;
		} else {
			console.log('Не верный тип данных!');
		}
	}

	complete() {
		this.done = true;
		console.log(`Задача "${this.title}" выполнена`);
	}
	// Staric method
	static getDefaultTitle(){
		return 'Задача'
	}
}
Task.count = 0; // Staric variable

let task = new Task( 'Новая задача.' ),
	task2 = new Task();


//console.log(Task.count);
//console.log(task2.title);
//console.log( typeof tesk );
//console.log( tesk instanceof Task );

console.log(task2.done, task2._done);
task2.complete();
console.log(task2.done, task2._done);
