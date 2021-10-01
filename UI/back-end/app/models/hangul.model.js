const mongoose = require("mongoose");
const vocab = new mongoose.Schema(
  {
    step: { type: String, required: true, unique: false },
    exercise: { type: String, required: true, unique: false },
    kr: { type: String, required: true, unique: false },
    en: { type: String, required: true, unique: false }
  },
  {
    timeestamps: true
  }
);
const Vocab = mongoose.model("Vocab", vocab);
module.exports = Vocab;
