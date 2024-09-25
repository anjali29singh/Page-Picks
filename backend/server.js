const express = require("express");
const cors = require("cors");
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure this directory exists
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/upload", upload.single("file"), (req, res) => {
  if (req.file) {
    console.log("File uploaded:", req.file);
    res.json({ message: "File uploaded successfully", file: req.file });
  } else {
    res.status(400).json({ error: "No file uploaded" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
