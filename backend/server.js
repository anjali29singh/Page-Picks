const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/upload", (req, res) => {
  const data = "hello";
  console.log(req.body);
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
