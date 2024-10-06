import { BarChart, Gauge, LineChart, PieChart } from "@mui/x-charts";
import React from "react";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { Link } from "react-router-dom";

export default function Charts() {
  const chartSetting = {
    yAxis: [
      {
        label: "rainfall (mm)",
      },
    ],
    width: 500,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
  };
  const dataset = [
    {
      Increíble: 5,
      Bien: 5,
      newYork: 3,
      Mal: 1,
      month: "Jan",
    },
    {
      Increíble: 1,
      Bien: 2,
      newYork: 3,
      Mal: 2,
      month: "Fev",
    },
    {
      Increíble: 4,
      Bien: 3,
      newYork: 1,
      Mal: 1,
      month: "Mar",
    },
    {
      Increíble: 4,
      Bien: 5,
      newYork: 2,
      Mal: 3,
      month: "Apr",
    },
    {
      Increíble: 3,
      Bien: 3,
      newYork: 2,
      Mal: 1,
      month: "May",
    },
    {
      Increíble: 4,
      Bien: 3,
      newYork: 3,
      Mal: 4,
      month: "June",
    },
    {
      Increíble: 5,
      Bien: 3,
      newYork: 1,
      Mal: 3,
      month: "July",
    },
    {
      Increíble: 4,
      Bien: 3,
      newYork: 1,
      Mal: 2,
      month: "Aug",
    },
    {
      Increíble: 1,
      Bien: 5,
      newYork: 5,
      Mal: 1,
      month: "Sept",
    },
    {
      Increíble: 3,
      Bien: 5,
      newYork: 3,
      Mal: 5,
      month: "Oct",
    },
    {
      Increíble: 4,
      Bien: 4,
      newYork: 1,
      Mal: 4,
      month: "Nov",
    },
    {
      Increíble: 1,
      Bien: 2,
      newYork: 3,
      Mal: 5,
      month: "Dec",
    },
  ];

  const valueFormatter = (value) => `${value}mm`;

  return (
    <div className="w-full">
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
                <Link to={"/dashboard"}
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
      <div className="bg-slate-200 rounded p-8 mb-6 flex flex-col items-center">
        <h1 className="text-black mt-4 font-bold text-3xl">
          Tus sentimientos a lo largo de la semana
        </h1>
        <BarChart
          dataset={dataset}
          xAxis={[{ scaleType: "band", dataKey: "month" }]}
          series={[
            { dataKey: "Increíble", label: "Increíble", valueFormatter },
            { dataKey: "Bien", label: "Bien", valueFormatter },
            { dataKey: "newYork", label: "Meh", valueFormatter },
            { dataKey: "Mal", label: "Mal", valueFormatter },
          ]}
          {...chartSetting}
        />

        <h1 className="text-black font-bold text-3xl">
          Tus calorías de la semana
        </h1>
        <div className="flex items-center justify-center text-center text-black mb-6 w-full">
          <div>
            <Gauge
              width={100}
              height={100}
              value={89}
              startAngle={-90}
              endAngle={90}
            />
            <p>Proteínas</p>
          </div>
          <div>
            <Gauge
              width={100}
              height={100}
              value={98}
              startAngle={-90}
              endAngle={90}
            />
            <p>Carbohídratos</p>
          </div>
          <div>
            <Gauge
              width={100}
              height={100}
              value={76}
              startAngle={-90}
              endAngle={90}
            />
            <p>Grasas</p>
          </div>
        </div>

        <h1 className="text-black font-bold mb-5 text-3xl">Deporte del mes</h1>

        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Sí" },
                { id: 1, value: 15, label: "No" },
              ],
            },
          ]}
          width={400}
          height={200}
        />

        <h1 className="text-black mt-8 font-bold text-3xl">
          Peso durante la semana (kg)
        </h1>

        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [72, 68, 75, 78, 80, 77],
              area: true,
            },
          ]}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
