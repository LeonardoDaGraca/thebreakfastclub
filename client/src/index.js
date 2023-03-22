import React from "react";
import ReactDOM from "react-dom/client";
// import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements,} from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
// import Main from "./components/Main/Main"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route
//         path="/"
//         element={<App />}
//         // loader={() => {
//         //   return fetch("http://localhost:9000/api/everything")
//         //     .then(res => res.json())
//         //     .catch((error) => console.error("Error:", error));
//         //   }}
//       >

//       </Route>
//       {/* // <Route
//       //   path="exams"
//       //   element={<Exams />}
//       //   // loader={() => {
//       //   //   return fetch("http://localhost:9000/api/everything")
//       //   //     .then(res => res.json())
//       //   //     // .then(res => console.log(res))
//       //   //     .catch((error) => console.error("Error:", error));
//       //   //   }}
//       //     >
//       // </Route> */}
//       <Route path="create-exam" element={<CreateExam />}></Route>
//     </>
//   )
// );

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
