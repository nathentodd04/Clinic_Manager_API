const { model, Schema } = require("mongoose");

const doctorSchema = new Schema ({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    phone_number: { type: String, required: true },
    specialty: { type: String, required: true },
});

module.exports = model("Doctor", doctorSchema);