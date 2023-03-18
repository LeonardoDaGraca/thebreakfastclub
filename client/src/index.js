import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { CreateExamForm } from "./components/Create/CreateExamForm";
import { Edit } from "./components/EditPopUp/EditPopUp";
import reportWebVitals from "./reportWebVitals";
import { Exams } from "./components/Exams/Exams";
import { CreateExam } from "./components/Create/CreateExam";
import "./index.css";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="create-exam" element={<CreateExam />}></Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
