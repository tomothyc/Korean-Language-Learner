import mongoose from "mongoose";
const section6_1Schema = new mongoose.Schema(
    {
        kr: { type: String, required: true, unique:false },
        en: { type: String, required:true, unique:false }
    },
    {
        timeestamps: true
    }
);
const section6_1_Word_dictation = mongoose.model("section6_1_Word_dictation", section6_1Schema);
export default section6_1_Word_dictation; 