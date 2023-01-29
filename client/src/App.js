import './App.css';
// import required elements from react router dom for browser router
import {Routes, Route} from 'react-router-dom';
// import the components being rendered by the route component
import { Home } from './components/Home';
import { Admin } from './components/Admin';

function App() {
  return (
    <>
      <div className="App">
        {/* implement routes component with individual route components nested that provide the path and the component which should be loaded when the browser visits that specific path */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
