import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Telas/Home";
import Teste from "./Telas/Teste";
import ModalLogin from "./Components/ModalLogin/Modal/ModalLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<ModalLogin action="login" />} />
        <Route path="/cadastro" element={<ModalLogin action="register" />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </>
  );
}

export default App;
