export const TestSearch = () => {
    return (
        <>
         {/* Search bar */}
         <div className="md:flex relative search-container justify-center hidden">
            <div className="flex justify-between md:w-72">
                    <input className="border-2 rounded-lg focus:outline-none text-xs md:p-2"
                        type="text" placeholder="Search" />
                
                <button className="bg-gray-700 p-2 rounded-lg text-zinc-50 font-bold">Search</button>
            </div>
          </div>
        </>
    )   
}