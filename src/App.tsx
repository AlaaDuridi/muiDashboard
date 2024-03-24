import Button from "@mui/material/Button";
import Navbar from "./components/Navbar/Navbar.tsx";
import { Outlet } from "react-router-dom"; // Import Outlet from react-router-dom

function App() {
  return (
    <>
      <Button variant="contained">Hello World</Button>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
