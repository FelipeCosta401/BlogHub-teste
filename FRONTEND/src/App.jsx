import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Telas/Home/Home";
import UserLogin from "./Telas/Login/UserLogin";
import ViewPost from "./Telas/Publi/ViewPost/ViewPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin action="login" />} />
        <Route path="/cadastro" element={<UserLogin action="register" />} />
        <Route path="/post/:id" element={<ViewPost />} />
      </Routes>
    </>
  );
}

export default App;
