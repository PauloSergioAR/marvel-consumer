const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const router = require('./src/routes');

const port = process.env.PORT || 3000;

app.use(router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.get("/", (req, res) => {
  res.send("api works")
})

app.use(express.json());
app.listen(port);