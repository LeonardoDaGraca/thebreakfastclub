import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { TestForm } from './components/Create/TestForm';
import { Admin } from './components/Admin/Admin';
import { Exams } from './components/Exams/Exams';
import { Navbar } from './components/Navbar/Navbar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}
      loader={() => {
        return fetch(`http://localhost:9000/api/everything`)
          .then(res => res.json())
          .catch((error) => console.error("Error:", error));
        }}>
      <Route 
        path="/" 
        element={<App />}
        loader={() => {
          return fetch("http://localhost:9000/api/everything")
            .then(res => res.json())
            .catch((error) => console.error("Error:", error));
          }}>
      </Route>
      <Route 
        path="exams" 
        element={<Exams />}
        loader={() => {
          return fetch("http://localhost:9000/api/everything")
            .then(res => res.json())
            .catch((error) => console.error("Error:", error));
          }}>
      </Route>
      <Route 
        path="admin" 
        element={<Admin />}
        loader={() => {
          return fetch("http://localhost:9000/api/everything")
          .then(res => res.json())
          .catch((error) => console.error("Error:", error));
        }}>
      </Route>
      <Route path="test-form" element={<TestForm />}></Route>
    </Route>
    )
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();