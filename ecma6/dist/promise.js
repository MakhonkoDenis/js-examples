'use strict';

function applyForVisa(document, resolve, reject) {
	console.log('Обработка документа.');

	var promise = new Promise(function (resolve, reject) {
		setTimeout(function () {
			Math.random() > .5 ? resolve({}) : reject('Отказ');
		}, 2000);
	});

	return promise;
}

function bookHotel(visa) {
	console.log('Бронируем отель.');
	console.log(visa);
}

function buyTickets(argument) {
	console.log('Покупаем билеты.');
}

applyForVisa({}).then(function (visa) {
	console.info('Виза получена.');
	return visa;
}).then(bookHotel).then(buyTickets).catch(function (error) {
	return console.error(error);
}).then(function (error) {
	return console.info('Дополнительное действие.');
});