const { 
  getCharacters, 
	getCharacter,
	getComics, 
	getEvents, 
	getSeries, 
	getStories 
} = require('../src/Character/CharacterControler');

const CharacterConsumer = require('../src/Character/CharacterConsumer');

jest.mock('../src/Character/CharacterConsumer');

describe('Character consumer', () => {

  test('Should call the characters consumer with the correct params', async () => {
    const req = {
      query: {
        limit: 20,
        page: 1,
      }
    }
  
    const res = {
      send: jest.fn()
    }
  
    const consumeCharactersMock = jest.fn(() => Promise.resolve({data: [{characters: 'test'}]}));
  
    CharacterConsumer.consumeCharacters.mockImplementation(consumeCharactersMock);
  
    await getCharacters(req, res);
  
    expect(consumeCharactersMock).toHaveBeenCalledWith(20, 1);
    expect(res.send).toHaveBeenCalledWith([{characters: 'test'}]);
  });

  test('Should call the character consumer with the correct params', async () => {
    const req = {
      params: {
        id: 10
      }
    }
  
    const res = {
      json: jest.fn()
    }
  
    const consumeCharacterMock = jest.fn(() => Promise.resolve({data: [{character: 'test'}]}));
  
    CharacterConsumer.consumeCharacter.mockImplementation(consumeCharacterMock);
  
    await getCharacter(req, res);
  
    expect(consumeCharacterMock).toHaveBeenCalledWith(10);
    expect(res.json).toHaveBeenCalledWith([{character: 'test'}]);
  });

  test('Should call the comics consumer with the correct params', async () => {
    const req = {
      params: {
        id: 10,
      },
      query: {
        limit: 20,
        page: 1
      }
    }
  
    const res = {
      json: jest.fn(),
      send: jest.fn()
    }
  
    const consumeComicMock = jest.fn(() => Promise.resolve({data: [{comic: 'test'}]}));
  
    CharacterConsumer.consumeComics.mockImplementation(consumeComicMock);
  
    await getComics(req, res);
  
    expect(consumeComicMock).toHaveBeenCalledWith(10, 20, 1);
    expect(res.json).toHaveBeenCalledWith([{comic: 'test'}]);
  });

  test('Should call the events consumer with the correct params', async () => {
    const req = {
      params: {
        id: 10,
      },
      query: {
        limit: 20,
        page: 1
      }
    }
  
    const res = {
      json: jest.fn(),
      send: jest.fn()
    }
  
    const consumeEventsMock = jest.fn(() => Promise.resolve({data: [{Events: 'test'}]}));
  
    CharacterConsumer.consumeEvents.mockImplementation(consumeEventsMock);
  
    await getEvents(req, res);
  
    expect(consumeEventsMock).toHaveBeenCalledWith(10, 20, 1);
    expect(res.json).toHaveBeenCalledWith([{Events: 'test'}]);
  });

  test('Should call the series consumer with the correct params', async () => {
    const req = {
      params: {
        id: 10,
      },
      query: {
        limit: 20,
        page: 1
      }
    }
  
    const res = {
      json: jest.fn(),
      send: jest.fn()
    }
  
    const consumeSeriesMock = jest.fn(() => Promise.resolve({data: [{Series: 'test'}]}));
  
    CharacterConsumer.consumeSeries.mockImplementation(consumeSeriesMock);
  
    await getSeries(req, res);
  
    expect(consumeSeriesMock).toHaveBeenCalledWith(10, 20, 1);
    expect(res.json).toHaveBeenCalledWith([{Series: 'test'}]);
  });

  test('Should call the stories consumer with the correct params', async () => {
    const req = {
      params: {
        id: 10,
      },
      query: {
        limit: 20,
        page: 1
      }
    }
  
    const res = {
      json: jest.fn(),
      send: jest.fn()
    }
  
    const consumeStoriesMock = jest.fn(() => Promise.resolve({data: [{Stories: 'test'}]}));
  
    CharacterConsumer.consumeStories.mockImplementation(consumeStoriesMock);
  
    await getStories(req, res);
  
    expect(consumeStoriesMock).toHaveBeenCalledWith(10, 20, 1);
    expect(res.json).toHaveBeenCalledWith([{Stories: 'test'}]);
  });
});

