import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "store.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>

    <App />
    </Provider>
  </StrictMode>
);