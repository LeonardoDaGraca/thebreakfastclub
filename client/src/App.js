import './App.css';
// import required elements from react router dom for browser router
import {Routes, Route} from 'react-router-dom';
// import the components being rendered by the route component
import { Navbar } from "./components/Navbar/Navbar";
import { Exams } from './components/Exams/Exams';
import { Admin } from './components/Admin/Admin';
import { Search } from "./components/Search/Search";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <div className="App">
        {/* implement routes component with individual route components nested that provide the path and the component which should be loaded when the browser visits that specific path */}
        <Routes>

          <Route path="/" element={[<Navbar />,<Search/>,<Exams />]}>
            
              {/* setting up nested route to view a single exam by :id param */}
              {/* do I need to pass in the id as a prop to Exam right here in the route? */}
              {/* <Route path="/:id" element={<Exam />} /> */}
          </Route>
            
          <Route path="/admin" element={[<Navbar />,<Search/>,<Admin />]}>
              {/* setting up nested route to be able to create new exam */}
              {/* <Route path="/admin/new" element={<NewExam />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </div>
    </>
  );
}
export default App;
