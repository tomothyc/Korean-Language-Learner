import mongoose from "mongoose";
const section3_3Schema = new mongoose.Schema(
    {
        kr: { type: String, required: true, unique:false },
        en: { type: String, required:true, unique:false }
    },
    {
        timeestamps: true
    }
);
const section3_3_two_syllables_with_ending_consonant = mongoose.model("section3_3_two_syllables_with_ending_consonant", section3_3Schema);
export default section3_3_two_syllables_with_ending_consonant; 