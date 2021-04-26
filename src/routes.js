const express = require('express');
const router = express.Router();
const { 
  getCharacters, 
	getCharacter,
	getComics, 
	getEvents, 
	getSeries, 
	getStories 
} = require('./Character/CharacterControler');

router.get("/v1/public/characters", getCharacters);
router.get("/v1/public/characters/:id", getCharacter);
router.get("/v1/public/characters/:id/comics", getComics);
router.get("/v1/public/characters/:id/events", getEvents);
router.get("/v1/public/characters/:id/series", getSeries);
router.get("/v1/public/characters/:id/stories", getStories);

module.exports = router;