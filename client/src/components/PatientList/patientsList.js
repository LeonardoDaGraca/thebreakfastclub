import React from "react";

const PatientList = ({ data }) => {
  return (
    <table className="exams-container">
      <thead>
        <tr>
          <th>Patient ID</th>
          <th>Exam ID</th>
          <th>Images</th>
          <th>Key Findings</th>
          <th>Brixia Scores</th>
          <th>Age</th>
          <th>Sex</th>
          <th>BMI</th>
          <th>Zip Code</th>
        </tr>
      </thead>
      <tbody>
        {data.map(function (item) {
          return (
            <tr key={item._id}>
              <td>{item.patientId}</td>
              <td>{item.examId}</td>
              <td>
                <img src={item.imageURL} alt="images" className="images" />
              </td>
              <td>{item.keyFindings}</td>
              <td>{item.brixiaScores}</td>
              <td>{item.age}</td>
              <td>{item.sex}</td>
              <td>{item.bmi}</td>
              <td>{item.zipCode}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default PatientList;
