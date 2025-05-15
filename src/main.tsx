import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "../src/styles/index.css";
import "../src/styles/App.css";
import "../src/styles/Header.styles.css";
import "../src/styles/Keyboard.styles.css";
import "../src/styles/LivesCounter.styles.css";
import "../src/styles/Popup.styles.css";
import "../src/styles/WordRep.styles.css";

import App from "./App.tsx";
import { WordProvider } from "./contexts/WordContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <WordProvider>
        <App />
      </WordProvider>
    </BrowserRouter>
  </StrictMode>
);
