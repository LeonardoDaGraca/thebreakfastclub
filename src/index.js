import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TestForm } from './components/Create/TestForm';
import { Admin } from './components/Admin/Admin';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Exams } from './components/Exams/Exams';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "exams",
    element: <Exams/>,
  },
  {
    path: "admin",
    element: <Admin/>,
  },
  {
    path: "test-form",
    element: <TestForm/>,
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
