import Navbar from "./components/Navbar/Navbar.tsx";
import { Outlet } from "react-router-dom"; // Import Outlet
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default App;
