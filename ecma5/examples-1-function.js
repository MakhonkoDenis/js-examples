var func = function ( arg1, arg2) {
	console.log( this ); // window
	return arg1 + arg2;
};

console.log( func( 2, 8 ) );

//------------------------------------------------------------------------
var app = {
	//public method
	func: function ( arg1, arg2) {
		console.log( this ); // object app
		return arg1 + arg2;
	};


console.log( app.func( 2, 8 ) );

//------------------------------------------------------------------------
var app2 = ( function(){
	//privet method
	var privateFunc = function(){
		console.log('privateFunc');
	}
	//public method
	return {
		func: function ( arg1, arg2) {
			return arg1 + arg2;
		}
		//call privete function
		publicFunc: privateFunc
	}
}() );

console.log( app2.func( 2, 8 ) );
console.log( app2.publicFunc() );

//------------------------------------------------------------------------
var app3 = function ( arg1, arg2) {
	return arg1 + arg2;
	},
	myArray = [ 3, 5 ],
	sum = app3.aplay( null, myArray );

console.log( sum );

//------------------------------------------------------------------------
