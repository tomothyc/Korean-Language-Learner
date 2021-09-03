const mongoose = require("mongoose");

const letterTyping = mongoose.model(
  "Letter-Typing",
  new mongoose.Schema({
    en: String,
    kr: String
  })
);
module.exports = letterTyping;
