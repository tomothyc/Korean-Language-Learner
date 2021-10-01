const mongoose = require("mongoose");
const section1_5Schema = new mongoose.Schema(
  {
    kr: { type: String, required: true, unique: false },
    en: { type: String, required: true, unique: false }
  },
  {
    timeestamps: true
  }
);
const section1_5_Shift_right_hand = mongoose.model(
  "section1_5_Shift_right_hand",
  section1_5Schema
);
module.exports = section1_5_Shift_right_hand;
