function decypherPhrase(obj, str) {
	let reversObj = {};
	for (let key in obj) {
		reversObj[obj[key]] = key;
	}
	return cypherPhrase(reversObj, str);
}
