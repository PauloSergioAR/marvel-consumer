const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointFiles = ['./src/routes.js'];

swaggerAutogen(outputFile, endpointFiles)