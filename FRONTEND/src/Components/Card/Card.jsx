import { Link } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";

import estilos from "./card.module.css";

const Card = ({ id, title, desc, img }) => {
  return (
    <>
      <div
        className={estilos.container}
        onClick={() => {
          window.location.replace(`/post/${id}`);
        }}
      >
        <div
          className={estilos.cardImg}
          style={{
            background: `url(${img})`,
          }}
        ></div>
        <div className={estilos.cardContainer}>
          <div className={estilos.userInfo}>
            <FaUserCircle size={25} />
            <p>Nome do usuário</p>
          </div>
          <div className={estilos.cardContent}>
            <div clsasName={estilos.cardTitle}>
              <h4>{title}</h4>
            </div>

            <div className={estilos.cardDesc}>
              <p>{desc}</p>
            </div>

            <div className={estilos.cardFooter}>
              <div className={estilos.cardReactions}>
                <div className={estilos.reactionsLike}>
                  <AiFillLike size={25} />
                  <p>150</p>
                </div>
                <div className={estilos.reactionsComments}>
                  <FiMessageCircle size={25} />
                  <p>4</p>
                </div>
              </div>
              <div className={estilos.cardInfo}>
                <p>Publicado: 12:13</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
