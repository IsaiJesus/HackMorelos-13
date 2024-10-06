import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterView = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contrasena: "",
    edad: "",
    sexo: "",
    altura: "",
    actividad: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      window.localStorage.setItem('sexo', formData.sexo);
      window.localStorage.setItem('edad', formData.edad);
      window.localStorage.setItem('altura', formData.altura);
      window.localStorage.setItem('actividad', formData.actividad);
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log("Success:", result);
      
    } catch (error) {
      console.error("Error:", error);
    }
    navigate('/charts');
  };

  return (
    <div className="mt-10  flex items-start justify-center bg-gradient-to-b from-gray-900 to-gray-700">
      <div className="mt-3  mb-6 bg-gray-800 p-8 rounded-lg shadow-lg text-white w-100">
        <h2 className="text-2xl mb-6 text-center">Registrarse</h2>
        <form onSubmit={handleSubmit} className="text-white">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              Nombre Usuario:
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 rounded-lg text-gray-900"
                placeholder="Nombre"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email:
              <input
                type="text"
                id="email"
                name="email"
                className="w-full px-3 py-2 rounded-lg text-gray-900"
                placeholder="Correo"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">
              Contraseña:
              <input
                type="password"
                id="password"
                name="contrasena"
                className="w-full px-3 py-2 rounded-lg text-gray-900"
                placeholder="Contraseña"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="edad">
              Edad:
              <input
                type="text"
                name="edad"
                id="edad"
                className="w-full px-3 py-2 rounded-lg text-gray-900"
                placeholder="Edad"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="sexo">
              Sexo:
              <select onChange={handleChange} name="sexo" value={formData.sexo} id="sexo" className="w-full px-3 py-2.5 rounded-lg text-gray-900 bg-white-border border-gray-300">
                <option defaultValue value="masculino">Hombre</option>
                <option value="femenino">Mujer</option>
              </select>
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="altura">
              Altura:
              <input
              min={130}
                type="text"
                id="altura"
                name="altura"
                className="w-full px-3 py-2 rounded-lg text-gray-900"
                placeholder="Altura"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="actividades">
              Nivel de actividade fisica:
              <select
              value={formData.actividad}
                onChange={handleChange}
                name="actividad"
                id="actividades"
                className="w-full px-3 py-2.5 rounded-lg text-gray-900 bg-white-border border-gray-300"
              >
                <option defaultValue value="nula">Sedentario</option>
                <option value="baja">Ligera Actividad</option>
                <option value="moderada">Moderada Actividad</option>
                <option value="alta">Alta actividad</option>
                <option value="intensa">Actividad muy instensa</option>
              </select>
            </label>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg mt-6"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterView;
