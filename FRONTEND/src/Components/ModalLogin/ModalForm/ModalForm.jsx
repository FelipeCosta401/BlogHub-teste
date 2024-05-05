import { useState } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import estilos from "./modalform.module.css";

const ModalForm = ({ action }) => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confpassword: "",
  });

  const setarUser = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const userRegister = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const logar = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        confpassword: newUser.confpassword,
      })
      .then((res) => {
        toast.success(res.data.msg);

        setNewUser({
          name: "",
          email: "",
          password: "",
          confpassword: "",
        });
      })
      .catch((res) => {
        toast.error(res.response.data.msg);
      });
  };

  return (
    <>
      {action == "login" ? (
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
                style={{ width: "100%" }}
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
              <Button
                type="submit"
                variant="contained"
                style={{ width: "100%" }}
              >
                Entrar
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className={estilos.container}>
          <form className={estilos.form} onSubmit={register}>
            <div className={estilos.input}>
              <TextField
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                name="name"
                value={newUser.name}
                onChange={userRegister}
                style={{ width: "100%" }}
              />
            </div>
            <div className={estilos.input}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                value={newUser.email}
                onChange={userRegister}
                style={{ width: "100%" }}
              />
            </div>
            <div className={estilos.input}>
              <TextField
                id="outlined-basic"
                label="Senha"
                name="password"
                value={newUser.password}
                onChange={userRegister}
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>
            <div className={estilos.input}>
              <TextField
                id="outlined-basic"
                label="Confirme sua senha"
                variant="outlined"
                name="confpassword"
                value={newUser.confpassword}
                onChange={userRegister}
                style={{ width: "100%" }}
              />
            </div>

            <div className={estilos.loginButton}>
              <Button
                type="submit"
                variant="contained"
                style={{ width: "100%" }}
              >
                Criar conta
              </Button>
            </div>
          </form>

          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default ModalForm;
