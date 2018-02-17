function decypherPhrase(obj, str) {
	for (let key in obj) {
		let rkey = key,
			rval = obj[key];
		key = rval;
		obj[key] = rkey;
	}
	return cypherPhrase(obj, str);
}
