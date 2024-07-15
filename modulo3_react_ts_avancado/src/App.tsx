import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLogin from "./components/FormLogin/FormLogin";
import Homepage from "./components/Homepage/Homepage";
import { ChakraProvider } from "@chakra-ui/react";
import { AppContextProvider } from "./components/AppContext";

export default function App() {

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<FormLogin />} />
            <Route path="/home/:id" element={<Homepage />} />
          </Routes>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}