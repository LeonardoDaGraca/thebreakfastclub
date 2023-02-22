export const Search = () => {
    return (

            <div className="flex flex-row justify-center container  mt-8">
                <div className="flex  justify-around w-full md:w-2/5">
                    <input
                        className="w-64 p-2 border border-gray-400 rounded"
                        type="text"
                        placeholder="Search exams"
                    />
                    <button className="bg-blue-500 p-2 rounded text-white">
                        Search
                    </button>
                </div>
            </div>
    );
};