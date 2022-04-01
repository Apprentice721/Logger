const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const fs = require("fs");

//console.log that the server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

//create a GET route
app.get("/api/message", (req, res) => {
  res.send({ express: "The Express server is connected to React." });
});

app.get("/api/data", (req, res) => {
  fs.readFile("./src/resources/db.json", (err, data) => {
    err ? console.log(err) : res.send(JSON.parse(data));
  });
});
