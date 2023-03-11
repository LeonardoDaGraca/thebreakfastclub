import {useEffect, useState} from "react"
import { Footer } from "../Footer/Footer"
import { useNavigate } from "react-router-dom";


export const Update = ({exam, onClose, visible}) => {
    const [updateFormData, setUpdateFormData] = useState({
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

    if (!visible) return null;

    const handleInputChanges = (e) => {
        // with multiple entries in a form, e.target = []
        console.log(`${e.target.name}: ${e.target.value}`);
            setUpdateFormData({
                ...updateFormData,
                [e.target.name]: e.target.value,
            })
    }

    // need an update component to render to accept input to update the appropriate fields***

    const handleUpdateSubmit = (e, id) => {
        e.preventDefault();
        fetch(`http://localhost:9000/api/exams/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
              },
            body:  JSON.stringify(updateFormData),
        })
        // .then((res) => console.log(res))
        .then((res) => {
            if (res.status === 200) {
                console.log(res.status);
            } else {
                console.error('Form Submission Not Successful')
            }
        })
        .then(redirectHome())
        // .then(() => setFormData({
        //     patientId: '',
        //     daysImageDiagnosos: '',
        //     hrsImageDiagnosis: '',
        //     imageDescription: '',
        //     findings: '',
        //     modality: '',
        //     fio: '',
        // }))
        .catch((err) => console.error(err))
    }

    return (
        <>          
            <div className="flex justify-center p-2 mt-10 md:mt-36 md:my-10  md:mx-auto ">
                <form className="p-4 space-y-4 rounded-lg shadow-2xl border-2 md:border md:shadow-blue-900 bg-gray-100 md:w-3/4 md:p-5" action="" onSubmit={(e, id) => {handleUpdateSubmit(e, exam._id); redirectHome();}}>
                    <h1 className="mb-2 text-black text-base md:text-xl lg:text-2xl font-bold ">Update Exam</h1>

                    <div className="space-y-3 md:flex md:space-y-0">
                        {/* <div className='flex items-center px-4 ' style={{ display: 'none'}}>
                            <h1 className="text-base font-bold   w-24">Exam ID</h1>
                            <p className="text-base font-medium text-blue-600 hover:font-bold hover:underline ">{exam._id}</p>
                        </div> */}
                        <div className="flex  items-center md:w-1/2">
                            <label className="text-sm w-24 md:text-base md:w-24 lg:text-xl" htmlFor="patientId">Patient ID</label>
                            <input className="border-2 border-gray-200 focus:outline-none lg:text-xl" type="text" name="patientId" id="patientId" onChange={(e) => handleInputChanges(e)}/>
                        </div>
                    </div>

                    <div className="space-y-3 md:space-y-0 md:flex ">
                        <div className="flex  items-center md:w-1/2">
                            <label className="text-sm w-24 md:text-base md:w-24 lg:text-xl" htmlFor="daysImageDiagnosos">Days Since Dx</label>
                            <input className="border-2 border-gray-200 focus:outline-none lg:text-xl" type="text" name="daysImageDiagnosos" id="daysImageDiagnosos" onChange={(e) => handleInputChanges(e)}/>
                        </div>
                        <div className="flex  items-center md:w-1/2">
                            <label className="text-sm w-24 md:text-base md:w-24 lg:text-xl" htmlFor="hrsImageDiagnosis">Hrs Since Dx</label>
                            <input className="border-2 border-gray-200 focus:outline-none lg:text-xl" type="text" name="hrsImageDiagnosis" id="hrsImageDiagnosis" onChange={(e) => handleInputChanges(e)}/>
                        </div>
                    </div>
                    
                    <div className="space-y-3 md:space-y-0 md:flex ">
                        <div className="flex  items-center md:w-1/2">
                            <label className="text-sm w-24 md:text-base md:w-24 lg:text-xl" htmlFor="imageDescription">Describe Image</label>
                            <input className="border-2 border-gray-200 focus:outline-none lg:text-xl" type="text" name="imageDescription" id="imageDescription" onChange={(e) => handleInputChanges(e)}/>
                        </div>
                        <div className="flex  items-center md:w-1/2">
                            <label className="text-sm w-24 md:text-base md:w-24 lg:text-xl" htmlFor="findings">Key Findings</label>
                            <input className="border-2 border-gray-200 focus:outline-none lg:text-xl" type="text" name="findings" id="findings" onChange={(e) => handleInputChanges(e)}/>
                        </div>
                    </div>

                    <div className="space-y-3 md:space-y-0 md:flex ">
                        <div className="flex  items-center md:w-1/2">
                            <label className="text-sm w-24 md:text-base md:w-24 lg:text-xl" htmlFor="modality">Modality</label>
                            <input className="border-2 border-gray-200 focus:outline-none lg:text-xl" type="text" name="modality" id="modality" onChange={(e) => handleInputChanges(e)}/>
                        </div>
                        <div className="flex  items-center md:w-1/2">
                            <label className="text-sm w-24 md:text-base md:w-24 lg:text-xl" htmlFor="fio">Fio</label>
                            <input className="border-2 border-gray-200 focus:outline-none lg:text-xl" type="text" name="fio" id="fio" onChange={(e) => handleInputChanges(e)}/>
                        </div>
                    </div>

                    <div className="flex justify-end  ">
                        <button className=" px-3 py-1 rounded-full mr-3 bg-red-600 text-zinc-50 font-bold shadow-lg md:px-4 md:py-2 md:rounded-lg" onClick={onClose}>
                            Cancel
                        </button>
                        <button className="px-3 py-1 rounded-full bg-blue-600 text-zinc-50 font-bold shadow-lg md:px-4 md:py-2 md:rounded-lg">
                            Submit
                        </button>
                </div>
                </form>
                
            </div>
            <Footer/>
            
        </>
        
        
        
    )
}