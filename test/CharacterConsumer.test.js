const { default: axios } = require("axios");
const { 
  consumeCharacters, 
  consumeCharacter,
  consumeComics,
  consumeEvents,
  consumeSeries,
  consumeStories } = require("../src/Character/CharacterConsumer");

jest.mock("axios");
jest.mock('../src/util', () => {
  return {
    getAuthParams: jest.fn(() => 'auth=auth')
  }
});

describe("API consumer", () => {
  afterEach(() => {
    jest.clearAllMocks();
  })
  test("Should use axios lib to call marvel api for characters", async () => {
    consumeCharacters();
    let getMock = jest.fn(() => [{test: 'test'}]);
    axios.get.mockImplementation(getMock);

    expect(await consumeCharacters()).toEqual([{test: 'test'}]);
    expect(getMock).toHaveBeenCalledWith('https://gateway.marvel.com:443/v1/public/characters?auth=auth&limit=20');

    expect(await consumeCharacters(5, 3)).toEqual([{test: 'test'}]);
    expect(getMock).toHaveBeenCalledWith('https://gateway.marvel.com:443/v1/public/characters?auth=auth&limit=5&offset=10');
  });

  test("Should use axios lib to call marvel api for character", async () => {
    let getMock = jest.fn(() => [{test: 'test'}])
    axios.get.mockImplementation(getMock)

    expect(await consumeCharacter(10)).toEqual([{test: 'test'}]);
    expect(getMock).toHaveBeenCalledWith('https://gateway.marvel.com:443/v1/public/characters/10?auth=auth');
  });

  test("Should use axios lib to call marvel api for comics", async () => {
    let getMock = jest.fn(() => [{test: 'test'}])
    axios.get.mockImplementation(getMock)

    expect(await consumeComics(10, 5, 3)).toEqual([{test: 'test'}]);
    expect(getMock).toHaveBeenCalledWith('https://gateway.marvel.com:443/v1/public/characters/10/comics?auth=auth&limit=5&offset=10');

    expect(await consumeComics(10)).toEqual([{test: 'test'}]);
    expect(getMock).toHaveBeenCalledWith('https://gateway.marvel.com:443/v1/public/characters/10/comics?auth=auth&limit=20');
  });

  test("Should use axios lib to call marvel api for events", async () => {
    let getMock = jest.fn(() => [{test: 'test'}])
    axios.get.mockImplementation(getMock)

    expect(await consumeEvents(10, 5, 3)).toEqual([{test: 'test'}]);
    expect(getMock).toHaveBeenCalledWith('https://gateway.marvel.com:443/v1/public/characters/10/events?auth=auth&limit=5&offset=10');

    expect(await consumeEvents(10)).toEqual([{test: 'test'}]);
    expect(getMock).toHaveBeenCalledWith('https://gateway.marvel.com:443/v1/public/characters/10/events?auth=auth&limit=20');
  });

  test("Should use axios lib to call marvel api for series", async () => {
    let getMock = jest.fn(() => [{test: 'test'}]);
    axios.get.mockImplementation(getMock);

    expect(await consumeSeries(10, 5, 3)).toEqual([{test: 'test'}]);
    expect(getMock).toHaveBeenCalledWith('https://gateway.marvel.com:443/v1/public/characters/10/series?auth=auth&limit=5&offset=10');

    expect(await consumeSeries(10)).toEqual([{test: 'test'}]);
    expect(getMock).toHaveBeenCalledWith('https://gateway.marvel.com:443/v1/public/characters/10/series?auth=auth&limit=20');
  });

  test("Should use axios lib to call marvel api for stories", async () => {
    let getMock = jest.fn(() => [{test: 'test'}]);
    axios.get.mockImplementation(getMock);

    expect(await consumeStories(10, 5, 3)).toEqual([{test: 'test'}]);
    expect(getMock).toHaveBeenCalledWith('https://gateway.marvel.com:443/v1/public/characters/10/stories?auth=auth&limit=5&offset=10');

    expect(await consumeStories(10)).toEqual([{test: 'test'}]);
    expect(getMock).toHaveBeenCalledWith('https://gateway.marvel.com:443/v1/public/characters/10/stories?auth=auth&limit=20');
  });
});
