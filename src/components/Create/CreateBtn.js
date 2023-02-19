import React, { useState } from "react";
import {ExamForm} from "./ExamForm";

export const CreateBtn = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <div className="border-2 border-black">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setShowForm(true)}
                >
                    Create Exam
                </button>
                {showForm && <ExamForm/>}
            </div>
        </>
    );
};
