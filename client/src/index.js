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

// import { BrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<App />}></Route>
      <Route path="exams" element={<Exams />}></Route>
      <Route path="admin" element={<Admin />}></Route>
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

// setting up nested route to view a single exam by :id param
// do I need to pass in the id as a prop to Exam right here in the route?
// <Route path="/:id" element={<Exam />} />

// setting up nested route to be able to create new exam
// <Route path="/admin/new" element={<NewExam />} />