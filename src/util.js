const publicKey = '7f3b197048cb5ec07241bb46eaefd616';
const privateKey = '0428f8e5262c7fa84ed2332f470ef2f5f86cbfa0';
const crypto = require('crypto');

function getAuthParams() {
	let ts = parseInt(Date.now() / 1000, 10);
	let preHash = ts + privateKey + publicKey;
	let hash = crypto.createHash('md5').update(preHash).digest('hex');
	let authParams = "ts=" + ts + "&apikey=" + publicKey + "&hash=" + hash;

	return authParams;
}

module.exports = {
	getAuthParams
}