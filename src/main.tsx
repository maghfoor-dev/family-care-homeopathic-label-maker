import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MedicineListPage from "./pages/medicine-list.page";
import HomePage from "./pages/home.page";
import NavBar from "./modules/navbar";
import PrintQueuePage from "./pages/print-queue.page";
import AddMedicineForm from "./pages/add-medicine.page";
import { Toaster } from "./components/ui/toaster";
import { UpdateMedicinesProvider } from "./context/medicines-context";
import { QueuedMedicinesProvider } from "./context/print-queue-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/medicine-list",
    element: <MedicineListPage />,
  },
  {
    path: "/print-queue",
    element: <PrintQueuePage />,
  },
  {
    path: "/add-medicine",
    element: <AddMedicineForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UpdateMedicinesProvider>
      <QueuedMedicinesProvider>
        <main className="flex flex-col max-w-7xl mx-auto gap-9">
          <NavBar />
          {/* <App /> */}
          <RouterProvider router={router} />
          <Toaster />
        </main>
      </QueuedMedicinesProvider>
    </UpdateMedicinesProvider>
  </React.StrictMode>
);
