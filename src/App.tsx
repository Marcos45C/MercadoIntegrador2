import { Routes, Route } from "react-router-dom";
import {Login} from "./components/Login";
import {ApiPrueba} from "./components/ApiPrueba";

export const App=()=> {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/api-prueba" element={<ApiPrueba />} />
    </Routes>
  );
}

