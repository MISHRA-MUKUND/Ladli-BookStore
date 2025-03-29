import React from "react";
import Home from "./home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import About from "./about/About";
import Contact from "./contact/Contact";

function App() {
  const [authUser,setAuthUser]=useAuth();
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />: <Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
