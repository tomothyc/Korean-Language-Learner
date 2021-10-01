import mongoose from "mongoose";
const section2_4Schema = new mongoose.Schema(
    {
        kr: { type: String, required: true, unique:false },
        en: { type: String, required:true, unique:false }
    },
    {
        timeestamps: true
    }
);
const section2_4_Shift_C_plus_V_plus_C = mongoose.model("section2_4_Shift_C_plus_V_plus_C", section2_4Schema);
export default section2_4_Shift_C_plus_V_plus_C; 