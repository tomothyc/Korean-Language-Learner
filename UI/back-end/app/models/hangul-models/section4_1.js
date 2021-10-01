import mongoose from "mongoose";
const section4_1Schema = new mongoose.Schema(
    {
        kr: { type: String, required: true, unique:false },
        en: { type: String, required:true, unique:false }
    },
    {
        timeestamps: true
    }
);
const section4_1_Short_sentences = mongoose.model("section4_1_Short_sentences", section4_1Schema);
export default section4_1_Short_sentences; 