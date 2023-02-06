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
const images = require(`${relativePath}exam-model.js`);

/*const getUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'API is working.'
  });
}*/

/**@desc gets all the patients from the database
*/
async function getTest(req, res)
{
  let payload = {
    success: true,
    message: 'API is working (test)'
  };
  return res.status(200).json(payload);
}

//CONTROLERS for patients:
/*async function getPatients (req, res)
{
  const allPatients = await patients.find({});
  res.status(200).json(allPatients);
}*/

/**@desc gets all the patients from the database
*/
getPatients = asyncHandler( async (req, res) => {
  const allPatients = await patients.find({}); //passed empty object returns all member of the set
  res.status(200).json(allPatients);
});

getPatientByID = asyncHandler( async (req, res) => {
  const patient = await patients.findById(req.params["id"]);
  res.status(200).json(patient);
});

/**@desc creates a new patient
*/
createPatient = asyncHandler( async (req, res) => {
  const body = req.body;
  if (!body) //exception hadeling for body
  {
    res.status(400);
    throw new Error("Please, define a body");
  }
  const newPatient = await patients.create(body);

  res.status(200).json(newPatient);
});

/**@desc updates a specific patient
*/
updatePatient = asyncHandler( async (req, res) => {
  const patient = await patients.findById(req.params["id"]); //finding the patient:
  if (!patient) //checking if patient was obtained
  {
    res.status(400);
    throw new Error("Patient was not found");
  }
  const updatedPatient = await patients.findByIdAndUpdate(req.params["id"], req.body, {new: true,}); //updating patient with ID using given body

  res.status(200).json(updatedPatient);
});

/**@desc deletes a specific patient
*/
deletePatient = asyncHandler( async (req, res) => {
  //find patient before attempting to delete
  const patient = await patients.findById(req.params["id"]);
  if (!patient)
  {
    rest.status(400);
    throw new Error("Patient not found");
  }

  await patients.findOneAndDelete({_id: req.params.id}); //Did work

  res.status(200).json({_id: req.params["id"]}); //just return the id back
});

//CONTROLLERS for exams:

/**@desc gets all the exams
*/
getExams = asyncHandler( async (req, res) => {
  const allExams = await images.find({}); //passed empty object returns all member of the set
  res.status(200).json(allExams);
});

//
/**@desc gets exams of the corresponding patians by ID.
*/
getExamsOfPatient = asyncHandler( async (req, res) =>
{
  const examsOfPatient = await images.find({patientId: req.params.patientId});

  if (!examsOfPatient) //error handeling
  {
    res.status(400);
    throw new Error("Exam not found"); //throws error and breaks away from function
  }

  res.status(200).json(examsOfPatient);
});

/**@desc gets an exam from a patient using a provided ID and index.
*/
getExamByID = asyncHandler( async (req, res) =>
{
  let id = req.params.id;
  let trueId = new mongoose.Types.ObjectId(id);
  const exam = await images.find({_id: trueId});

  if (!exam) //error handeling
  {
    res.status(400);
    throw new Error("Exam not found"); //throws error and breaks away from function
  }

  res.status(200).json(exam);
});

/**@desc creates a new exam for a given patient by ID
*/
createExam = asyncHandler( async (req, res) =>
{
  let body = req.body;
  if (!body) //exception hadeling for body
  {
    res.status(400);
    throw new Error("Please, define a body");
  }
  const newId = mongoose.Types.ObjectId();
  body = {...body, _id: newId}; //add new property to body
  const newExam = await images.create(body);
  res.status(200).json(newExam);
});

/**@desc updates an exam from a patient using a provided ID and index
*/
updateExam = asyncHandler( async (req, res) =>
{
  console.log(req.params);
  const id = req.params.id;
  const trueId = mongoose.Types.ObjectId(id);
  const exam = await images.find({ _id: trueId }); //finding the exam:
  if (!exam) //checking if exam was obtained
  {
    res.status(400);
    throw new Error("Patient was not found");
  }
  const updatedExam = await images.findByIdAndUpdate(trueId, req.body, {new: true});

  res.status(200).json(updatedExam);
});

/**@desc deletes an exam from a patient using a provided ID and index
*/
deleteExam = asyncHandler( async (req, res) =>
{
  //find exam before attempting to delete
  const id = req.params.id;
  const trueId = mongoose.Types.ObjectId(id);
  const exam = await images.find({_id: trueId});
  if (!exam)
  {
    res.status(400);
    throw new Error("Exam not found");
  }
  else {
    console.log("found");
  }

  await images.findOneAndDelete({_id: trueId}); //Did work

  res.status(200).json({_id: req.params["id"]}); //just return the id back
});

//other controllers (unification of the two databases)

//TODO: make the controller that is an agregate of both patients and images collections, check mongodb agregate function. call it getGenInfo

module.exports = {
  getTest,
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
};
