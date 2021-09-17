import mongoose from "mongoose";
const section2_1Schema = new mongoose.Schema(
    {
        kr: { type: String, required: true, unique:false },
        en: { type: String, required:true, unique:false }
    },
    {
        timeestamps: true
    }
);
const section2_1_C_plus_V = mongoose.model("section2_1_C_plus_V", section2_1Schema);
export default section2_1_C_plus_V; 