import mongoose from "mongoose";
const section3_4Schema = new mongoose.Schema(
    {
        kr: { type: String, required: true, unique:false },
        en: { type: String, required:true, unique:false }
    },
    {
        timeestamps: true
    }
);
const section3_4_three_syllables_with_ending_consonant = mongoose.model("section3_4_three_syllables_with_ending_consonant", section3_4Schema);
export default section3_4_three_syllables_with_ending_consonant; 