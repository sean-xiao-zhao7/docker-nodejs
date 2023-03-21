const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Whose bacon says hi bye hi?");
});

app.listen(8080, () => {
  console.log("Listening.");
});
