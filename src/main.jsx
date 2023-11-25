import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./layout/Layout";
import { RouterProvider } from "react-router-dom";
import { route } from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={route}>
    <Layout />
  </RouterProvider>
);
