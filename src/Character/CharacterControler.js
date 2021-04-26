const {
  consumeCharacters,
  consumeCharacter,
  consumeComics,
  consumeEvents,
  consumeSeries,
  consumeStories } = require('./CharacterConsumer');

function getCharacters(req, res) {
  //#swagger.tags = ['Character']
  //#swagger.description = 'This endpoint returns all Marvel characters.'

  /*
    #swagger.parameters['limit'] = { description: 'The number of characters returned on a request. 
      The default value is 20.
      This number cannot be greater than 100'}
    #swagger.parameters['page'] = { description: 'The offset of characters returned on a request. 
      I.E if the limit is 20 and the page is 2, the characters from position 21 to 41 will be returned.'}
  */

  consumeCharacters(req.query.limit, req.query.page).then(response => {
    res.send(response.data);
  }).catch(error => {
    res.status(error.response.data.code).json({ error: error.response.data });
  });
  return;
}

function getCharacter(req, res) {
  //#swagger.tags = ['Character']
  //#swagger.description = 'This endpoint returns a Marvel character based on its id.'

  //#swagger.parameters['id'] = { description: 'The if of the character.'}

  const characterId = req.params.id;

  consumeCharacter(characterId).then(response => {
    res.json(response.data);
  }).catch(error => {
    res.status(error.data.code).json({ error: error.data });
  })
  return;
}

function getComics(req, res) {
  //#swagger.tags = ['Comics']
  //#swagger.description = 'This endpoint returns the comics for a Marvel character based on its id.'

  //#swagger.parameters['id'] = { description: 'The if of the character.'}
  /*
    #swagger.parameters['limit'] = { description: 'The number of comics returned on a request. 
      The default value is 20.
      This number cannot be greater than 100'}
    #swagger.parameters['page'] = { description: 'The offset of comics returned on a request. 
      I.E if the limit is 20 and the page is 2, the comics from position 21 to 41 will be returned.'}
  */
  const characterId = req.params.id;

  if (!characterId) {
    res.status(400).send({ error: "Request lacking character id." });
  } else {
    consumeComics(characterId, req.query.limit, req.query.page).then(response => {
      res.json(response.data);
    }).catch(error => {
      res.status(error.response.data.code).json({ error: error.response.data });
    });
  }
}

function getEvents(req, res) {
  //#swagger.tags = ['Events']
  //#swagger.description = 'This endpoint returns the events for a Marvel character based on its id.'
  //#swagger.parameters['id'] = { description: 'The if of the character.'}
  /*
    #swagger.parameters['limit'] = { description: 'The number of events returned on a request. 
      The default value is 20.
      This number cannot be greater than 100'}
    #swagger.parameters['page'] = { description: 'The offset of events returned on a request. 
      I.E if the limit is 20 and the page is 2, the events from position 21 to 41 will be returned.'}
  */

  const characterId = req.params.id;

  if (!characterId) {
    res.status(400).send({ error: "Request lacking character id." });
  } else {
    consumeEvents(characterId, req.query.limit, req.query.page).then(response => {
      res.json(response.data);
    }).catch(error => {
      res.status(error.response.data.code).json({ error: error.response.data });
    });
  }
}

function getSeries(req, res) {
  //#swagger.tags = ['Series']
  //#swagger.description = 'This endpoint returns the series for a Marvel character based on its id.'

  //#swagger.parameters['id'] = { description: 'The if of the character.'}
  /*
    #swagger.parameters['limit'] = { description: 'The number of characters returned on a request. 
      The default value is 20.
      This number cannot be greater than 100'}
    #swagger.parameters['page'] = { description: 'The offset of characters returned on a request. 
      I.E if the limit is 20 and the page is 2, the characters from position 21 to 41 will be returned.'}
  */

  const characterId = req.params.id;

  if (!characterId) {
    res.status(400).send({ error: "Request lacking character id." });
  } else {
    consumeSeries(characterId, req.query.limit, req.query.page).then(response => {
      res.json(response.data);
    }).catch(error => {
      res.status(error.response.data.code).json({ error: error.response.data });
    });
  }
}

function getStories(req, res) {
  //#swagger.tags = ['Stories']
  //#swagger.description = 'This endpoint returns the stories for a Marvel character based on its id.'

  //#swagger.parameters['id'] = { description: 'The if of the character.'}
  /*
    #swagger.parameters['limit'] = { description: 'The number of stories returned on a request. 
      The default value is 20.
      This number cannot be greater than 100'}
    #swagger.parameters['page'] = { description: 'The offset of stories returned on a request. 
      I.E if the limit is 20 and the page is 2, the stories from position 21 to 41 will be returned.'}
  */

  const characterId = req.params.id;

  if (!characterId) {
    res.status(400).send({ error: "Request lacking character id." });
  } else {
    consumeStories(characterId, req.query.limit, req.query.page).then(response => {
      res.json(response.data);
    }).catch(error => {
      res.status(error.response.data.code).json({ error: error.response.data });
    });
  }
}

module.exports = {
  getCharacters,
  getCharacter,
  getComics,
  getEvents,
  getSeries,
  getStories
}