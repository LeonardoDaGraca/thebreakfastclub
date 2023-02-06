import './Admin.css';
import { Navbar } from "../Navbar/Navbar";

let data = require("../../data/exam-data.json");

export const Admin = () => {
    return (
        <>
        
            <table className='admin'>
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Zip</th>
                        <th>BMI</th>
                        <th>Weight</th>
                        <th>Image</th>
                        <th>Exam ID</th>
                        <th>ICU Admission</th>
                        <th>ICU Length of Stay</th>
                        <th>Mortality</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(function (item) {
                    return (
                        <tr>
                            <td>{item.patient_id}</td>
                            <td>{item.age}</td>
                            <td>{item.sex}</td>
                            <td>{item.zip}</td>
                            <td>{item.latest_bmi}</td>
                            <td>{item.latest_weight}</td>
                            <td>{item.images}</td>
                            <td>{item.exam_Id}</td>
                            <td>{item.icu_admit}</td>
                            <td>{item.icu_admit_times}</td>
                            <td>{item.mortality}</td>
                        </tr>
                        // <li key={item.patient_id}>
                        //     <span>{item.patient_id}</span>
                        //     <span>{item.age}</span>
                        //     <span>{item.sex}</span>
                        //     <span>{item.zip}</span>
                        //     <span>{item.latest_bmi}</span>
                        //     <span>{item.latest_weight}</span>
                        //     <span>{item.images}</span>
                        //     <span>{item.exam_Id}</span>
                        //     <span>{item.icu_admit}</span>
                        //     <span>{item.icu_admit_times}</span>
                        //     <span>{item.mortality}</span>
                        //     <button>Update</button>
                        //     <button>Delete</button>
                        // </li>
                    )
                })}
                </tbody>
            </table>
        </>
    )
};