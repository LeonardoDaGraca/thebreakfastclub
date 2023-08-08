import React from "react";
import { GrClose } from "react-icons/gr";

export const CreateExam = ({onClose}) => {
    return (
    
        <div
            className="border-2 p-1 md:p-3"
        >
            <div
                className="flex items-center justify-end p-1 px-1.5"
            >
                <button
                onClick={onClose}
                className="transform transition hover:translate-y-1 hover:scale-105 shadow-md shadow-[#060957] rounded-full text-gray-800 border-2 text-xs p-1 md:p-1.5"
                >
                <GrClose 
                    className=""  
                />
                </button>
            </div>
            <div
                className="px-2 py-1 md:px-6 md:py-3"
            >
                <h1
                    className="text-[#060957] text-sm md:text-xl font-bold font-ubuntu"
                >
                    Create Exam
                </h1>
                <hr
                    className="mt-4 border-0 border-b-2 border-gray-300"

                />
            </div>
            <form
                className="px-2 md:p-6"
            >
                <div
                    className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-6"
                >
                    <div
                        className="relative z-0 w-full mb-1 md:mb-6 group"
                    >
                        <input
                            type="text"
                            name="floating_first_name"
                            id="floating_first_name"
                            className="block py-2.5 px-0 w-full text-xs md:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required  
                        />
                        <label
                            className="peer-focus:font-medium absolute text-xs md:text-sm text-[#060957] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            First name
                        </label>
                    </div>
                    <div
                        className="relative z-0 w-full mb-1 md:mb-6 group"
                    >
                        <input
                            type="text"
                            name="floating_last_name"
                            id="floating_last_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required 
                            
                        />
                        <label
                            className="peer-focus:font-medium absolute text-xs md:text-sm text-[#060957] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Last name
                        </label>
                    </div>
                    <div
                        className="relative z-0 w-full mb-1 md:mb-6 group"
                    >
                        <input
                            type="text"
                            name="floating_patient_id"
                            id="floating_patient_id"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required  
                        />
                        <label
                            className="peer-focus:font-medium absolute text-xs md:text-sm text-[#060957] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Patient ID
                        </label>
                    </div>
                    <div
                        className="relative z-0 w-full mb-1 md:mb-6 group"
                    >
                        <input
                            type="text"
                            name="floating_exam_id"
                            id="floating_exam_id"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required 
                            
                        />
                        <label
                            className="peer-focus:font-medium absolute text-xs md:text-sm text-[#060957] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Exam ID
                        </label>
                    </div>
                    <div
                        className="relative z-0 w-full mb-1 md:mb-6 group"
                    >
                        <input
                            type="text"
                            name="floating_brixia_score"
                            id="floating_brixia_score"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required  
                        />
                        <label
                            className="peer-focus:font-medium absolute text-xs md:text-sm text-[#060957] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Brixia Score
                        </label>
                    </div>
                    <div
                        className="relative z-0 w-full mb-1 md:mb-6 group"
                    >
                        <input
                            type="text"
                            name="floating_age"
                            id="floating_age"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required 
                            
                        />
                        <label
                            className="peer-focus:font-medium absolute text-xs md:text-sm text-[#060957] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Age
                        </label>
                    </div>
                    <div
                        className="relative z-0 w-full mb-1 md:mb-6 group"
                    >
                        <input
                            type="text"
                            name="floating_sex"
                            id="floating_sex"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required 
                            
                        />
                        <label
                            className="peer-focus:font-medium absolute text-xs md:text-sm text-[#060957] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Sex
                        </label>
                    </div>
                    <div
                        className="relative z-0 w-full mb-1 md:mb-6 group"
                    >
                        <input
                            type="text"
                            name="floating_bmi"
                            id="floating_bmi"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required 
                            
                        />
                        <label
                            className="peer-focus:font-medium absolute text-xs md:text-sm text-[#060957] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            BMI
                        </label>
                    </div>
                    <div
                        className="relative z-0 w-full mb-1 md:mb-6 group"
                    >
                        <input
                            type="text"
                            name="floating_zip_code"
                            id="floating_zip_code"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required 
                            
                        />
                        <label
                            className="peer-focus:font-medium absolute text-xs md:text-sm text-[#060957] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Zip Code
                        </label>
                    </div>
                    {/* <div
                        className="relative z-0 w-full mb-1 md:mb-6 group"
                    >
                        <label
                            for="key_findings"
                            className="peer-focus:font-medium  text-xs md:text-sm text-[#060957]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Key Findings
                        </label>
                        <textarea
                            id="key_findings" rows="2"
                            className="block p-2.5 w-full mt-2 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Key Findings..."
                        >

                        </textarea>
                        <label
                            for="floating_key_findings"
                            className="peer-focus:font-medium absolute text-sm text-[#060957] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Key Findings
                        </label>

                        <textarea
                            type="text"
                            name="floating_key_findings"
                            id="floating_key_findings"
                            className="block  w-full text-sm text-gray-900 bg-transparent border-2  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="Key Findings... "
                            required 
                            
                        >
                        </textarea>    
                    </div>
                    <div
                        className="relative z-0 w-full mb-1 md:mb-6 group"
                    >
                        
                        <label
                            className=" text-xs md:mb-4 md:text-sm text-[#060957]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            for="exam_images"
                        >
                            Upload Image
                        </label>
                        <input
                            className="block w-full text-sm mt-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                            aria-describedby="exam_images_help"
                            id="exam_images"
                            type="file"

                        />
                        <div
                            className="mt-1 text-xs md:text-sm text-gray-500 "
                            id="exam_images_help"
                        >
                            A profile picture is useful to confirm your are logged into your account
                        </div>

                        <input
                            type="text"
                            name="floating_images"
                            id="floating_images"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required 
                            
                        />
                        <label
                            for="floating_images"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Images
                        </label>
                    </div> */}
                </div>
                <div
                    className="relative z-0 w-full mb-1 md:mb-6 group"
                >
                    <label
                        className="peer-focus:font-medium  text-xs md:text-sm text-[#060957]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Key Findings
                    </label>
                    <textarea
                        id="key_findings" rows="2"
                        className="block p-2.5 w-full mt-2 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Key Findings..."
                    >

                    </textarea>
                    {/* <label
                        for="floating_key_findings"
                        className="peer-focus:font-medium absolute text-sm text-[#060957] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Key Findings
                    </label>

                    <textarea
                        type="text"
                        name="floating_key_findings"
                        id="floating_key_findings"
                        className="block  w-full text-sm text-gray-900 bg-transparent border-2  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Key Findings... "
                        required 
                        
                    >
                    </textarea>     */}
                </div>
                <div
                    className="relative z-0 w-full mb-1 md:mb-6 group"
                >
                    
                    <label
                        className=" text-xs md:mb-4 md:text-sm text-[#060957]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Upload Image
                    </label>
                    <input
                        className="block w-full text-sm mt-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                        aria-describedby="exam_images_help"
                        id="exam_images"
                        type="file"

                    />
                    {/* <div
                        className="mt-1 text-xs md:text-sm text-gray-500 "
                        id="exam_images_help"
                    >
                        A profile picture is useful to confirm your are logged into your account
                    </div> */}

                    {/* <input
                        type="text"
                        name="floating_images"
                        id="floating_images"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required 
                        
                    />
                    <label
                        for="floating_images"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Images
                    </label> */}
                </div>
                
                
                <div className="flex justify-end py-2">
                    <button
                        type="submit"
                        className="mr-2 border text-white bg-red-700 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center font-bold font-ubuntu shadow-xl"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className=" border text-white bg-[#060957] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center font-bold font-ubuntu shadow-xl"
                    >
                        Submit
                    </button>
                    
                </div>
            </form>
        </div>
    )
}
