/*
 * Pedro Gutierrez Rincon
 * 01/29/2023
 * Accessing the mongodb database that is in the cloud (atlas service)
 */

const mongoose = require("mongoose");

//to connect to the mongodb database
const MONGO_URI =
  "mongodb+srv://rwuser:9ngCkMV9Ur1zYAqo@cluster0.5efdq.mongodb.net/techdive_2023?retryWrites=true&w=majority";

const parameters = {
  useNewUrlParser: true,
  useUnifiedTopology: true /*,
  useFindAndModify: true,*/,
};
const errorHandeling = (e) => {
  console.log("Failure at trying to connect to MongoDB Atrlas DB", e.message);
};
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI, parameters).catch(errorHandeling);

const db = mongoose.connection;

module.exports = db;
