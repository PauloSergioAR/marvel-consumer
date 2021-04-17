function getCharacters(req, res){
  const characterId = req.params.id;

  if(!characterId){
    res.json({
      message: "Get all characters work"
    });
    //return all characters
  } else {
    res.json({
      message: "Get character with id",
      id: characterId
    });
    //return using id
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