import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";

export const CreateExam = ({ patientId, open, onClose }) => {
  const [formData, setFormData] = useState({
    patientId: "",
    daysImageDiagnosos: "",
    hrsImageDiagnosis: "",
    imageDescription: "",
    findings: "",
    modality: "",
    fio: "",
  });

  // redirect to the home page on cancellation/submission of create exam
  let navigate = useNavigate();
  const redirectHome = () => {
    let path = `/`;
    navigate(path);
  };

  const handleInputChanges = (e) => {
    // with multiple entries in a form, e.target = []
    console.log(`${e.target.name}: ${e.target.value}`);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateExamSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch(`http://localhost:9000/api/exams`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.status);
          redirectHome();
        }
      })
      .catch((err) => console.error(err));
  };
  if (!open) return null;

  return (
    <>
      <div className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm ">
        <div className=" bg-white rounded-xl shadow-lg overflow-y-auto w-5/6 2xl:w-3/4 ">
          <div className="flex items-center justify-end p-3">
            <button
              onClick={onClose}
              className="transform transition hover:translate-y-1 hover:scale-105 shadow-md shadow-[#060957] rounded-full text-gray-800 border-2 p-1.5 md:p-2 text-xs font-bold lg:text-sm 2xl:text-base"
            >
              <GrClose className="" />
            </button>
          </div>
          <div className="flex justify-center items-center w-full h-auto ">
            <form
              className="w-full p-2 md:p-3 lg:p-4 xl:p-4 2xl:p-6"
              action=""
              onSubmit={handleCreateExamSubmit}
            >
              <h1 className=" font-bold  text-[#393939] text-lg  md:text-xl lg:text-xl  2xl:text-2xl">
                Create Exam
              </h1>
              <hr className="" />
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 py-3 md:gap-4 md:py-4 lg:gap-6 lg:py-6 xl:py-6 xl:gap-6">
                <div className="flex items-center justify-between ">
                  <label
                    className="lg:text-base xl:text-xl 2xl:text-2xl  2xl:w-1/3"
                    htmlFor="patientId"
                  >
                    Patient ID
                  </label>
                  <input
                    className="border-2 lg:text-base xl:text-xl 2xl:text-2xl"
                    type="text"
                    name="patientId"
                    id="patientId"
                    value={patientId}
                    onChange={(e) => handleInputChanges(e)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label
                    className="lg:text-base xl:text-xl 2xl:text-2xl  2xl:w-1/3"
                    htmlFor="daysImageDiagnosos"
                  >
                    Days Since Dx
                  </label>
                  <input
                    className="border-2 lg:text-base xl:text-xl 2xl:text-2xl"
                    type="text"
                    name="daysImageDiagnosos"
                    id="daysImageDiagnosos"
                    onChange={(e) => handleInputChanges(e)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label
                    className="lg:text-base xl:text-xl 2xl:text-2xl  2xl:w-1/3"
                    htmlFor="hrsImageDiagnosis"
                  >
                    Hrs Since Dx
                  </label>
                  <input
                    className="border-2 lg:text-base xl:text-xl 2xl:text-2xl"
                    type="text"
                    name="hrsImageDiagnosis"
                    id="hrsImageDiagnosis"
                    onChange={(e) => handleInputChanges(e)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label
                    className="lg:text-base xl:text-xl 2xl:text-2xl  2xl:w-1/3"
                    htmlFor="imageDescription"
                  >
                    Decribe Image
                  </label>
                  <input
                    className="border-2 lg:text-base xl:text-xl 2xl:text-2xl"
                    type="text"
                    name="imageDescription"
                    id="imageDescription"
                    onChange={(e) => handleInputChanges(e)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label
                    className="lg:text-base xl:text-xl 2xl:text-2xl  2xl:w-1/3"
                    htmlFor="modality"
                  >
                    Modality
                  </label>
                  <input
                    className="border-2 lg:text-base xl:text-xl 2xl:text-2xl"
                    type="text"
                    name="modality"
                    id="modality"
                    onChange={(e) => handleInputChanges(e)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label
                    className="lg:text-base xl:text-xl 2xl:text-2xl  2xl:w-1/3"
                    htmlFor="fio"
                  >
                    Fio
                  </label>
                  <input
                    className="border-2 lg:text-base xl:text-xl 2xl:text-2xl"
                    type="text"
                    name="fio"
                    id="fio"
                    onChange={(e) => handleInputChanges(e)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label
                    className="lg:text-base xl:text-xl 2xl:text-2xl  2xl:w-1/3 "
                    htmlFor="findings"
                  >
                    Key Findings
                  </label>
                  <input
                    className="border-2 lg:text-base xl:text-xl 2xl:text-2xl"
                    type="text"
                    name="findings"
                    id="findings"
                    onChange={(e) => handleInputChanges(e)}
                  />
                </div>
              </div>
              <div className="flex justify-end py-3 gap-2 md:py-2 xl:gap-3 2xl:gap-4">
                <button
                  type="reset"
                  className="bg-red-600 shadow-lg rounded-lg font-bold text-[#ffffff] px-2 py-1 text-sm md:px-2.5 md:py-0.5 md:text-base lg:px-2 lg:py-0.5 lg:text-lg xl:px-2.5 xl:py-1 xl:text-xl 2xl:px-2.5 2xl:py-1.5 2xl:text-2xl"
                  onClick={redirectHome}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#060957] shadow-lg rounded-lg font-bold text-[#ffffff] px-2 py-1 text-sm md:px-2.5 md:py-0.5 md:text-base lg:px-2 lg:py-0.5 lg:text-lg xl:px-2.5 xl:py-1 xl:text-xl 2xl:px-2.5 2xl:py-1.5 2xl:text-2xl"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
