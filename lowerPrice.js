const books = require('./bookList');

function lowerPrice(arrProducts, index) {
	let cheaper = 0;

	for (let current = 0; current < books.length; current++) {
		if (books[current].price < books[cheaper].price) {
			cheaper = current;
		}
	}
	return cheaper;
}

module.exports = lowerPrice;
