const express = require('express');
const router = express.Router();
const { getCharacters, getComics, getEvents, getSeries, getStories } = require('./Character/CharacterControler');

const characterBaseUrl = "/v1/public/characters";

router.get(characterBaseUrl, getCharacters);
router.get(characterBaseUrl + "/:id", getCharacters);
router.get(characterBaseUrl + "/:id/comics", getComics);
router.get(characterBaseUrl + "/:id/events", getEvents);
router.get(characterBaseUrl + "/:id/series", getSeries);
router.get(characterBaseUrl + "/:id/stories", getStories);

module.exports = router;