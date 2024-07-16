import { Route, Routes } from "react-router-dom";
import FormLogin from "./components/FormLogin/FormLogin";
import Homepage from "./components/Homepage/Homepage";
import { useContext } from "react";
import { AppContext } from "./components/AppContext";

export default function MainRoutes() {

  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<FormLogin />} />
      <Route path="/home/:id" element={isLoggedIn ? <Homepage /> : <FormLogin />} />
    </Routes>
  )
}