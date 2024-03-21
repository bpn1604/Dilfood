import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import {Login} from "./Login"; // Import your Login component here

const MobileNav = ({ onOpen, ...rest }) => {
  const [showLogin, setShowLogin] = useState(false); // State to manage login component visibility

  const handleLogin = () => {
    window.location.href = "/login"
    setShowLogin(true); // Set showLogin state to true to render the login component
  };

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <Button
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      >
        Menu
      </Button>
      {/* <Button onClick={handleLogin}>Login</Button> */}
      {/* Conditionally render the Login component */}
      {/* {showLogin && <Login />} */}
    </Flex>
  );
};

export default MobileNav;
