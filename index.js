const books = require('./bookList');

let cheaper = 0;

for (let current = 0; current < books.length; current++) {
	if (books[current].price < books[cheaper].price) {
		cheaper = current;
	}
}

console.log(cheaper); // Output: 1
