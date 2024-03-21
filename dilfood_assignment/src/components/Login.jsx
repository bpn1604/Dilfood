import {
    Box,
    Button,
    ChakraProvider,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    useToast,
  } from "@chakra-ui/react";
import { useState } from "react";
export const Login = () =>{
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth , setAuth] = useState(true)
  const handleClick = () =>{
    window.location.href = "/home"
    setAuth(false)
    localStorage.setItem("auth" , auth)
  }
    return (
        <>
        <Container maxW="lg" centerContent>
        <Stack spacing={8} p={8} boxShadow="lg" rounded="md" bg="white" mt={8}>
          <Heading>Welcome</Heading>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          {/* <Button colorScheme="teal" onClick={handleSignup}>
            Sign Up
          </Button> */}
          {/* <Text textAlign="center">or</Text> */}
          {
            
            auth ? <Button colorScheme="blue" onClick={handleClick}>
            Login
          </Button> : <Button colorScheme="blue" >
            Logout
          </Button>
          }
          
        </Stack>
      </Container>
      
      </>
    )
}