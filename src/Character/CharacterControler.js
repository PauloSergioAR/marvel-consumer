const {
  consumeCharacters,
  consumeCharacter,
  consumeComics,
  consumeEvents,
  consumeSeries,
  consumeStories } = require('./CharacterConsumer');

function getCharacters(req, res){
  const characterId = req.params.id;

  if(!characterId){
    consumeCharacters(req.query.limit, req.query.page).then(response => {
      res.send(response.data);
    }).catch(error => {
      res.status(error.response.data.code).json({error: error.response.data});
    });
    return;

  } else {
    consumeCharacter(characterId).then(response => {
      res.json(response.data);
    }).catch(error => {
      res.status(error.data.code).json({error: error.data});
    })
    return;
  }
}

function getComics(req, res){
  const characterId = req.params.id;

  if(!characterId){
    res.status(400).send({error: "Request lacking character id."});
  } else {
    consumeComics(characterId, req.query.limit, req.query.page).then(response => {
      res.json(response.data);
    }).catch(error => {
      res.status(error.response.data.code).json({error: error.response.data});
    });
  }
}

function getEvents(req, res){
  const characterId = req.params.id;

  if(!characterId){
    res.status(400).send({error: "Request lacking character id."});
  } else {
    consumeEvents(characterId, req.query.limit, req.query.page).then(response => {
      res.json(response.data);
    }).catch(error => {
      res.status(error.response.data.code).json({error: error.response.data});
    });
  }
}

function getSeries(req, res){
  const characterId = req.params.id;

  if(!characterId){
    res.status(400).send({error: "Request lacking character id."});
  } else {
    consumeSeries(characterId, req.query.limit, req.query.page).then(response => {
      res.json(response.data);
    }).catch(error => {
      res.status(error.response.data.code).json({error: error.response.data});
    });
  }
}

function getStories(req, res){
  const characterId = req.params.id;

  if(!characterId){
    res.status(400).send({error: "Request lacking character id."});
  } else {
    consumeStories(characterId, req.query.limit, req.query.page).then(response => {
      res.json(response.data);
    }).catch(error => {
      res.status(error.response.data.code).json({error: error.response.data});
    });
  }
}

module.exports = {
  getCharacters,
  getComics,
  getEvents,
  getSeries,
  getStories
}