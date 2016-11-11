'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var languages = ['JavaScript', 'PHP', 'Python', 'Ruby'],
    js = void 0,
    php = void 0,
    py = void 0,
    rb = void 0;

//let [js, php, py, rb] = languages;
// let [js, php, py, rb] = ['JavaScript', 'PHP', 'Python', 'Ruby'];
//console.log(js, php, py, rb);


js = languages[0];
php = languages[1];
py = languages[2];
rb = languages[3];
var scores = [3, 4, 5],
    low = scores[0],
    mid = scores[1],
    high = scores[2],
    hegher = scores[3],
    low_2 = scores[0],
    high_2 = scores[2],
    low_3 = scores[0],
    rest = scores.slice(1),
    low_4 = scores[0],
    mid_4 = scores[1],
    high_4 = scores[2],
    _scores$ = scores[3],
    hegher_4 = _scores$ === undefined ? 6 : _scores$;


console.log(low, mid, high, hegher);
console.log(low_4, mid_4, high_4, hegher_4);
console.log(low_2, high_2);
console.log(low_3, rest);

var scores_2 = [3, 4, [5, 6]],
    low_5 = scores_2[0],
    mid_5 = scores_2[1],
    _scores_2$ = _slicedToArray(scores_2[2], 2),
    high_5 = _scores_2$[0],
    hegher_5 = _scores_2$[1];


console.log(low_5, mid_5, high_5, hegher_5);

var computeScore = function computeScore(_ref) {
	var _ref2 = _slicedToArray(_ref, 2),
	    low = _ref2[0],
	    mid = _ref2[1];

	return console.log(low, mid);
};

computeScore([5, 6]);

var getScores = function getScores() {
	return [30, 40, 50];
};

var _getScores = getScores(),
    _getScores2 = _slicedToArray(_getScores, 3),
    low_6 = _getScores2[0],
    mid_6 = _getScores2[1],
    high_6 = _getScores2[2];

console.log(low_6, mid_6, high_6);

var yes = 'Yes',
    no = 'No';

var _ref3 = [no, yes];
yes = _ref3[0];
no = _ref3[1];


console.log('yes ' + yes + ', no ' + no);