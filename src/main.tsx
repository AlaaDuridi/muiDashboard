import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="authentication" element={<App />} />
      <Route path="database" element={<App />} />
      <Route path="storage" element={<App />} />
      <Route path="hosting" element={<App />} />
      <Route path="functions" element={<App />} />
      <Route path="machine-learning" element={<App />} />
    </Routes>
  </BrowserRouter>
);
