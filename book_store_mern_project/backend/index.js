 const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URL)  // no options needed
  .then(() => {
    console.log("✅ MongoDB connected!");
    app.get("/", (req, res) => res.send("Hello Boss!"));
    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
  })
  .catch(err => console.error("❌ MongoDB connection error:", err));
