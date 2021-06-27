const { default: axios } = require("axios");
const { consumeCharacters } = require("../src/Character/CharacterConsumer");

jest.mock("axios", () => {
  return {
    create: jest.fn(() => {
      return {
        get: jest.fn(),
      };
    }),
  };
});

describe("API consumer", () => {
  test("Should use axios lib to call marvel api", () => {
    let mockGet = jest.fn();
    axios.create.mockImplementation(() => {
      return {
        get: mockGet,
      };
    });

    consumeCharacters();

    expect(mockGet).toHaveBeenCalled();
  });
});
