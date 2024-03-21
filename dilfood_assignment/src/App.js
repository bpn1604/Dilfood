import { Box} from "@chakra-ui/react";
import SideBar from "./components/SideBar";
import { useState } from "react";
import { Login } from "./components/Login";

function App() {
  const auth = localStorage.getItem("auth")
  
  return (
    <Box className="App">
      {
        auth ? <SideBar /> : <Login />
      }
      

    </Box>
  );
}

export default App;
