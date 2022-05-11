const { model, Schema } = require("mongoose");

const appointmentSchema = new Schema ({
    status: { type: String, required: true },
    place: { type: String, required: true },
    doctor: { type: String, required: true },
    patient: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
});

module.exports = model("Appointment", appointmentSchema);