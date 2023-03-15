import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export const CreateExamForm = () => {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center p-2 mt-10 md:mt-36 md:my-10  md:mx-auto ">
        <form
          className="p-4 space-y-4 rounded-lg shadow-2xl border-2 md:border md:shadow-blue-900 bg-gray-100 md:w-3/4 md:p-5"
          action=""
        >
          <h1 className="mb-2 text-black text-base md:text-xl lg:text-2xl font-bold ">
            Create Exam
          </h1>

          <div className="space-y-3 md:flex md:space-y-0">
            <div className="flex  items-center md:w-1/2">
              <label
                className="text-sm w-24 md:text-base md:w-24 lg:text-xl"
                for="firstname"
              >
                First Name
              </label>
              <input
                className="border-2 border-gray-200 focus:outline-none lg:text-xl"
                type="text"
                name="firstname"
                id="firstname"
              />
            </div>
            <div className="flex  items-center md:w-1/2">
              <label
                className="text-sm w-24 md:text-base md:w-24 lg:text-xl"
                for="lastname"
              >
                Last Name
              </label>
              <input
                className="border-2 border-gray-200 focus:outline-none lg:text-xl"
                type="text"
                name="lastname"
                id="lastname"
              />
            </div>
          </div>

          <div className="space-y-3 md:space-y-0 md:flex ">
            <div className="flex  items-center md:w-1/2">
              <label
                className="text-sm w-24 md:text-base md:w-24 lg:text-xl"
                for="patient-id"
              >
                Patient ID
              </label>
              <input
                className="border-2 border-gray-200 focus:outline-none lg:text-xl"
                type="text"
                name="patient-id"
                id="patient-id"
              />
            </div>
            <div className="flex  items-center md:w-1/2">
              <label
                className="text-sm w-24 md:text-base md:w-24 lg:text-xl"
                for="exam-id"
              >
                Exam ID
              </label>
              <input
                className="border-2 border-gray-200 focus:outline-none lg:text-xl"
                type="text"
                name="exam-id"
                id="exam-id"
              />
            </div>
          </div>

          <div className="space-y-3 md:space-y-0 md:flex ">
            <div className="flex  items-center md:w-1/2">
              <label
                className="text-sm w-24 md:text-base md:w-24 lg:text-xl"
                for="keyfindings"
              >
                Key Findings
              </label>
              <input
                className="border-2 border-gray-200 focus:outline-none lg:text-xl"
                type="text"
                name="keyfindings"
                id="keyfindings"
              />
            </div>
            <div className="flex  items-center md:w-1/2">
              <label
                className="text-sm w-24 md:text-base md:w-24 lg:text-xl"
                for="brixia-score"
              >
                Brixia Score
              </label>
              <input
                className="border-2 border-gray-200 focus:outline-none lg:text-xl"
                type="text"
                name="brixia-score"
                id="brixia-score"
              />
            </div>
          </div>

          <div className="space-y-3 md:space-y-0 md:flex ">
            <div className="flex  items-center md:w-1/2">
              <label
                className="text-sm w-24 md:text-base md:w-24 lg:text-xl"
                for="bmi"
              >
                BMI
              </label>
              <input
                className="border-2 border-gray-200 focus:outline-none lg:text-xl"
                type="text"
                name="bmi"
                id="bmi"
              />
            </div>
            <div className="flex  items-center md:w-1/2">
              <label
                className="text-sm w-24 md:text-base md:w-24 lg:text-xl"
                for="age"
              >
                Age
              </label>
              <input
                className="border-2 border-gray-200 focus:outline-none lg:text-xl"
                type="text"
                name="age"
                id="age"
              />
            </div>
          </div>

          <div className="space-y-3 md:space-y-0 md:flex ">
            <div className="flex  items-center md:w-1/2">
              <label
                className="text-sm w-24 md:text-base md:w-24 lg:text-xl"
                for="sex"
              >
                Sex
              </label>
              <input
                className="border-2 border-gray-200 focus:outline-none lg:text-xl"
                type="text"
                name="sex"
                id="sex"
              />
            </div>
            <div className="flex items-center md:w-1/2">
              <label
                className="text-sm w-24 md:text-base md:w-24 lg:text-xl"
                for="zip-code"
              >
                Zip Code
              </label>
              <input
                className="border-2 lg:text-xl"
                type="text"
                name="zip-code"
                id="zip-code"
              />
            </div>
          </div>

          <div>
            <label
              className="text-sm md:text-base lg:text-xl"
              for="image-upload"
            >
              Upload file
            </label>
            <input
              className=" border-2 text-sm md:text-base w-full "
              id="image-upload"
              type="file"
              placeholder=""
            />
          </div>

          <div className="flex justify-end  ">
            <button className=" px-3 py-1 rounded-full mr-3 bg-red-600 text-zinc-50 font-bold shadow-lg md:px-4 md:py-2 md:rounded-lg">
              Cancel
            </button>
            <button className="px-3 py-1 rounded-full bg-blue-600 text-zinc-50 font-bold shadow-lg md:px-4 md:py-2 md:rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
