export const TestSearch = () => {
    return (
        <>
         {/* Search bar */}
         <div className="flex relative search-container justify-center p-6">
            <div className="flex justify-between w-72 border-2">
                <input className="border-2 p-2 rounded-lg focus:outline-none" type="text" placeholder="Search" />
                
                <button className="bg-gray-700 p-2 rounded-lg text-zinc-50 font-bold">Search</button>
            </div>
          </div>
        </>
    )   
}