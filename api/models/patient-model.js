const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: false,
    },
    bmi: {
      type: Number,
      required: false,
    },
    weight: {
      type: Number,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    examId: {
      type: String,
      required: false,
    },
    icuAdmit: {
      type: String,
      required: false,
    },
    numIcuAdmit: {
      type: Number,
      required: false,
    },
    mortality: {
      type: String,
      required: true,
    },
  },
  { collection: "patients" }
);

module.exports = mongoose.model("patients", PatientSchema);
