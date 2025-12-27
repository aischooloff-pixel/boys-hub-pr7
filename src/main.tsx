import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// @ts-ignore
if (window.Telegram?.WebApp) {
  // @ts-ignore
  window.Telegram.WebApp.ready();
  // @ts-ignore
  window.Telegram.WebApp.expand();
}

createRoot(document.getElementById("root")!).render(<App />);
