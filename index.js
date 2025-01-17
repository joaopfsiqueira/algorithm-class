const booksPrices = [25, 15, 30, 50, 45, 20];

let cheaper = 0;

for (let current = 0; current < booksPrices.length; current++) {
	if (booksPrices[current] < booksPrices[cheaper]) {
		cheaper = current;
	}
}

console.log(cheaper); // Output: 1
