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

## Express API to make CRUD operations on Database
The api works with the url: **\<api-root\>/\<pattern\>**<br>
*api-root* = "http://\<host\>:\<port\>/api"<br>
*pattern* is what matters to know and with it you can make CRUD operations to the database<br>
The pattern is designed to start from more general to more specific access: collection -\> item -\> sub item<br>

**The patterns** (there are two collections, patients and exams):<br>
"/patients" gives access to the patients' collection<br>
"/exams" gives access to the exams' collection<br>
"/everything" gives an untion of both collections, a collection with all the patients and each patients will have a field "exams" that contains an array of all the corresponding exams<br>
**More specific patterns:**<br>
"/patients/\<id\>" To get access of a specific patient given a specific patient's *id*<br>
"/exams/\<id\>" Same as the latter but with an exam<br>
"/patients/\<id\>/exams" gets (read only) data from exams that correspond to patient's *id*<br>
**Examples:**<br>
"/patients" would be used to get all patients or to create a new patient <br>
"/patients/\<id\>" would be used to get a specific patient or to delete that specific patient<br>
**NOTE:**<br>
You can only delete specific items by giving *id* and you can only create a new item by accessing either collection ("/patients/\<id\>/exams" cannot be used to create a new exam for patient)
