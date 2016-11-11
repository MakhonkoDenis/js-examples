'use strict';

let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'],
	js,
	php,
	py,
	rb;

[js, php, py, rb] = languages;

//let [js, php, py, rb] = languages;
// let [js, php, py, rb] = ['JavaScript', 'PHP', 'Python', 'Ruby'];
//console.log(js, php, py, rb);


let scores = [3, 4, 5],
	[low, mid, high, hegher] = scores,
	[low_2, , high_2] = scores,
	[low_3, ...rest] = scores,
	[low_4, mid_4, high_4, hegher_4 = 6 ] = scores;

console.log(low, mid, high, hegher);
console.log(low_4, mid_4, high_4, hegher_4);
console.log(low_2, high_2);
console.log(low_3, rest);

let scores_2 = [3, 4, [5, 6]],
	[low_5, mid_5, [high_5, hegher_5]] = scores_2;

console.log(low_5, mid_5, high_5, hegher_5);

let computeScore = ( [low, mid] ) => console.log(low, mid);

computeScore([5, 6]);

let getScores = () => [ 30, 40, 50 ];

let [low_6, mid_6, high_6] = getScores();

console.log(low_6, mid_6, high_6);

let yes = 'Yes',
	no = 'No';

[ yes, no ] = [ no, yes ]

console.log( `yes ${ yes }, no ${ no }` );
