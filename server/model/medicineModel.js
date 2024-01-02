import mongoose from "mongoose";


const medicineSchema = new mongoose.Schema({
    medicine : {
        type: String,
        required: true
    },
    desc : {
        type: String,
        required: true
    },
    quantity : {
        type: Number,
        required: true
    },
    expiry : {
        type: Date,
        required: true
    },

})


export default mongoose.model("first_aid_kit", medicineSchema);