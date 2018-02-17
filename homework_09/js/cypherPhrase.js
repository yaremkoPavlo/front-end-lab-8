function cypherPhrase(obj, str) {
	let strToArr = str.split("");
	strToArr = getTransformedArray(strToArr, (item) => obj[item] || item);
	return strToArr.join('');
}
