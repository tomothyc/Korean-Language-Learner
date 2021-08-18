const mongoose = require("mongoose");

const Step1 = mongoose.model(
  "Step1",
  new mongoose.Schema({
    english: String,
    Hangul: String
  })
);
module.exports = Step1;
