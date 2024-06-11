// import React from "react";
import Login from "./pages/Login/Login";
import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
// import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
// import Home from './pages/Home/Home'
// import Login from './pages/Login/Login'
// import Player from './pages/Player/Player'

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        navigate("/");
      } else {
        console.log("Logged Out");
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <Login />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
