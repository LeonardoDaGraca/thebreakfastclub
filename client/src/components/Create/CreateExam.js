import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export const CreateExam = ({patientId}) => {
    const [formData, setFormData] = useState({
        patientId: '',
        daysImageDiagnosos: '',
        hrsImageDiagnosis: '',
        imageDescription: '',
        findings: '',
        modality: '',
        fio: '',
      });
      
   // redirect to the home page on cancellation/submission of create exam
    let navigate = useNavigate(); 
    const redirectHome = () =>{ 
      let path = `/`; 
      navigate(path);
    }

    const handleInputChanges = (e) => {
        // with multiple entries in a form, e.target = []
        console.log(`${e.target.name}: ${e.target.value}`);
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            })
    }

    const handleCreateExamSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        fetch(`http://localhost:9000/api/exams`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
              },
            body:  JSON.stringify(formData),
        })
        .then((res) => {
            if (res.status === 200) {
                console.log(res.status);
                redirectHome();
            }})
        .catch((err) => console.error(err))
    }

    return (
        <>     
            <Navbar />  
            
            <div className="flex justify-center p-3 mt-28 md:p-4 md:mt-36 lg:p-6 lg:mt-32 xl:p-10 xl:mt-36 2xl:p-20 2xl:mt-48">
                <form className="rounded-2xl shadow-2xl border-2 shadow-blue-900 bg-gray-100 w-full p-4 md:w-full md:p-6 lg:p-8 lg:w-full xl:p-10 2xl:p-16 2xl:w-full " action="" onSubmit={handleCreateExamSubmit}>
                    <h1 className=" text-black font-bold text-base mb-2.5 md:text-xl md:mb-2 lg:text-2xl lg:mb-2 xl:text-3xl xl:mb-4 2xl:text-7xl 2xl:mb-8">Create Exam</h1>
                       
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:gap-7 xl:gap-10 2xl:gap-24">
                            <div className="flex items-center xl: 2xl:justify-between" >
                                <label className="w-1/2 text-base md:w-1/2 md:text-base lg:w-1/3 lg:text-xl xl:w-1/3 xl:text-2xl 2xl:w-1/2 2xl:text-6xl" htmlFor="patientId">Patient ID</label>
                                <input className="md:text-base lg:text-xl xl:text-2xl 2xl:text-6xl border border-gray-300" type="text" name="patientId" id="patientId" value={patientId} onChange={(e) => handleInputChanges(e)}/>
                            </div>
                            <div className="flex items-center 2xl:justify-between">
                                <label className="w-1/2 text-base md:w-1/2 md:text-base lg:w-1/3 lg:text-xl xl:w-1/3 xl:text-2xl 2xl:w-1/2 2xl:text-6xl" htmlFor="daysImageDiagnosos">Days Since Dx</label>
                                <input className="md:text-base lg:text-xl xl:text-2xl 2xl:text-6xl border border-gray-300" type="text" name="daysImageDiagnosos" id="daysImageDiagnosos" onChange={(e) => handleInputChanges(e)}/>
                            </div>
                            <div className="flex items-center 2xl:justify-between">
                                <label className="w-1/2 text-base md:w-1/2 md:text-base lg:w-1/3 lg:text-xl xl:w-1/3 xl:text-2xl 2xl:w-1/2 2xl:text-6xl" htmlFor="hrsImageDiagnosis">Hrs Since Dx</label>
                                <input className="md:text-base lg:text-xl xl:text-2xl 2xl:text-6xl border border-gray-300" type="text" name="hrsImageDiagnosis" id="hrsImageDiagnosis" onChange={(e) => handleInputChanges(e)}/>
                            </div>
                            <div className="flex items-center 2xl:justify-between">
                                <label className="w-1/2 text-base md:w-1/2 md:text-base lg:w-1/3 lg:text-xl xl:w-1/3 xl:text-2xl 2xl:w-1/2 2xl:text-6xl" htmlFor="imageDescription">Decribe Image</label>
                                <input className="md:text-base lg:text-xl xl:text-2xl 2xl:text-6xl border border-gray-300" type="text" name="imageDescription" id="imageDescription" onChange={(e) => handleInputChanges(e)}/>
                            </div>
                            <div className="flex items-center 2xl:justify-between">
                                <label className="w-1/2 text-base md:w-1/2 md:text-base lg:w-1/3 lg:text-xl xl:w-1/3 xl:text-2xl 2xl:w-1/2 2xl:text-6xl" htmlFor="findings">Key Findings</label>
                                <input className="md:text-base lg:text-xl xl:text-2xl 2xl:text-6xl border border-gray-300" type="text" name="findings" id="findings" onChange={(e) => handleInputChanges(e)}/>
                            </div>
                            <div className="flex items-center 2xl:justify-between">
                                <label className="w-1/2 text-base md:w-1/2 md:text-base lg:w-1/3 lg:text-xl xl:w-1/3 xl:text-2xl 2xl:w-1/2 2xl:text-6xl" htmlFor="modality">Modality</label>
                                <input className="md:text-base lg:text-xl xl:text-2xl 2xl:text-6xl border border-gray-300" type="text" name="modality" id="modality" onChange={(e) => handleInputChanges(e)}/>
                            </div>
                            <div className="flex items-center 2xl:justify-between">
                                <label className="w-1/2 text-base md:w-1/2 md:text-base lg:w-1/3 lg:text-xl xl:w-1/3 xl:text-2xl 2xl:w-1/2 2xl:text-6xl" htmlFor="fio">Fio</label>
                                <input className="md:text-base lg:text-xl xl:text-2xl 2xl:text-6xl border border-gray-300" type="text" name="fio" id="fio" onChange={(e) => handleInputChanges(e)}/>
                            </div>
                        </div>
                        <div className="flex justify-end pb-1 pt-8 gap-1.5 md:pb-1.5 md:pt-5 md:gap-2 lg:pb-2 lg:pt-5 lg:gap-3 xl:pb-2 xl:pt-10 xl:gap-4 2xl:pt-16 2xl:gap-8 ">
                            <button type="reset" className="bg-red-600 text-zinc-50 font-bold shadow-lg rounded-lg text-sm px-2 p-1.5 md:px-2 md:p-1.5 md:text-base lg:px-2.5 lg:py-1.5 lg:text-lg xl:px-3 xl:py-2.5 xl:text-2xl 2xl:px-5 2xl:py-6 2xl:text-5xl 2xl:rounded-xl" onClick={redirectHome}>
                                Cancel
                            </button>
                            <button type="submit" className="bg-blue-600 text-zinc-50 font-bold shadow-lg rounded-lg text-sm px-2 p-1.5 md:px-2 md:p-1.5 md:text-base lg:px-2.5 lg:py-1.5 lg:text-lg xl:px-3 xl:py-2.5 xl:text-2xl 2xl:px-5 2xl:py-6 2xl:text-5xl 2xl:rounded-xl">
                                Submit
                            </button>
                        </div>
                </form>
                
            </div>
            <Footer/>
            
        </>    
        
    )
}