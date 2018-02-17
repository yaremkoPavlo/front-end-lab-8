function getFilteredArray (arr, callback) {
	let result = [];
	forEach(arr, (item) => {
			if (callback(item)) {
				result.push(item);
			}
		})
	return result;
}
