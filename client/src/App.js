import "./Styles/Styles.css"
// import required elements from react router dom for browser router
import {Routes, Route} from 'react-router-dom';
// import the components being rendered by the route component
import { Navbar } from "./components/Navbar/Navbar";
import { Exams } from './components/Exams/Exams';
import { Admin } from './components/Admin/Admin';
import { NotFound } from "./components/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <div className="relative bg-gray-100 min-h-screen min-w-fit">
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/" element={<Exams />}>
                {/* setting up nested route to view a single exam by :id param */}
                {/* do I need to pass in the id as a prop to Exam right here in the route? */}
                {/* <Route path="/:id" element={<Exam />} /> */}
              </Route>
              <Route path="/Admin" element={<Admin />}>
                {/* setting up nested route to be able to create new exam */}
                {/* <Route path="/admin/new" element={<NewExam />} /> */}
              </Route>
              <Route path="*" element={<NotFound />} />
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
