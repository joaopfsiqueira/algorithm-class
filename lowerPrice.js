const books = require('./bookList');

function lowerPrice(arrProducts, index) {
	let cheaper = index;

	for (let current = 0; current < arrProducts.length; current++) {
		if (arrProducts[current].price < arrProducts[cheaper].price) {
			cheaper = current;
		}
	}
	return cheaper;
}

module.exports = lowerPrice;
