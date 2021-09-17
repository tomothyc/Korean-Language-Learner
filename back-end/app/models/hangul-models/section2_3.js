import mongoose from "mongoose";
const section2_3Schema = new mongoose.Schema(
    {
        kr: { type: String, required: true, unique:false },
        en: { type: String, required:true, unique:false }
    },
    {
        timeestamps: true
    }
);
const section2_3_C_plus_V_plus_C = mongoose.model("section2_3_C_plus_V_plus_C", section2_3Schema);
export default section2_3_C_plus_V_plus_C; 