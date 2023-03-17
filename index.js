import React from "react";
import ReactDOM from "react-dom/client";
import "/index.css";
import App from "./src/components/App";
import { CarritoProvider } from "../ecommerce/src/context/Cart.Context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);
