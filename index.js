const express = require("express");
const app = express();

const router = require('./routes');

const port = 3000;

app.use(router);

app.get("/", (req, res) => {
  res.send("api works")
})

app.use(express.json());
app.listen(port);