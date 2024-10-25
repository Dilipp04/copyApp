const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3000;

app.get("/", (req, res) => {
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading code file");
    }
    res.setHeader("Content-Type", "text/plain");
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
