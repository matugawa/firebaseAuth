import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./comp//Register";
import Login from "./comp/Login";
import Mypage from "./comp//Mypage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/`} element={<Mypage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;