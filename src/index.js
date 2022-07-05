import React from "react";
import App from "./App";
import './assets/style.scss'
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
