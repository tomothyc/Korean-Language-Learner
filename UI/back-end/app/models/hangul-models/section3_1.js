import mongoose from "mongoose";
const section3_1Schema = new mongoose.Schema(
    {
        kr: { type: String, required: true, unique:false },
        en: { type: String, required:true, unique:false }
    },
    {
        timeestamps: true
    }
);
const section3_1_two_Syllables_without_ending_consonant = mongoose.model("section3_1_two_Syllables_without_ending_consonant", section3_1Schema);
export default section3_1_two_Syllables_without_ending_consonant; 