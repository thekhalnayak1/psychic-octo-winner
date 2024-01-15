const express = require("express");
const app = express();

app.listen(() => console.log(""));

app.use('/ping', (req, res) => {
  res.send(new Date());
});
const Avon = require("./structures/avonClient.js");
const client = new Avon();
module.exports = client;