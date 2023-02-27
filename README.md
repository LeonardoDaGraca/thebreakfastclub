# Hack.Diversity Tech Dive Template

## Getting Started

This skeleton contains two different applications -- a front end, or "client," created with "Create React App," and a back end, or "API," created with Express.

In order to make both of them work together, you'll need to run both, but you can run just one or the other to start. As you begin working on this project, you'll first focus on the client, so you can more or less ignore the API portion of the code for now.

## Client
In order to run the client, you'll run the following commands:

```bash
cd client/
npm i
npm start
```

You should then be able to visit `localhost:3000` in your browser and see the client running. If you make changes in the `App.js` file, you should see them reflected.

## API
In order to run the server, you'll run the following commands:

```bash
cd api/
npm i
npm start
```

You should then be able to visit `localhost:9000` in your browser and see the server running.

## Express API to make CRUD operations on remote MongoDB database
READ THIS TO UNDERSTAND THE API<br>
The api works with the url: **\<api-root\>/\<pattern\>**<br>
*api-root* = "http://\<host\>:\<port\>/api"<br>
*pattern* **is what matters to know** and with it you can make CRUD operations to the database<br>
The pattern is designed to start from more general to more specific access: collection -\> item -\> sub item(s)<br>

**THE PATTERNS** (there are two collections, patients and exams):<br>
"/patients" gives access to the patients' collection<br>
"/exams" gives access to the exams' collection<br>
"/everything" gives an union of both collections, that is a collection with an array of all the patients and each patients will have property "exams" that contains an array of all the corresponding exams<br>
**More specific patterns:**<br>
"/patients/\<id\>" To get access of a specific patient given a specific patient's *id*<br>
"/exams/\<id\>" Same as the latter but with an exam<br>
"/patients/\<id\>/exams" gets (read only) data from exams that correspond to patient's *id*<br>
**Examples:**<br>
"/patients" would be used to get all patients or to create a new patient <br>
"/patients/COVID-19-AR-16439216" would be used to get a specific patient or to delete that specific patient with id "COVID-19-AR-16439216"<br>
"/patients/COVID-19-AR-16439216/exams" would be used to get an array of the exams that correspond to patient with id "COVID-19-AR-16439216"<br>
"/exams/63fc2cb04023e75756e802e3" would be used to get the specific exam with id "63fc2cb04023e75756e802e3" or to delete it<br>

**NOTE:**<br>
(an error is thrown by the server if the next is not considered)<br>
You **can only** delete specific items by giving its *id* and you can only create a new item by accessing either collection ("/patients/\<id\>/exams" cannot be used to create a new exam for patient with *id*)<br>
**To avoid the anomaly** of having exams that belong to no patient on the database:<br>
You **cannot** create exams if patient does not exit<br>
You **cannot** delete a patient when there are exams associated with them (those exams **need to** be deleted first)<br>
You **cannot** create new patients or exams without defining the required properties for each object:<br>
For patient: `_id`, `age`, `sex`<br>
For exam: `patientId` (technically also `_id`, but this one is automatically taken care of by the back end, so that field **should not** be defined by anybody), `patientId` **should be** the ID of an existing patient
