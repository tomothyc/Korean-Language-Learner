import mongoose from "mongoose";
const section3_2Schema = new mongoose.Schema(
    {
        kr: { type: String, required: true, unique:false },
        en: { type: String, required:true, unique:false }
    },
    {
        timeestamps: true
    }
);
const section3_2_three_syllables_without_ending_consonant = mongoose.model("section3_2_three_syllables_without_ending_consonant", section3_2Schema);
export default section3_2_three_syllables_without_ending_consonant; 