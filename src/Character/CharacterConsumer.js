const axios = require('axios');
const { getAuthParams } = require('../util');

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/'
});

function consumeCharacters(limit=20, page=1){
  let offsetNumber = (page - 1) * limit;
  let offsetParam  = offsetNumber > 0 ? "&offset=" + offsetNumber : "";
  
  let authParams = getAuthParams();
  return instance.get('/characters' + "?" + authParams + "&limit=" + limit + offsetParam);
}

function consumeCharacter(id){
  let authParams = getAuthParams();
  return instance.get('/characters/' + id + "?" + authParams);
}

function consumeComics(id,limit=20, page=1){
  let offsetNumber = (page - 1) * limit;
  let offsetParam  = offsetNumber > 0 ? "&offset=" + offsetNumber : "";
  
  let authParams = getAuthParams();
  return instance.get('/characters/' + id + "/comics" + "?" + authParams + "&limit=" + limit + "&offset=" + offsetParam);
}

function consumeEvents(id,limit=20, page=1){
  let offsetNumber = (page - 1) * limit;
  let offsetParam  = offsetNumber > 0 ? "&offset=" + offsetNumber : "";
  
  let authParams = getAuthParams();
  return instance.get('/characters/' + id + "/events" + "?" + authParams + "&limit=" + limit + "&offset=" + offsetParam);
}

function consumeSeries(id,limit=20, page=1){
  let offsetNumber = (page - 1) * limit;
  let offsetParam  = offsetNumber > 0 ? "&offset=" + offsetNumber : "";
  
  let authParams = getAuthParams();
  return instance.get('/characters/' + id + "/series" + "?" + authParams + "&limit=" + limit + "&offset=" + offsetParam);
}

function consumeStories(id,limit=20, page=1){
  let offsetNumber = (page - 1) * limit;
  let offsetParam  = offsetNumber > 0 ? "&offset=" + offsetNumber : "";
  
  let authParams = getAuthParams();
  return instance.get('/characters/' + id + "/stories" + "?" + authParams + "&limit=" + limit + "&offset=" + offsetParam);
}

module.exports = {
  consumeCharacters,
  consumeCharacter,
  consumeComics,
  consumeEvents,
  consumeSeries,
  consumeStories
}