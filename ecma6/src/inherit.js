'use strict';

class Task{
	constructor( title ) {
		this.title = title;
		this.done = false;

		console.log('Создание задачи.');
	}

	complete(){
		this.done = true;
		console.log(`Задача ${ this.title } выполнена.`);
	}
}

class SubTask extends Task{
	constructor( title, parent ) {
		super( title );//вызов радительского конструкторы, должен вызыватся сразу же в начале конструктора
		this.parent = parent;
	}
	complete(){
		super.complete();
		console.log(`Задача ${ this.title } выполнена на 100%.`);
	}
}

let task = new Task( 'Task' ),
	subtask = new SubTask( 'SubTask', task );

task.complete();
subtask.complete();
console.log(task);
console.log(subtask);
