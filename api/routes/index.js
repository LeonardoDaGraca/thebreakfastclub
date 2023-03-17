/**
* Pedro Gutierrez Rincon
* 01/29/2023
* Here the patterns for the REST API are defined and what controller should act
* respectively.

THE API:
  Pattern for patients CRUD opperations:
"GET http://<host>:<port>/api/patients" <-- gets all patients
"GET http://<host>:<port>/api/patients/<id>" <-- gets patient with given ID
"POST http://<host>:<port>/api/patients" <-- inserts a new defined patient into the collection
"PUT http://<host>:<port>/api/patients/<id>" <-- updates the patient that corresponds to the given id
"DELETE http://<host>:<port>/api/patients/<id>" <-- deletes the patient with the corresponding id

  Pattern for exams CRUD opperations:
"GET http://<host>:<port>/api/exams" <-- gets all exams
"GET http://<host>:<port>/api/patients/<id>/exams" <-- returns all the exams that correspond to the given patient's id
"GET http://<host>:<port>/api/exams" <-- gets an exam with a specific id
"POST http://<host>:<port>/api/exams" <-- inserts a new defined exam into the collection
"PUT http://<host>:<port>/api//<id>" <-- updates the exam that corresponds to the given id
"DELETE http://<host>:<port>/api/exams/<id>" <-- deletes the exam with the conrresponding id

  Pattern for other CRUD opperations:
"GET http://<host>:<port>/api/everything" <-- gets the aggregation of general info of the patients and their exams
**/

/*FIXME:
requires mongoose
requires importing mongodb models for patients and exams
requires express-async-handler
*/

var express = require("express");
var router = express.Router();

const UserController = require("../controllers/user-controller");

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.send('API is working properly!');
});*/
//router for patients
// router.get('/test', UserController.getTest);
router.get("/patients", UserController.getPatients);
router.get("/patients/:id", UserController.getPatientByID);
router.post("/patients", UserController.createPatient);
router.put("/patients/:id", UserController.updatePatient);
router.delete("/patients/:id", UserController.deletePatient);
//rouers for exams
router.get("/exams", UserController.getExams);
router.get("/patients/:patientId/exams", UserController.getExamsOfPatient);
router.get("/exams/:id", UserController.getExamByID);
router.post("/exams", UserController.createExam);
router.put("/exams/:id", UserController.updateExam);
router.delete("/exams/:id", UserController.deleteExam);
//other routers
router.get("/everything", UserController.getEverything);

module.exports = router;
