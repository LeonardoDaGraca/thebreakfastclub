import React, { useState } from "react";

export const EditExam = ({ initialExamId, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [examId, setExamId] = useState(initialExamId);


    const handleSave = () => {
        onSave(examId);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={examId}
                        onChange={(e) => setExamId(e.target.value)}
                        className="border-gray-300 border rounded-md px-3 py-2 w-full"
                    />
                    <button
                        type="button"
                        onClick={handleSave}
                        className="bg-blue-500 text-white rounded-md px-3 py-2 hover:bg-blue-600"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setExamId(initialExamId);
                            setIsEditing(false);
                        }}
                        className="bg-gray-300 text-gray-700 rounded-md px-3 py-2 hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <div className="flex items-center space-x-2">
                    <span className="font-bold">{examId}</span>
                    <button
                        type="button"
                        onClick={() => setIsEditing(true)}
                        className="bg-gray-300 text-gray-700 rounded-md px-3 py-2 hover:bg-gray-400"
                    >
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
};
