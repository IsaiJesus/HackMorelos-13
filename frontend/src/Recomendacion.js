//import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Recomendacion() {
  //const API_KEY = process.env.API_KEY;

  const cerebral = window.localStorage.getItem("cerebral");
  const cardio = window.localStorage.getItem("cardio");
  const pulmon = window.localStorage.getItem("pulmon");
  const obesidad = window.localStorage.getItem("obesidad");
  /*const sentimiento = window.localStorage.getItem("sentimiento");
  const ejercicio = window.localStorage.getItem("ejercicio");
  const actividadesBuenas = window.localStorage.getItem("actividadesBuenas");
  const actividadesMalas = window.localStorage.getItem("actividadesMalas");
  const sexo = window.localStorage.getItem("sexo");
  const edad = window.localStorage.getItem("edad");
  const altura = window.localStorage.getItem("altura");
  const actividad = window.localStorage.getItem("actividad");*/

  /*const [change, setChange] = useState("");
  const [prompt, setPrompt] = useState([]);

  const getCompletion = async (prompt) => {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    return await res.json();
  };

  const handleAutomaticSubmit = async () => {
    if (change) {
      const response = await getCompletion(change);
      console.log(response)
      setPrompt(response.choices[0].message.content);
    }
  };

  useEffect(() => {
    setChange(
      `Actúa como un experto en el área de salud y recomienda áreas de mejoría y cosas que debería evitar en base a las siguientes actividades y datos: ${sentimiento}, ${ejercicio}, ${actividadesBuenas}, ${actividadesMalas}, ${sexo}, ${edad}, ${altura}, ${actividad}`
    );
    handleAutomaticSubmit();
  }, [change]);*/

  return (
    <main className="flex flex-col items-center justify-center py-6 w-full">
      <nav class="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Vediag
            </span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Download data
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"/dashboard"}
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Register your day
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        style={{ minHeight: "160px", width: "600px" }}
        className="bg-white text-black grid grid-cols-3 rounded my-8"
      >
        <img
          style={{ height: "100%" }}
          className="rounded-l object-cover"
          src="https://staticnew-prod.topdoctors.mx/files/Image/large/573ce07e-cd94-48d7-a80e-08e39e4504ad.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center col-span-2 p-3">
          <h3 className="font-bold text-xl">Predicción de infarto cerebral:</h3>
          {cerebral ? (
            <p className="text-gray-600">
              {cerebral === "0"
                ? "La posibilidad de que sufras de esta enfermedad es muy baja debido a tus buenos hábitos. ¡Sigue así y mejora cada día! 😄"
                : "Desafortunadamente, existe alguna posibilidad de sufrir de este padecimiento. Te recomendamos mejorar tus hábitos para reducir esta posibilidad. "}
            </p>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>

      <div
        style={{ minHeight: "160px", width: "600px" }}
        className="bg-white text-black grid grid-cols-3 rounded my-8"
      >
        <img
          style={{ height: "100%" }}
          className="rounded-l object-cover"
          src="https://pacientesconectandojuntos.co/wp-content/uploads/sites/3/2021/12/Enfermedad_cardiovascular_Insuficiencia_cardi%CC%81aca--scaled.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center col-span-2 p-3">
          <h3 className="font-bold text-xl">
            Predicción de enfermedades cardiovasculares:
          </h3>
          {cardio ? (
            <p className="text-gray-600">
              {cardio === "0"
                ? "Es muy poco probable que sufras esta enfermedad debido a tus saludables hábitos. ¡Mantén el buen trabajo y mejora constantemente! 😄"
                : "Desafortunadamente, existe alguna posibilidad de sufrir de este padecimiento. Te recomendamos mejorar tus hábitos para reducir esta posibilidad. "}
            </p>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>

      <div
        style={{ minHeight: "160px", width: "600px" }}
        className="bg-white text-black grid grid-cols-3 rounded my-8"
      >
        <img
          style={{ height: "100%" }}
          className="rounded-l object-cover"
          src="https://especialsalud.elmundo.es/oncologia/assets/img/04/fondo.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center col-span-2 p-3">
          <h3 className="font-bold text-xl">Predicción de cáncer de pulmón:</h3>
          {pulmon ? (
            <p className="text-gray-600">
              {pulmon === "0"
                ? "Las probabilidades de que padezcas esta enfermedad son mínimas gracias a tus buenos hábitos. ¡Continúa así y sigue mejorando cada día! 😄"
                : "Desafortunadamente, existe alguna posibilidad de sufrir de este padecimiento. Te recomendamos mejorar tus hábitos para reducir esta posibilidad. "}
            </p>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
      <div
        style={{ minHeight: "160px", width: "600px" }}
        className="bg-white text-black grid grid-cols-3 rounded my-8"
      >
        <img
          style={{ height: "100%" }}
          className="rounded-l object-cover"
          src="https://www.siacardio.com/wp-content/uploads/2018/10/La-Locura-de-la-prevenci%C3%B3n-450x450.png"
          alt=""
        />
        <div className="flex flex-col justify-center col-span-2 p-3">
          <h3 className="font-bold text-xl">Predicción de cáncer de pulmón:</h3>
          {obesidad ? (
            <p className="text-gray-600">
              {obesidad === "0"
                ? "Lamentablemente estas por debajo de tu peso ideal, mejora tus hábitos alimenticios. ¡Tú puedes! 💪"
                : obesidad === "1"
                ? "Excelente, estás en tu peso ideal, ¡sigue alimentándote así! 🍅"
                : obesidad === "2"
                ? "Tienes sobrepeso, mejora tus hábitos alimenticios y haz más deporte."
                : "Lamentablemente tienes obesidad, te recomiendo visitar a un especialista que te apoye, mientras tanto, tú puedes mejorar tus hábitos desde tu celular. 😊"}
            </p>
          ) : (
            <p>Cargando...</p>
          )}
        </div>

        
      </div>

      <div className="rounded bg-white text-black p-3" style={{width:"600px"}}>
        <h1 className=" text-center text-2xl font-bold mb-2">Recomendaciones</h1> 
        <p >1. Sustituir bebidas alcohólicas y azucaradas: Comienza por sustituir una bebida alcohólica diaria por una opción más saludable como agua con gas y limón, o infusiones sin azúcar. Esto ayudará a reducir gradualmente el consumo de alcohol y azúcar. <br />
2. Reducir el azúcar en alimentos: Sustituye los postres y snacks azucarados por opciones más saludables como frutas frescas o frutos secos. También, intenta reducir el azúcar añadido en el café o té de forma progresiva, por ejemplo, si usa dos cucharadas, reducir a una y media y así sucesivamente. <br />
3. Educación y conciencia: Leer las etiquetas de los alimentos para tomar conciencia de la cantidad de azúcar y alcohol que se consume. Esto puede motivar a hacer elecciones más saludables. Además, debido a sus problemas pulmonares, es crucial reducir el consumo de sustancias que puedan agravar su condición y adoptar hábitos que mejoren su salud respiratoria.</p>
      </div>
    </main>
  );
}
/*
<div>
        <p>{prompt ? <p>{prompt}</p> : <p>Cargando ...</p>}</p>
      </div>*/