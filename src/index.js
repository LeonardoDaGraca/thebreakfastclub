import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateExamForm } from './components/Create/CreateExamForm';
import { Admin } from './components/Admin/Admin';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ExamsDataPopUp } from './components/PopUp/ExamsDataPopUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "admin",
    element: <Admin/>,
  },
  {
    path: "create-exam",
    element: <CreateExamForm/>,
  },
  {
    path: "exams-data-popup",
    element: <ExamsDataPopUp/>,
  },
]);

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
