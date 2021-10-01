import mongoose from "mongoose";
const section5_1Schema = new mongoose.Schema(
    {
        kr: { type: String, required: true, unique:false },
        en: { type: String, required:true, unique:false }
    },
    {
        timeestamps: true
    }
);
const section5_1_Long_sentences = mongoose.model("section5_1_Long_sentences", section5_1Schema);
export default section5_1_Long_sentences; 