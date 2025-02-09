import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./styles.css";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/layout" element={<Layout />}>
          <Route index element={<ShowBookList />} />
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/create-book" element={<CreateBook />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={["manager", "user"]} />}>
            <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
          </Route>
          <Route path="/show-book/:id" element={<ShowBookDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
