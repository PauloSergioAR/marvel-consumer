const axios = require('axios').default;
const { getAuthParams } = require('../util');

function consumeCharacters(limit=20, page=1){
  let offsetNumber = (page - 1) * limit;
  let offsetParam  = offsetNumber > 0 ? "&offset=" + offsetNumber : "";
  
  let authParams = getAuthParams();
  return axios.get('https://gateway.marvel.com:443/v1/public/' + 'characters' + "?" + authParams + "&limit=" + limit + offsetParam);
}

function consumeCharacter(id){
  let authParams = getAuthParams();
  return axios.get('https://gateway.marvel.com:443/v1/public/' + 'characters/' + id + "?" + authParams);
}

function consumeComics(id,limit=20, page=1){
  let offsetNumber = (page - 1) * limit;
  let offsetParam  = offsetNumber > 0 ? "&offset=" + offsetNumber : "";
  
  let authParams = getAuthParams();
  return axios.get('https://gateway.marvel.com:443/v1/public/' + 'characters/' + id + "/comics" + "?" + authParams + "&limit=" + limit + offsetParam);
}

function consumeEvents(id,limit=20, page=1){
  let offsetNumber = (page - 1) * limit;
  let offsetParam  = offsetNumber > 0 ? "&offset=" + offsetNumber : "";
  
  let authParams = getAuthParams();
  return axios.get('https://gateway.marvel.com:443/v1/public/' + 'characters/' + id + "/events" + "?" + authParams + "&limit=" + limit + offsetParam);
}

function consumeSeries(id,limit=20, page=1){
  let offsetNumber = (page - 1) * limit;
  let offsetParam  = offsetNumber > 0 ? "&offset=" + offsetNumber : "";
  
  let authParams = getAuthParams();
  return axios.get('https://gateway.marvel.com:443/v1/public/' + 'characters/' + id + "/series" + "?" + authParams + "&limit=" + limit + offsetParam);
}

function consumeStories(id,limit=20, page=1){
  let offsetNumber = (page - 1) * limit;
  let offsetParam  = offsetNumber > 0 ? "&offset=" + offsetNumber : "";
  
  let authParams = getAuthParams();
  return axios.get('https://gateway.marvel.com:443/v1/public/' + 'characters/' + id + "/stories" + "?" + authParams + "&limit=" + limit + offsetParam);
}

module.exports = {
  consumeCharacters,
  consumeCharacter,
  consumeComics,
  consumeEvents,
  consumeSeries,
  consumeStories
}