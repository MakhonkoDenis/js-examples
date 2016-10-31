var car = {
		color: 'red'
	},
	Funct = function ( name ) {
		this.name = name;
	},
	man = new Funct( 'denis' );

console.log( man.prototype );

//--------------------------------------------------------------------------

var newObj = {
	name: 'Denis',
	test: function(){
		console.log('test');
	}
}

man.prototype = newObj;

//--------------------------------------------------------------------------

var animal = {
		canRun: true
	},
	Wolf = function(){
		this.name = 'Волк';
	},
	Grey = function(){
		this.color = 'Серый';
	},
	Black = function(){
		this.color = 'Черный';
	};

Wolf.prototype = animal;

var wolfy = new Wolf();

Grey.prototype = wolfy;
Black.prototype = wolfy;

var wolfyGray = new Grey(),
	wolfyBlack = new Black();

console.log( wolfy );
console.log( wolfyGray );
console.log( wolfyBlack );
