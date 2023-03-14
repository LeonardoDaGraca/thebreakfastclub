const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ImageSchema = new Schema(
    {
      _id: {
          type: Schema.Types.ObjectId, //uses MongoDB ID object as ID
          required: true
      },
      patientId: {
          type: String,
          required: true
      },
      daysImageDiagnosos: {
          type: Number,
          required: false
      },
      hrsImageDiagnosis: {
          type: Number,
          required: false
      },
      imageDescription:  {
          type: String,
          required: false
      },
      modality: {
          type: String,
          required: false
      },
      fio: {
        type: Number,
        required: false
      },
      findings: {
        type: String,
        required: false
      }
    },
    {collection: "images"}
);

module.exports = mongoose.model('Image', ImageSchema);;
