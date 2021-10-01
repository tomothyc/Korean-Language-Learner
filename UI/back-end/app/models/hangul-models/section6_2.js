import mongoose from "mongoose";
const section6_2Schema = new mongoose.Schema(
    {
        kr: { type: String, required: true, unique:false },
        en: { type: String, required:true, unique:false }
    },
    {
        timeestamps: true
    }
);
const section6_2_Short_sentence_dictation = mongoose.model("section6_2_Short_sentence_dictation", section6_2Schema);
export default section6_2_Short_sentence_dictation; 