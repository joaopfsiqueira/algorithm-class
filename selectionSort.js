// sort is a function that takes an array of numbers and returns a sorted array.
const books = require('./bookList');
const lowerPrice = require('./lowerPrice');
for (let current = 0; current < books.length; current++) {
	let cheaper = lowerPrice(books, current);
	let aux = books[current];
	let cheaperBook = books[cheaper];

	books[current] = cheaperBook;
	books[cheaper] = aux;
}

console.log(books);
