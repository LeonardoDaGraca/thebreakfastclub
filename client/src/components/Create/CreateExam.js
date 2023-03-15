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
            
            <div className="flex justify-center  lg:p-10 lg:mt-36 2xl:p-20 2xl:mt-48">
                <form className="rounded-2xl shadow-2xl p-4  border-2 md:border md:shadow-blue-900 bg-gray-100 md:w-3/4 md:p-5 lg:w-full 2xl:p-20 2xl:w-full " action="" onSubmit={handleCreateExamSubmit}>
                    <h1 className="mb-2 text-black text-base font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-7xl">Create Exam</h1>
                        <br />
                        <div className="grid grid-cols-2 xl:gap-10 2xl:gap-20 border-2 ">
                            <div className="flex items-center xl: 2xl:justify-between" >
                                <label className="text-sm  md:text-base  lg:text-xl xl:w-1/3 xl:text-2xl 2xl:text-6xl border-2 " htmlFor="patientId">Patient ID</label>
                                <input className="xl:text-2xl 2xl:text-6xl" type="text" name="patientId" id="patientId" value={patientId} onChange={(e) => handleInputChanges(e)}/>
                            </div>
                            <div className="flex items-center 2xl:justify-between">
                                <label className="text-sm  md:text-base  lg:text-xl xl:w-1/3 xl:text-2xl 2xl:text-6xl border-2" htmlFor="daysImageDiagnosos">Days Since Dx</label>
                                <input className="xl:text-2xl 2xl:text-6xl" type="text" name="daysImageDiagnosos" id="daysImageDiagnosos" onChange={(e) => handleInputChanges(e)}/>
                            </div>
                            <div className="flex items-center 2xl:justify-between">
                                <label className="text-sm  md:text-base  lg:text-xl xl:w-1/3 xl:text-2xl 2xl:text-6xl border-2" htmlFor="hrsImageDiagnosis">Hrs Since Dx</label>
                                <input className="xl:text-2xl 2xl:text-6xl" type="text" name="hrsImageDiagnosis" id="hrsImageDiagnosis" onChange={(e) => handleInputChanges(e)}/>
                            </div>
                            <div className="flex items-center 2xl:justify-between">
                                <label className="text-sm  md:text-base  lg:text-xl xl:w-1/3 xl:text-2xl 2xl:text-6xl border-2" htmlFor="imageDescription">Decribe Image</label>
                                <input className="xl:text-2xl 2xl:text-6xl" type="text" name="imageDescription" id="imageDescription" onChange={(e) => handleInputChanges(e)}/>
                            </div>
                            <div className="flex items-center 2xl:justify-between">
                                <label className="text-sm  md:text-base  lg:text-xl xl:w-1/3 xl:text-2xl 2xl:text-6xl border-2" htmlFor="findings">Key Findings</label>
                                <input className="xl:text-2xl 2xl:text-6xl" type="text" name="findings" id="findings" onChange={(e) => handleInputChanges(e)}/>
                            </div>
                            <div className="flex items-center 2xl:justify-between">
                                <label className="text-sm  md:text-base  lg:text-xl xl:w-1/3 xl:text-2xl 2xl:text-6xl border-2" htmlFor="modality">Modality</label>
                                <input className="xl:text-2xl 2xl:text-6xl" type="text" name="modality" id="modality" onChange={(e) => handleInputChanges(e)}/>
                            </div>
                            <div className="flex items-center 2xl:justify-between">
                                <label className="text-sm  md:text-base  lg:text-xl xl:w-1/3 xl:text-2xl 2xl:text-6xl border-2" htmlFor="fio">Fio</label>
                                <input className="xl:text-2xl 2xl:text-6xl" type="text" name="fio" id="fio" onChange={(e) => handleInputChanges(e)}/>
                            </div>
                        </div>
                        <div className="flex justify-end xl:pt-10 xl:gap-4 2xl:pt-16 2xl:gap-8 ">
                            <button type="reset" className="  bg-red-600 text-zinc-50 font-bold shadow-lg rounded-lg px-3 py-1 lg:text-2xl xl:p-2.5 xl:text-xl 2xl:p-6 2xl:text-5xl 2xl:rounded-xl" onClick={redirectHome}>
                                Cancel
                            </button>
                            <button type="submit" className=" bg-blue-600 text-zinc-50 font-bold shadow-lg px-3 py-1 rounded-lg lg:text-2xl xl:p-2.5 xl:text-xl 2xl:p-6 2xl:text-5xl 2xl:rounded-xl">
                                Submit
                            </button>
                        </div>
                </form>
                
            </div>
            <Footer/>
            
        </>    
        
    )
}