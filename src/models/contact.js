import mongoose from "mongoose"
const validator = require("validator")

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw new Error('invalid email id')
        //     }
        // }
    },
    message: {
        type: String,
        require:true
    }
})

export const Contact = mongoose.models.Contact || mongoose.model("Contact", schema);