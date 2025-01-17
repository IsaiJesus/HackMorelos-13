import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Formulario from "./formulario";
import Recomendacion from "./Recomendacion";
import Charts from "./Charts";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/recomendacion" element={<Recomendacion />}></Route>
        <Route path="/charts" element={<Charts/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
