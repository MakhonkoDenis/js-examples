'use strict';

function applyForVisa( document, resolve, reject ) {
	console.log('Обработка документа.');

	let promise = new Promise( ( resolve, reject ) => {
		setTimeout( () => {
			Math.random() > .5 ? resolve( {} ) : reject('Отказ') ;
		}, 2000);
	} );

	return promise;

}

function bookHotel( visa ) {
	console.log( 'Бронируем отель.' );
	console.log( visa );
}

function buyTickets(argument) {
	console.log( 'Покупаем билеты.' );
}

applyForVisa( {} )
	.then(
		visa => {
			console.info( 'Виза получена.' );
			return visa;
		}
	)
	.then( bookHotel )
	.then( buyTickets )
	.catch( error => console.error(error) )
	.then( error => console.info('Дополнительное действие.') );
