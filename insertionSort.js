const books = require('./bookList');
// this way will get through the array and sort it by price in ascending order
function insertionSort(arrProducts) {
	for (let current = 0; current < arrProducts.length; current++) {
		while (current > 0 && arrProducts[current].price < arrProducts[previous].price) {
			let currentBook = arrProducts[current];
			let previousBook = arrProducts[current - 1];

			arrProducts[current] = previousBook;
			arrProducts[current - 1] = currentBook;

			current--;
		}
	}
	console.log(arrProducts);
}
