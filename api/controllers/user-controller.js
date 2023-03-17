/**
 * Pedro Gutierrez Rincon
 * 01/29/2023
 * the controllers for CRUD opperations are defined here.
 * Called by router.
 **/

const mongoose = require("mongoose"); //to interact with the database (creat and update)
const asyncHandler = require("express-async-handler"); //facilitates error handeling for express async functions
const relativePath = "../models/";
//models of the objects stored in the database: two collections for patients and exams
const patients = require(`${relativePath}patient-model.js`);
const images = require(`${relativePath}exam-model.js`).images;
//const images = imagesCollectionUtilities.images;

/*const getUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'API is working.'
  });
}*/

/*async function getTest(req, res)
{
  let payload = {
    success: true,
    message: 'API is working (test)'
  };
  res.status(200).json(payload);
}*/

/**@desc it's just a test for the api
 */
getTest = asyncHandler(async (req, res) => {
  let payload = {
    success: true,
    message: "API is working (test)",
  };
  res.status(200).json(payload);
});

//CONTROLERS for patients:
/**@desc gets all the patients from the database
 */
/*async function getPatients (req, res)
{
  const allPatients = await patients.find({});
  res.status(200).json(allPatients);
}*/

/**@desc gets all the patients from the database
 */
getPatients = asyncHandler(async (req, res) => {
  const allPatients = await patients.find({}); //passed empty object returns all member of the set
  res.status(200).json(allPatients);
});

getPatientByID = asyncHandler(async (req, res) => {
  const patient = await patients.findById(req.params["id"]);
  res.status(200).json(patient);
});

/**@desc creates a new patient
 */
createPatient = asyncHandler(async (req, res) => {
  const body = req.body;
  if (!body) {
    //exception hadeling for body
    res.status(400);
    throw new Error("Please, define a body");
  }
  const newPatient = await patients.create(body);

  res.status(200).json(newPatient);
});

/**@desc updates a specific patient
 */
updatePatient = asyncHandler(async (req, res) => {
  const patient = await patients.findById(req.params["id"]); //finding the patient:
  if (!patient) {
    //checking if patient was obtained
    res.status(400);
    throw new Error("Patient was not found");
  }
  const updatedPatient = await patients.findByIdAndUpdate(
    req.params["id"],
    req.body,
    { new: true }
  ); //updating patient with ID using given body

  res.status(200).json(updatedPatient);
});

/**@desc deletes a specific patient
 */
deletePatient = asyncHandler(async (req, res) => {
  //validation
  //find patient before attempting to delete
  const patient = await patients.findById(req.params["id"]);
  if (!patient) {
    rest.status(400);
    throw new Error("Patient not found");
  }
  //finding if there are exams related to patient
  const examsOfPatient = await images.find({ patientId: req.params["id"] });
  console.log(examsOfPatient);
  if (examsOfPatient.length > 0) {
    //if there are exams, patient can't be deleted
    rest.status(400);
    throw new Error(
      "There are exams associated with given patient, delete those first"
    );
  }
  //end of validation

  await patients.findOneAndDelete({ _id: req.params.id }); //Did work

  res.status(200).json({ _id: req.params["id"] }); //just return the id back
});

//CONTROLLERS for exams:

/**@desc gets all the exams
 */
getExams = asyncHandler(async (req, res) => {
  const allExams = await images.find({}); //passed empty object returns all member of the set
  res.status(200).json(allExams);
});

//
/**@desc gets exams of the corresponding patians by ID.
 */
getExamsOfPatient = asyncHandler(async (req, res) => {
  const examsOfPatient = await images.find({ patientId: req.params.patientId });
  //console.log(examsOfPatient);
  if (!examsOfPatient) {
    //error handeling
    res.status(400);
    throw new Error("Exam not found"); //throws error and breaks away from function
  }

  res.status(200).json(examsOfPatient);

  /*const test = {message: `${req.params.patientId}`};
  res.status(200).json(test);*/
});

/**@desc gets an exam from a patient using a provided ID and index.
 */
getExamByID = asyncHandler(async (req, res) => {
  let id = req.params.id;
  let trueId = new mongoose.Types.ObjectId(id);
  const exam = await images.find({ _id: trueId });

  if (!exam) {
    //error handeling
    res.status(400);
    throw new Error("Exam not found"); //throws error and breaks away from function
  }

  res.status(200).json(exam);
});

/**@desc creates a new exam for a given patient by ID
 */
createExam = asyncHandler(async (req, res) => {
  let body = req.body;
  //manual validation
  if (!body || !body.patientId) {
    //exception hadeling for body validation (manual validation because Model.collection.insert() does not validate)
    res.status(400);
    throw new Error(
      "Please, define a body correctly, remember to include the correct patient id"
    );
  }
  const patient = await patients.findOne({ _id: body.patientId });
  if (!patient) {
    res.status(400);
    throw new Error(`patient with given ID ${body.patientId} does not exist
                     Only exams can be created for already existing patients.`);
  }
  //end of validation
  let newId = mongoose.Types.ObjectId();
  const bodyWithId = {
    //doing it like this instead of spreading because I want _id to be on top of everything
    _id: newId,
    patientId: body.patientId,
    daysImageDiagnosos: body.daysImageDiagnosos,
    hrsImageDiagnosis: body.hrsImageDiagnosis,
    imageDescription: body.imageDescription,
    modality: body.modality,
    fio: body.fio,
    findings: body.findings,
  }; //added new id property to body
  const onInsert = (err, docs) => {
    if (err) {
      res.status(400);
      throw new Error(`Error at inserting new exam object(s):
        ${docs}
        Error:
        ${err}`);
    }
  };
  await images.collection.insert([bodyWithId], onInsert); //using this way works, no other worked
  res.status(200).json(bodyWithId);
});

/**@desc updates an exam from a patient using a provided ID and index
 */
updateExam = asyncHandler(async (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const trueId = mongoose.Types.ObjectId(id);
  const exam = await images.find({ _id: trueId }); //finding the exam:
  if (!exam) {
    //checking if exam was obtained
    res.status(400);
    throw new Error("Patient was not found");
  }
  const updatedExam = await images.findByIdAndUpdate(trueId, req.body, {
    new: true,
  });

  res.status(200).json(updatedExam);
});

/**@desc deletes an exam from a patient using a provided ID and index
 */
deleteExam = asyncHandler(async (req, res) => {
  //find exam before attempting to delete
  const id = req.params.id;
  const trueId = mongoose.Types.ObjectId(id);
  const exam = await images.find({ _id: trueId });
  if (!exam) {
    res.status(400);
    throw new Error("Exam not found");
  } else {
    console.log("found");
  }

  await images.findOneAndDelete({ _id: trueId }); //Did work

  res.status(200).json({ _id: req.params["id"] }); //just return the id back
});

//other controllers (unification of the two databases)

/**@desc gets the union between patients and images data, each patient will have their corresponding exams, uses mongodb aggregation to make the untion*/
getEverything = asyncHandler(async (req, res) => {
  //document for mongodb
  const queryDocument = [
    {
      $lookup: {
        from: "images",
        localField: "_id",
        foreignField: "patientId",
        as: "exams",
      },
    },
  ];
  const aggregateCollections = await patients.aggregate(queryDocument);
  res.status(200).json(aggregateCollections);
});

module.exports = {
  // getTest,
  getPatients,
  getPatientByID,
  createPatient,
  updatePatient,
  deletePatient,
  getExams,
  getExamsOfPatient,
  getExamByID,
  createExam,
  updateExam,
  deleteExam,
  getEverything,
};
