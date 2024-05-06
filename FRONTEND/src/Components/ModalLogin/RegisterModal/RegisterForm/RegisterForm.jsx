import { useState } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import estilos from "./registerForm.module.css";

const FormModal = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confpassword: "",
  });

  const userRegister = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const register = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email || !newUser.password) {
      toast.error("Preencha todos os campos");
    } else {
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
    }
  };

  return (
    <>
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
            <Button type="submit" variant="contained" style={{ width: "100%" }}>
              Criar conta
            </Button>
          </div>
        </form>

        <ToastContainer />
      </div>
    </>
  );
};

export default FormModal;
