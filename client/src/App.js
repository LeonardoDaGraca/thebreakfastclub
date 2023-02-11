import "./Styles/Styles.css"
// import required elements from react router dom for browser router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import the components being rendered by the route component
import { Navbar } from "./components/Navbar/Navbar";
import {Search} from "./components/Search/Search";
import { Exams } from "./components/Exams/Exams";
// import { Pagination } from "./components/Pagination/Pagination";
import { Admin } from "./components/Admin/Admin";
// import { NotFound } from "./components/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <div className="relative bg-gray-100 min-h-screen">
          <Navbar />
          <Routes>
            <Route>
              <Admin to="" />
            </Route>
          </Routes>
            <div className="container mx-auto p-6">
                <Search/>
                <Exams/>
                {/*<ExamsFetch/>*/}
            </div>
            {/* <Pagination/> */}
        </div>
      </Router>
    </>
  );
}
export default App;
