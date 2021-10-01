const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");

db.vocab = require("./hangul.model");

// Step 1 models
db.section1_1_Basic_left_hand = require("./hangul-models/section1_1");
db.section1_2_Basic_right_hand = require("./hangul-models/section1_2");
db.section1_3_Left_and_right_hand = require("./hangul-models/section1_3");
db.section1_4_Shift_left_hand = require("./hangul-models/section1_4");
db.section1_5_Shift_right_hand = require("./hangul-models/section1_5");
db.section1_6_All_letters = require("./hangul-models/section1_6");

module.exports = db;
