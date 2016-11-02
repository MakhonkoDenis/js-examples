'use strict';

let browsers = ['Chrom', 'Firefox', 'Edge', 'Safari', 'Opera'];
console.log(browsers);

for ( let index in browsers ) {
	console.log( index );
}

for ( let value of browsers ) {
	console.log( value );
}
