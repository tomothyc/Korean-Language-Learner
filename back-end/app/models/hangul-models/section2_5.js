import mongoose from "mongoose";
const section2_5Schema = new mongoose.Schema(
    {
        kr: { type: String, required: true, unique:false },
        en: { type: String, required:true, unique:false }
    },
    {
        timeestamps: true
    }
);
const section2_5_C_plus_V_plus_CC = mongoose.model("section2_5_C_plus_V_plus_CC", section2_5Schema);
export default section2_5_C_plus_V_plus_CC; 