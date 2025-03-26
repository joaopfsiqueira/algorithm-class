function logItems(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}

	for (let j = 0; j < n; j++) {
		console.log(j);
	}
}

logItems(3);

// Time Complexity: O(n + n) => O(2n) => O(n)
