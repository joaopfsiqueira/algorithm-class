const books = require('./bookList');

function lowerPrice(arrProducts, index) {
	let cheaper = index;

	for (let current = index; current < arrProducts.length; current++) {
		if (arrProducts[current].price < arrProducts[cheaper].price) {
			cheaper = current;
		}
	}
	return cheaper;
}

module.exports = lowerPrice;
