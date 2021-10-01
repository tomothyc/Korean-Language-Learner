import mongoose from "mongoose";
const section3_5Schema = new mongoose.Schema(
    {
        kr: { type: String, required: true, unique:false },
        en: { type: String, required:true, unique:false }
    },
    {
        timeestamps: true
    }
);
const section3_5_Longer_than_three_syllables = mongoose.model("section3_5_Longer_than_three_syllables", section3_5Schema);
export default section3_5_Longer_than_three_syllables; 