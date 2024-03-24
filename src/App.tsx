import Button from "@mui/material/Button";
import Navbar from "./components/Navbar/Navbar.tsx";
import { Outlet } from "react-router-dom"; // Import Outlet
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid container>
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item xs>
        <Button variant="contained">Hello World</Button>
        <Outlet /> {/* Add this line to render the routed components */}
      </Grid>
    </Grid>
  );
}

export default App;
