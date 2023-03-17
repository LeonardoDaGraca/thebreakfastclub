import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";

export const EditPopUp = ({open, onClose, patientId}) => {
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
        <div className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm lg:px-16 xl:px-16 2xl:px-20">
            <div className="bg-white rounded-xl shadow-lg p-2 pt-3 overflow-y-auto h-3/4 w-11/12 md:h-2/5 lg:h-3/5 lg:w-full xl:h-2/3">
                <div className="flex items-center justify-end xl:p-2 2xl:p-6">
                    <button
                        onClick={onClose}
                        className="transform transition hover:translate-y-1 hover:scale-105 shadow-lg rounded-full text-gray-800 border-2 text-sm p-1 md:text-sm md:p-1 lg:text-base lg:p-1.5 xl:text-xl xl:font-bold xl:p-2 2xl:text-4xl 2xl:font-bold 2xl:p-6"
                    >
                        <GrClose className=""  />
                     </button>
                </div>
                <div className="h-5/6 pt-2  md:py-2 lg:px-6 lg:py-4">
                    <div className="mb-2">
                        <h1 className="text-black font-bold text-base py-2 md:text-lg lg:text-xl lg:py-2 xl:text-4xl xl:py-3 2xl:text-7xl 2xl:py-4">
                            Edit Exam
                        </h1>
                            <hr className="border-b border-gray-400 " />
                    </div>
                    <div className="h-5/6">
                        <form
                            className="p-2 h-full"
                            action=""
                            onSubmit={handleCreateExamSubmit}
                        >
                            <div className="grid justify-items-start items-center grid-cols-1 h-5/6 md:grid-cols-2 md:gap-3 lg:gap-6 xl:gap-8 2xl:gap-10">
                                <div className="flex justify-between items-center w-full">
                                    <label
                                        className="text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-6xl"
                                        htmlFor="patientId"
                                    >
                                        Patient ID
                                    </label>
                                    <input
                                        className="border border-gray-300 text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-6xl"
                                        type="text"
                                        name="patientId"
                                        id="patientId"
                                        value={patientId}
                                        onChange={(e) => handleInputChanges(e)}
                                    />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <label
                                        className="text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-6xl"
                                        htmlFor="daysImageDiagnosos"
                                    >
                                        Days Since Dx
                                    </label>
                                    <input
                                        className="border border-gray-300 text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-6xl"
                                        type="text"
                                        name="daysImageDiagnosos"
                                        id="daysImageDiagnosos"
                                        onChange={(e) => handleInputChanges(e)}
                                    />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <label
                                        className="text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-6xl"
                                        htmlFor="hrsImageDiagnosis"
                                    >
                                        Hrs Since Dx
                                    </label>
                                    <input
                                        className="border border-gray-300 text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-6xl"
                                        type="text"
                                        name="hrsImageDiagnosis"
                                        id="hrsImageDiagnosis"
                                        onChange={(e) => handleInputChanges(e)}
                                    />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <label
                                        className="text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-6xl"
                                        htmlFor="imageDescription"
                                    >
                                        Decribe Image
                                    </label>
                                    <input
                                        className="border border-gray-300 text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-6xl"
                                        type="text"
                                        name="imageDescription"
                                        id="imageDescription"
                                        onChange={(e) => handleInputChanges(e)}
                                    />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <label
                                        className="text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-6xl"
                                        htmlFor="findings"
                                    >
                                        Key Findings
                                    </label>
                                    <input
                                        className="border border-gray-300 text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-6xl"
                                        type="text"
                                        name="findings"
                                        id="findings"
                                        onChange={(e) => handleInputChanges(e)}
                                    />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <label
                                        className="text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-6xl"
                                        htmlFor="modality"
                                    >
                                        Modality
                                    </label>
                                    <input
                                        className="border border-gray-300 text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-6xl"
                                        type="text"
                                        name="modality"
                                        id="modality"
                                        onChange={(e) => handleInputChanges(e)}
                                    />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <label
                                        className="text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-6xl"
                                        htmlFor="fio"
                                    >
                                        Fio
                                    </label>
                                    <input
                                        className="border border-gray-300 text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-6xl"
                                        type="text"
                                        name="fio"
                                        id="fio"
                                        onChange={(e) => handleInputChanges(e)}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end pb-1 pt-6 gap-1.5 md:pb-1.5 md:pt-5 md:gap-2 lg:pb-2 lg:pt-5 lg:gap-3 xl:pb-2 xl:pt-6 xl:gap-4 2xl:pt-36 2xl:gap-8 ">
                                <button
                                    type="reset"
                                    className="bg-red-600 text-zinc-50 font-bold shadow-xl rounded-lg text-sm px-2 p-1.5 transform transition hover:translate-y-1 hover:scale-105 md:px-2 md:p-1.5 md:text-base lg:px-2.5 lg:py-1.5 lg:text-lg xl:px-3 xl:py-2.5 xl:text-2xl 2xl:px-5 2xl:py-6 2xl:text-5xl 2xl:rounded-xl"
                                    onClick={redirectHome}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-zinc-50 font-bold shadow-xl rounded-lg text-sm px-2 p-1.5 transform transition hover:translate-y-1 hover:scale-105 md:px-2 md:p-1.5 md:text-base lg:px-2.5 lg:py-1.5 lg:text-lg xl:px-3 xl:py-2.5 xl:text-2xl 2xl:px-5 2xl:py-6 2xl:text-5xl 2xl:rounded-xl"
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

