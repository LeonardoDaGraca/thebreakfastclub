import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";

export const EditPopUp = ({
  currentExam,
  onClose,
  visible,
  isVisible,
  open,
  isOpen,
  patientId,
}) => {
  const [updateFormData, setUpdateFormData] = useState({
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
    setUpdateFormData({
      ...updateFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateSubmit = (e, id) => {
    e.preventDefault();
    fetch(`http://localhost:9000/api/exams/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateFormData),
    })
      // .then((res) => console.log(res))
      .then((res) => {
        if (res.status === 200) {
          console.log(res.status);
          isOpen(false);
        } else {
          console.error("Form Submission Not Successful");
        }
      })
      .catch((err) => console.error(err));
  };
  //   if (!visible) return null;
  if (!open) return null;

  return (
    <div className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm lg:px-16 xl:px-16 2xl:px-20">
      <div className="bg-white w-full rounded-xl shadow-lg p-2 pt-3 overflow-y-auto h-1/2  ">
        <div className="flex items-center justify-end md:p-3 ">
          <button
            onClick={onClose}
            className="transform transition hover:translate-y-1 hover:scale-105 shadow-lg rounded-full text-gray-800 border-2 text-xs p-1 md:text-sm md:p-1.5 lg:text-base lg:p-1.5  xl:font-bold xl:p-2  2xl:font-bold 2xl:p-2"
          >
            <GrClose className="" />
          </button>
        </div>
        <div className="h-5/6 md:py-2 md:px-8 lg:py-4 lg:px-6 ">
          <div className="mb-2 md:mb-4 ">
            <h1 className="text-sm font-semibold  text-[#393939] md:text-xl lg:text-xl  2xl:text-3xl">
              Edit Exam
            </h1>
            <hr className="border-b border-gray-400 " />
          </div>
          <div className="h-5/6">
            <form
              className="p-2 h-full"
              action=""
              onSubmit={(e, id) => {
                handleUpdateSubmit(e, currentExam._id);
              }}
            >
              <div className="grid justify-items-start items-center grid-cols-1 h-5/6  md:grid-cols-2 gap-4 gap-y-5 md:gap-6 md:gap-y-10 lg:gap-6 xl:gap-10 2xl:gap-12">
                <div className="flex justify-between items-center w-full">
                  <label
                    className="w-1/2 text-start text-sm md:text-lg lg:text-2xl"
                    htmlFor="patientId"
                  >
                    Patient ID
                  </label>
                  <input
                    className="border border-gray-300 w-4/6 pl-1 text-xs md:text-base lg:text-xl"
                    type="text"
                    name="patientId"
                    id="patientId"
                    value={patientId}
                    onChange={(e) => handleInputChanges(e)}
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <label
                    className="text-start w-1/2 text-sm md:text-lg lg:text-2xl"
                    htmlFor="daysImageDiagnosos"
                  >
                    Days Since Dx
                  </label>
                  <input
                    className="border border-gray-300 w-4/6 pl-1 text-xs md:text-lg lg:text-xl"
                    type="text"
                    name="daysImageDiagnosos"
                    id="daysImageDiagnosos"
                    onChange={(e) => handleInputChanges(e)}
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <label
                    className="w-1/2 text-start text-sm md:text-lg lg:text-2xl"
                    htmlFor="hrsImageDiagnosis"
                  >
                    Hrs Since Dx
                  </label>
                  <input
                    className="border border-gray-300 w-4/6 pl-1 text-xs md:text-lg lg:text-xl"
                    type="text"
                    name="hrsImageDiagnosis"
                    id="hrsImageDiagnosis"
                    onChange={(e) => handleInputChanges(e)}
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <label
                    className="text-start w-1/2 text-sm md:text-lg lg:text-2xl"
                    htmlFor="imageDescription"
                  >
                    Decribe Image
                  </label>
                  <input
                    className="border border-gray-300 w-4/6 pl-1 text-xs md:text-lg lg:text-xl"
                    type="text"
                    name="imageDescription"
                    id="imageDescription"
                    onChange={(e) => handleInputChanges(e)}
                  />
                </div>

                <div className="flex justify-between items-center w-full">
                  <label
                    className="w-1/2 text-start text-sm md:text-lg lg:text-2xl"
                    htmlFor="modality"
                  >
                    Modality
                  </label>
                  <input
                    className="border border-gray-300 w-4/6 pl-1 text-xs md:text-lg lg:text-xl"
                    type="text"
                    name="modality"
                    id="modality"
                    onChange={(e) => handleInputChanges(e)}
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <label
                    className="w-1/2 text-start text-sm md:text-lg lg:text-2xl"
                    htmlFor="fio"
                  >
                    Fio
                  </label>
                  <input
                    className="border border-gray-300 w-4/6 pl-1 text-xs md:text-lg lg:text-xl"
                    type="text"
                    name="fio"
                    id="fio"
                    onChange={(e) => handleInputChanges(e)}
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <label
                    className="w-1/2 text-start text-sm md:text-lg lg:text-2xl"
                    htmlFor="findings"
                  >
                    Key Findings
                  </label>
                  <input
                    className="border border-gray-300 w-4/6 pl-1 text-xs md:text-lg lg:text-xl"
                    type="text"
                    name="findings"
                    id="findings"
                    onChange={(e) => handleInputChanges(e)}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-x-1 md:gap-x-2 lg:gap-x-4 mt-16">
                <button
                  type="reset"
                  className="bg-red-600 shadow-md shadow-[#060957] border border-[#ffffff] rounded-lg font-bold text-[#ffffff] px-2 py-1 text-sm md:px-2.5 md:py-0.5 md:text-base lg:px-2 lg:py-0.5 lg:text-lg xl:px-2.5 xl:py-1 xl:text-xl 2xl:px-2.5 2xl:py-1.5 2xl:text-2xl"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#060957] shadow-md shadow-[#060957] border border-[#ffffff] rounded-lg font-bold text-[#ffffff] px-2 py-1 text-sm md:px-2.5 md:py-0.5 md:text-base lg:px-2 lg:py-0.5 lg:text-lg xl:px-2.5 xl:py-1 xl:text-xl 2xl:px-2.5 2xl:py-1.5 2xl:text-2xl"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
