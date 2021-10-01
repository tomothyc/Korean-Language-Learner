const mongoose = require("mongoose");
const section1_3Schema = new mongoose.Schema(
  {
    kr: { type: String, required: true, unique: false },
    en: { type: String, required: true, unique: false }
  },
  {
    timeestamps: true
  }
);
const section1_3_Left_and_right_hand = mongoose.model(
  "section1_3_Left_and_right_hand",
  section1_3Schema
);
module.exports = section1_3_Left_and_right_hand;
