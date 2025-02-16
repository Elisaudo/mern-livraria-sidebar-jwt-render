import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./styles.css";
//import ProtectedRoute from "./components/ProtectedRoute";

import Layout from "./components/Layout";
import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<Layout />}>
          <Route path="/show-book" element={<ShowBookList />} />

          <Route
            element={
              <ProtectedRoute
                handleError={handleError}
                allowedRoles={["admin"]}
              />
            }
          >
            <Route path="/create-book" element={<CreateBook />} />
          </Route>

          <Route
            element={
              <ProtectedRoute
                handleError={handleError}
                allowedRoles={["manager", "user"]}
              />
            }
          >
            <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
          </Route>

          <Route path="/show-book/:id" element={<ShowBookDetails />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;

/*
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/create-book" element={<CreateBook />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={["manager", "user"]} />}>
            <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
          </Route>


        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<Layout />}>
          <Route path="/show-book" element={<ShowBookList />} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
          <Route path="/show-book/:id" element={<ShowBookDetails />} />
        </Route>



          */
