const mongoose = require("mongoose");
const section1_2Schema = new mongoose.Schema(
  {
    kr: { type: String, required: true, unique: false },
    en: { type: String, required: true, unique: false }
  },
  {
    timeestamps: true
  }
);
const section1_2_Basic_right_hand = mongoose.model(
  "section1_2_Basic_right_hand",
  section1_2Schema
);
module.exports = section1_2_Basic_right_hand;
