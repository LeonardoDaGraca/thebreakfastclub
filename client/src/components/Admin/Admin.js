import './Admin.css';
// import { Navbar } from "../Navbar/Navbar";
// import { useApi } from "../../hooks/use-api";
import {useState, useEffect} from 'react';

// let data = require("../../data/exam-data.json");

// API endpoint for fetching ALL exam data: 
// https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams

// API endpoint for fetching SINGLE PT exam data: 
// https://czi-covid-lypkrzry4q-uc.a.run.app/api/patient/COVID-19-AR-16424082

export const Admin = () => {

// const data = useApi('exams');
// console.log('useApi: ', useApi('exams'));

    const [data, setData] = useState([]);
    const [localData, setLocalData] = useState([]);

    useEffect(() => {
      fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams')
        .then(res => res.json())
        .then(res => setData(res.exams))
        .catch(error => console.error('Error:', error));
    }, []);

    // useEffect(() => {
    //   localStorage.setItem('localData', JSON.stringify(data));
    // }, [data]);
    

    // const removeToDo = (id) => {
    //     const updatedToDoList = toDoList.filter(
    //       (todo) => todo.id !== id
    //       );

    const handleUpdate = () => {
        // do something
    }

    const handleDelete = (id) => {
        const examArr = JSON.parse(localStorage.getItem('data'));
        const updatedExamArr = examArr.filter((exam) => exam.id !== id);
        localStorage.setItem('localData', JSON.stringify(updatedExamArr));
    }

    return (
        <>

            <table className='admin'>
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Exam ID</th>
                        <th>Key Findings</th>
                        <th>Brixia Scores</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>BMI</th>
                        <th>Zip Code</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(function (item) {
                        return (
                            <tr key={item.patientId + item.examId}>
                                <td>{item.patientId}</td>
                                <td>{item.examId}</td>
                                <td>{item.keyFindings}</td>
                                <td>{item.brixiaScores}</td>
                                <td>{item.age}</td>
                                <td>{item.sex}</td>
                                <td>{item.bmi}</td>
                                <td>{item.zipCode}</td>
                                <td><button className="admin-button">Update</button></td>
                                <td><button className="admin-button">Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
};