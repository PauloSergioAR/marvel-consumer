const { consumeCharacters, consumeCharacter } = require('./CharacterConsumer');

function getCharacters(req, res){
  const characterId = req.params.id;

  if(!characterId){
    consumeCharacters().then(response => {
      res.json(response);
    }).catch(error => {
      console.log(error)
      res.status(error.response.status).send(error.response.data);
    });
    return;

  } else {
    consumeCharacter(characterId).then(response => {
      res.json(response);
    })
    return;
  }
}

function getComics(req, res){
  const characterId = req.params.id;

  if(!characterId){
    res.status(400).send({error: "Request lacking character id."});
  }
  res.json({
    message: "Get comics with character id",
    id: characterId
  });
  
}

function getEvents(req, res){
  const characterId = req.params.id;

  if(!characterId){
    res.status(400).send({error: "Request lacking character id."});
  }

  res.json({
    message: "Get events with character id",
    id: characterId
  });
}

function getSeries(req, res){
  const characterId = req.params.id;

  if(!characterId){
    res.status(400).send({error: "Request lacking character id."});
  }

  res.json({
    message: "Get series with character id",
    id: characterId
  });
}

function getStories(req, res){
  const characterId = req.params.id;

  if(!characterId){
    res.status(400).send({error: "Request lacking character id."});
  }

  res.json({
    message: "Get stories with character id",
    id: characterId
  });
}

module.exports = {
  getCharacters,
  getComics,
  getEvents,
  getSeries,
  getStories
}