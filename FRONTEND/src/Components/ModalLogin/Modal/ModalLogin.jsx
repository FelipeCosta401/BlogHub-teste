import { useState } from "react";

import { Dialog } from "primereact/dialog";
import { IoIosCloseCircle } from "react-icons/io";

import Home from "../../../Telas/Home";
import ModalBackground from "../ModalBackground/ModalBackground";
import ModalForm from "../ModalForm/ModalForm";
import estilos from "./modal.module.css";

const ModalLogin = ({ action }) => {
  const [visible, setVisible] = useState(true);

  const closeModal = () => {
    setTimeout(function closeModal() {
      window.location.replace("/");
    }, 100);
  };

  return (
    <>
      {action == "login" ? (
        <div className={estilos.container}>
          <div className={estilos.background}>
            <Home />
          </div>
          <div>
            <Dialog
              visible={visible}
              className={estilos.modalContainer}
              showHeader={false}
            >
              <div className={estilos.modalContent}>
                <div className={estilos.modalContentBackground}>
                  <ModalBackground action="login" />
                </div>
                <div className={estilos.modalContentForm}>
                  <div className={estilos.header}>
                    <IoIosCloseCircle
                      size={45}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setVisible(false);
                        closeModal();
                      }}
                    />
                  </div>
                  <h1 className={estilos.title}>Faça o login</h1>
                  <ModalForm action="login" />
                  <h4 className={estilos.registerOption}>
                    Não tem login? <a href="/cadastro">Cadastre-se</a>
                  </h4>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      ) : (
        <div className={estilos.container}>
          <div className={estilos.background}>
            <Home />
          </div>
          <div>
            <Dialog
              visible={visible}
              className={estilos.modalContainer}
              showHeader={false}
            >
              <div className={estilos.modalContent}>
                <div
                  className={estilos.modalContentBackground}
                  style={{ order: 2 }}
                >
                  <ModalBackground action="register" />
                </div>
                <div className={estilos.modalContentForm} style={{ order: 1 }}>
                  <div
                    className={estilos.header}
                    style={{ textAlign: "start" }}
                  >
                    <IoIosCloseCircle
                      size={45}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setVisible(false);
                        closeModal();
                      }}
                    />
                  </div>
                  <h1 className={estilos.title}>Cadastre-se</h1>
                  <ModalForm action="register" />
                  <h4 className={estilos.registerOption}>
                    Já tem conta? <a href="/login">Entre</a>
                  </h4>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLogin;
