import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app/pages/home/home-page";
import Providers from "./components/providers";
import PagesLayout from "./app/pages/pagesLayout";
import CandidateProfile from "./app/pages/candidate/candidate-page";

const router = createBrowserRouter([
  {
    path: "",
    element: <PagesLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },

      {
        path: "/candidate/:id",
        element: <CandidateProfile />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>,
);
