const express = require("express");
const app = express();
const PORT = 3000;

// Route that returns JSON data
app.get("/data", (req, res) => {
  res.json({ message: "Hello from Express!", number: 42 });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
