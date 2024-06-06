import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./styles.scss";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Single from "./Pages/Single.jsx";
import Write from "./Pages/Write.jsx";
import Home from "./Pages/Home.jsx";

const LayOut = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
