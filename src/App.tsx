import Navbar from "./components/Navbar/Navbar.tsx";
import { Outlet } from "react-router-dom"; // Import Outlet
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState<string>("authentication");
  const location = useLocation();

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, " ");
    setTitle(parsedTitle);
    console.log(location);
  }, [location]);
  return (
    <Grid container>
      <Navbar />
      <Header title={title} />
      <Outlet />
    </Grid>
  );
}

export default App;
