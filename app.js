const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Dockerized Node.js Application</h1>
    <h2>Portfolio Project</h2>
    <p>Containerized using Docker</p>
    <p>Created by Betha Madhulatha</p>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});