import mongoose from "mongoose";
const section6_3Schema = new mongoose.Schema(
    {
        kr: { type: String, required: true, unique:false },
        en: { type: String, required:true, unique:false }
    },
    {
        timeestamps: true
    }
);
const section6_3_Long_sentence_dictation = mongoose.model("section6_3_Long_sentence_dictation", section6_3Schema);
export default section6_3_Long_sentence_dictation; 