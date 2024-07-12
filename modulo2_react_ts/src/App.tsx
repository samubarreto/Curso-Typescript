import FormLogin from "./components/FormLogin/FormLogin";
import Homepage from "./components/Homepage/Homepage";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      {/* <FormLogin></FormLogin> */}
      <Homepage></Homepage>
    </ChakraProvider>
  );
}