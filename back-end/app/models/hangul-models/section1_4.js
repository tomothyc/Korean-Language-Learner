const mongoose = require("mongoose");
const section1_4Schema = new mongoose.Schema(
  {
    kr: { type: String, required: true, unique: false },
    en: { type: String, required: true, unique: false }
  },
  {
    timeestamps: true
  }
);
const section1_4_Shift_left_hand = mongoose.model(
  "section1_4_Shift_left_hand",
  section1_4Schema
);
module.exports = section1_4_Shift_left_hand;
