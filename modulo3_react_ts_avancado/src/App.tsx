import { BrowserRouter} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AppContextProvider } from "./components/AppContext";
import Layout from "./components/Layout";
import MainRoutes from "./routes";
import { createLocalStorage, getAllLocalStorage } from "./services/LStorage";

export default function App() {

  !getAllLocalStorage() && createLocalStorage();

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}