import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import { SignOut } from "./components/Login/SignOut";
import { Main } from "./components/Main/Main";
import { SignIn } from "./components/Login/SignIn";
import { SignUp } from "./components/Login/SignUp";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/signout",
//     element: <SignOut />,
//   },
//   {
//     path: "/signin",
//     element: <SignIn />,
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//   },
//   {
//     path: "/main",
//     element: <Main />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
