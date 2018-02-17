function getTransformedArray(arr, callback) {
	let result = [];
	forEach(arr, (item) => { result.push(callback(item)); })
	return result;
}
