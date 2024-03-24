import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Authentication from "./pages/Authentication/Authentication.tsx";
import Database from "./pages/Database/Database.tsx";
import Storage from "./pages/Storage/Storage.tsx";
import Hosting from "./pages/Hosting/Hosting.tsx";
import Functions from "./pages/Functions/Functions.tsx";
import MachineLearning from "./pages/MachineLearning/MachineLearning.tsx";
import DashboardTheme from "./DashboardTheme.tsx";
import { ThemeProvider } from "@mui/material/styles";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={DashboardTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="authentication" element={<Authentication />} />
          <Route path="database" element={<Database />} />
          <Route path="storage" element={<Storage />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="functions" element={<Functions />} />
          <Route path="machine-learning" element={<MachineLearning />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
