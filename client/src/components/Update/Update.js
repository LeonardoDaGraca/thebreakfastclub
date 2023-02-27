export const Update = () => {
    const [patient, setPatient] = useState({});
    
    const handleUpdateSubmit = (e) => {
        e.preventDefault();
    
        onSubmit({
          patientId,
          examId,
          keyFindings,
          brixiaScore,
          age,
          sex,
          bmi,
          zipCode,
          image
        });
      }
    // const [examId, setExamId] = useState('');
    // const [keyFindings, setKeyFindings] = useState('');
    // const [brixiaScore, setBrixiaScore] = useState('');
    // const [age, setAge] = useState('');
    // const [sex, setSex] = useState('');
    // const [bmi, setBmi] = useState('');
    // const [zipCode, setZipCode] = useState('');
    // const [image, setImage] = useState(null);
  

  
    return (
        <div className="form flex items-center justify-center w-screen h-screen ">
            <form onSubmit={handleSubmit} className=" md:max-w-2xl bg-white md:p-6 p-3 rounded-lg md:shadow-xl ">
                <h2 className="block text-base md:text-lg font-bold mb-4 ">
                    Exam Form
                </h2>
  
                <div className="flex flex-wrap text-base">
                    <div className="w-1/2 mb-2 md:mb-4">
                        <label className="block text-gray-700 font-medium w-24">
                            Patient ID:
                        </label>
                        <input
                            type="text"
                            value={patientId}
                            onChange={e => setPatient.patientId(e.target.value)}
                            className="border border-gray-400 w-max md:w-11/12"
                        />
                    </div>
                    <div className="w-1/2 mb-2 md:mb-2">
                        <label className="block text-gray-700 font-medium w-24">
                            Exam ID:
                        </label>
                        <input
                            type="text"
                            value={examId}
                            onChange={e => setPatient.examId(e.target.value)}
                            className="border border-gray-400 w-max md:w-11/12"
                        />
                    </div>
  
                    <div className="w-1/2 mb-2 md:mb-2">
                        <label className="block text-gray-700 font-medium w-24">
                            Age:
                        </label>
                        <input
                            type="text"
                            value={age}
                            onChange={e => setPatient.age(e.target.value)}
                            className="border border-gray-400 w-max md:w-11/12"
                        />
                    </div>
                    <div className="w-1/2 mb-2 md:mb-2">
                        <label className="block text-gray-700 font-medium">
                            Sex:
                        </label>
                        <input
                            type="text"
                            value={sex}
                            onChange={e => setPatient.sex(e.target.value)}
                            className="border border-gray-400 w-max md:w-11/12"
                        />
                    </div>
  
                    <div className="w-1/2 mb-2 md:mb-2">
                        <label className="block text-gray-700 font-medium">
                            Brixia Score:
                        </label>
                        <input
                            type="text"
                            value={brixiaScore}
                            onChange={e => setPatient.brixiaScore(e.target.value)}
                            className="border border-gray-400 w-max md:w-11/12"
                        />
                    </div>
                    <div className="w-1/2 mb-2 md:mb-2">
                        <label className="block text-gray-700 font-medium">
                            BMI:
                        </label>
                        <input
                            type="text"
                            value={bmi}
                            onChange={e => setPatient.bmi(e.target.value)}
                            className="border border-gray-400 w-max md:w-11/12"
                        />
                    </div>
                    <div className="w-1/2 mb-2 md:mb-2">
                        <label className="block text-gray-700 font-medium">
                            Zip Code:
                        </label>
                        <input
                            type="text"
                            value={zipCode}
                            onChange={e => setPatient.zipCode(e.target.value)}
                            className="border border-gray-400 w-max md:w-11/12"
                        />
                    </div>
                    <div className="w-full mb-2 md:mb-2">
                        <label className="block text-gray-700 font-medium">
                            Images:
                        </label>
                        <input
                            type="file"
                            onChange={e => setPatient.image(e.target.files[0])}
                            className="border border-gray-400 w-full"
                        />
                    </div>
                    <div className="w-full mb-2 md:mb-2">
                        <label className="block mb-2 text-gray-700 font-medium">
                            Key Findings:
                        </label>
                        <textarea
                            value={keyFindings}
                            onChange={e => setPatient.keyFindings(e.target.value)}
                            className="border border-gray-400 p-2 w-full "
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 hover:shadow-lg text-slate-100 hover:text-white font-medium py-2 px-4 rounded-md"
                    >
                        Save Exam
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-red-500  hover:bg-red-600 hover:shadow-lg text-slate-100 hover:text-white font-medium py-2 px-4 rounded-md ml-4"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
};