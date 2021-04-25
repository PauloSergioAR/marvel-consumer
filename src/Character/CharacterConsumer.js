const axios = require('axios');
const crypto = require('crypto');

const publicKey = '7f3b197048cb5ec07241bb46eaefd616';
const privateKey = '0428f8e5262c7fa84ed2332f470ef2f5f86cbfa0';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/'
});



function consumeCharacters(limit=20, page=1){
  let offsetNumber = (page - 1) * limit;
  let offsetParam  = offsetNumber > 0 ? "&offset=" + offsetNumber : "";

  let ts = new Date().getTime();
  let hash = crypto.createHash('md5').update(ts + publicKey + privateKey).digest('hex');
  let authParams = "?ts=" + ts + "&apiKey=" + publicKey + "&hash=" + hash;

  return instance.get('/characters' + authParams + "&limit=" + limit + offsetParam);
}

function consumeCharacter(id){
  let offset = (page - 1) * limit;
  

  let ts = new Date().getTime();
  let hash = crypto.createHash('md5').update(ts + publicKey + privateKey).digest('base64');
  let authParams = "?ts=" + ts + "&apiKey=" + publicKey + "&hash=" + hash;

  return instance.get('/characters/' + id + authParams + "&limit=" + limit + "&offset=" + offset);
}

module.exports = {
  consumeCharacters,
  consumeCharacter
}