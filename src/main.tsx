import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MedicineListPage from "./pages/medicine-list.page";
import HomePage from "./pages/home.page";
import NavBar from "./components/custom-navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/medicine-list",
    element: <MedicineListPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main className="flex flex-col max-w-7xl mx-auto gap-9">
      <NavBar />
      {/* <App /> */}
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);
