var MyConstruct = function ( name ) {
	//private
	var age = 25;
	//public
	this.name = name;
	this.canSpeak = true;
	this.sayHello = function () {
		return 'Привет! Меня зовут, ' + this.name + '.'
	}
}

var denis = new MyConstruct( 'Денис' );

console.log( denis.name );
console.log( denis.canSpeak );
console.log( denis.sayHello );

//------------------------------------------------------------------------
var MyConstruct2 = function ( name ) {
	this.name = name;
};

MyConstruct2.prototype.sayHello = function(first_argument) {
	return 'Привет! Меня зовут, ' + this.name + '.'
};

//------------------------------------------------------------------------
var MyConstruct3 = {
		name:null,
		init: function ( name ) {
			this.name = name;
		}
	},
	stepan = new MyConstruct3.init( 'Ступан' );

console.log( MyConstruct3.constructor );

