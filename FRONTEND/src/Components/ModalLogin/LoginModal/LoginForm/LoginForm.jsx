import { useState } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import estilos from "./loginForm.module.css";

const LoginForm = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const setarUser = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const logar = (e) => {
    e.preventDefault();
    if (!user.name || !user.password) {
      toast.error("Preencha todos os campos!");
    } else {
      axios
        .post("http://localhost:3000/login", {
          email: user.name,
          password: user.password,
        })
        .then((res) => {
          toast.success(res.data.msg);
        })
        .catch((res, err) => {
          toast.error(res.response.data.msg);
        });
    }
  };
  return (
    <>
      <div className={estilos.container}>
        <form className={estilos.form} onSubmit={logar}>
          <div className={estilos.input}>
            <TextField
              id="outlined-basic"
              label="Usuário/E-mail"
              variant="outlined"
              name="name"
              value={user.name}
              onChange={setarUser}
              style={{ width: "100%", outline: "none" }}
            />
          </div>
          <div className={estilos.input}>
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              name="password"
              value={user.password}
              onChange={setarUser}
              style={{ width: "100%" }}
            />
          </div>
          <div className={estilos.loginButton}>
            <Button type="submit" variant="contained" style={{ width: "100%" }}>
              Entrar
            </Button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginForm;
