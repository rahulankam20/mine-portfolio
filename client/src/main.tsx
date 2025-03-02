import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("Starting application mount...");

try {
  const root = document.getElementById("root");
  if (!root) {
    throw new Error("Root element not found");
  }

  console.log("Found root element, creating React root...");
  createRoot(root).render(<App />);
  console.log("Application mounted successfully");
} catch (error) {
  console.error("Error mounting application:", error);
}