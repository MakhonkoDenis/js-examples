"use strict";

var PI = 3.14159,
    MATH = {
	PI: 3.14159
};

console.log(PI);
console.log(MATH.PI);

MATH.PI = 3.15;

console.log(MATH.PI);