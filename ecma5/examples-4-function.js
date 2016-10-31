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
//------------------------------------------------------------------------------------------------
var wolfyPrototipe = Object.getPrototipeOf( wolfyGray ); //not a worked in IE8

wolfyPrototipe.name = 'Пёс';

wolfyGray.hasOwnProperty('color'); // Проверяет является ли своство у обекта личным

//------------------------------------------------------------------------------------------------
var car = {
	color:red
};

var newCar = Object.create( car );

console.log( newCar );


function inherit( proto ) {
	function createObject(){};

	createObject.prototype = ptoro;

	return new createObject;
}

var newCar2 = inherit( car );

console.log( newCar );
