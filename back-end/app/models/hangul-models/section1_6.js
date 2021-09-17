const mongoose = require("mongoose");
const section1_6Schema = new mongoose.Schema(
  {
    kr: { type: String, required: true, unique: false },
    en: { type: String, required: true, unique: false }
  },
  {
    timeestamps: true
  }
);
const section1_6_All_letters = mongoose.model(
  "section1_6_All_letters",
  section1_6Schema
);
module.exports = section1_6_All_letters;
