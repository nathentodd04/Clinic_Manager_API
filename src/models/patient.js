const { model, Schema } = require("mongoose");

const patientSchema = new Schema ({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    sex: { type: String, required: true},
    address: { type: String, required: true },
    zip: { type: String, required: true },
    phone_number: { type: String, required: true },
    dob: { type: Date, required: true },
});

module.exports = model("Patient", patientSchema);