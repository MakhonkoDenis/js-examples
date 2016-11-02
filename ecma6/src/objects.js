'use strict';

let name = 'Stepan',
	age = '29',
	mail = 'stepan.87@gmail.com',
	person = {
		name,
		age,
		mail,
		sayHello() {
			console.log( `Hi my name is ${this.name}` );
		},
		get name(){
			return this.name;
		},
		set name( value ){
			this.name = value;
		}
	};

console.log( person );
//person.sayHello();

function createCar( propertyName, value ) {
	return {
		[ propertyName ]: value,
		[ propertyName.toUpperCase() ]: value,
		[ '_' + propertyName ]: value,
		[ 'get_' + propertyName ]() {
			return this[ propertyName ];
		}
	}
}

//console.log( createCar( 'color', 'red' ) );
