const mongoose = require("mongoose");
const section1_1Schema = new mongoose.Schema(
  {
    kr: { type: String, required: true, unique: false },
    en: { type: String, required: true, unique: false }
  },
  {
    timeestamps: true
  }
);
const section1_1_Basic_left_hand = mongoose.model(
  "section1_1_Basic_left_hand",
  section1_1Schema
);
module.exports = section1_1_Basic_left_hand;
