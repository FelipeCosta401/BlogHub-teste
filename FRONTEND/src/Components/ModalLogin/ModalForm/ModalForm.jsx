import estilos from "./modalform.module.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ModalForm = ({ action }) => {
  return (
    <>
      {action == "login" ? (
        <div className={estilos.container}>
          <div className={estilos.form}>
            <div className={estilos.input}>
              <TextField
                id="outlined-basic"
                label="Usuário/E-mail"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>
            <div className={estilos.input}>
              <TextField
                id="outlined-basic"
                label="Senha"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>
            <div className={estilos.loginButton}>
              <Button variant="contained" style={{ width: "100%" }}>
                Entrar
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className={estilos.container}>
          <div className={estilos.form}>
            <div className={estilos.input}>
              <TextField
                id="outlined-basic"
                label="Usuário/E-mail"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>
            <div className={estilos.input}>
              <TextField
                id="outlined-basic"
                label="Senha"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>
            <div className={estilos.input}>
              <TextField
                id="outlined-basic"
                label="Senha"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>
            <div className={estilos.input}>
              <TextField
                id="outlined-basic"
                label="Senha"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>
            
            <div className={estilos.loginButton}>
              <Button variant="contained" style={{ width: "100%" }}>
                Criar conta
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
