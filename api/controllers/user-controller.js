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

async function getTest(req, res)
{
  let payload = {
    success: true,
    message: 'API is working (test)'
  };
  return res.status(200).json(payload);
}

//CONTROLERS for patients:
getPatients = asyncHandler( async (req, res) => {
  const temp = {name: "Star", age: "21"};
  const allPatients = await patients.find({});
  res.status(200).json(allPatients);
});

getPatientByID = asyncHandler( async (req, res) => {
  const patient = await patients.findById(req.params["id"]);
  res.status(200).json(patient);
});


module.exports = {
  getTest,
  getPatients,
  getPatientByID
};
