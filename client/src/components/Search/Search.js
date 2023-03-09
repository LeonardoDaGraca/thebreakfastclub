import React from "react";
import {useState, useEffect} from 'react';
let data = require("../../data/exam-data.json");



export const Search = () => {
   const [query, setQuery] = useState("");
   const [data, setData] =useState([])
//    useEffect(() => {
//     fetch("https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams")
//       .then((res) => res.json())
//       .then((res) => setData(res.exams))
//       .catch((error) => console.error("Error:", error));
//   }, []);

  const patients = data
//   console.log(patients)
    const getFilterdPatients = (query, patients) =>{
        if(!query){
            return patients
        }
        return patients.filter(patient => patient.patientId.includes(query))
    }

 const filteredPatients = getFilterdPatients(query, patients);
console.log(filteredPatients)


// if user input matches patientID add a class of hide to the patient Row or set display equals none
// Create the form

    return (
        <>
    {/* Search bar */}
      <div className="search-container">
      <form action="/" method="get">  
       <input 
       id= "btn" 
       type="text" 
       name ='search' 
       onChange= {e => setQuery(e.target.value)}
      placeholder="Search Exams"/>
    </form>
    
     </div>
        
    </>
    )
}
