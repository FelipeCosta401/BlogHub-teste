import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Telas/Home";
import UserLogin from "./Telas/UserLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin action="login" />} />
        <Route path="/cadastro" element={<UserLogin action="register" />} />
      </Routes>
    </>
  );
}

export default App;
