import { useState, useEffect } from "react";
import DataPopUp from "../PopUp/DataPopUp";

export const Search = ({data}) => {
    const [searchedPatient, setSearchedPatient] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearchResult, setShowSearchResult] = useState(false);
    const handleSearchResultClose = () => setShowSearchResult(false);

    const handleSearchInputChange = (e) => {
        let newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        e.target.value="";
      }
    
    const submitSearch = () => {
      if(searchTerm.length>0) {
          fetch(`http://localhost:9000/api/patients/${searchTerm}`)
          .then(res => res.json())
          .then(res => console.log(res))
          .then(res => setSearchedPatient(res))
          .catch(err => console.error('Error'));
      }
    }
    
    console.log(searchedPatient);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        submitSearch();
        // return data;
    }

    // this isn't working - this is loading on first render AND on changes to searchedPatient; I need it not to load on first render
    useEffect(() => {
        setShowSearchResult(true);
    }, [searchedPatient])
    

    return (

        <div className="flex items-center w-3/5 justify-center relative">
            <div className="flex  justify-around w-full md:w-2/5">
                <form onSubmit={e => handleSearchSubmit(e)}>
                <input
                    className="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    placeholder="Search exams"
                    onChange={e => {handleSearchInputChange(e)}}
                    value={searchTerm}
                />
                <button type="submit" className="text-white absolute right-0.5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Search
                </button>
                </form>
                <DataPopUp 
                    item={searchedPatient} 
                    onClose={handleSearchResultClose } 
                    visible={showSearchResult} 
                    // setShowExamDataPopUp={setShowExamDataPopUp} 
                    handleSearchResultClose={handleSearchResultClose} 
                    // showExamDataPopUp={showExamDataPopUp} 
                />
            </div>
        </div>
        
    );
};