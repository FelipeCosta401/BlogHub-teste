import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";

import estilos from "./viewpost.module.css";

import Navbar from "../../../Components/Navbar/Navbar";
import Comment from "../../../Components/Comment/Comment"

const ViewPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: `Titulo do card ${id}`,
    desc: `Descriçao do card ${id}`,
    img: "https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg",
  });

  useEffect(() => {
    if (id % 2 == 0) {
      setPost({
        title: `Titulo do card ${id}`,
        desc: `Descriçao do card ${id}`,
        img: "https://cc-prod.scene7.com/is/image/CCProdAuthor/FF-SEO-text-to-image-marquee-mobile-2x?$pjpeg$&jpegSize=100&wid=600",
      });
    }
  }, []);

  return (
    <>
      <div className={estilos.container}>
        <header>
          <Navbar />
        </header>
        <main>
          <div className={estilos.post}>
            <div className={estilos.postImg}>
              <img src={post.img} alt="" />
            </div>
            <div className={estilos.postContent}>
              <div className={estilos.userInfo}>
                <div className={estilos.user}>
                  <FaUserCircle size={35} />
                  <p>Nome do usuário</p>
                </div>
                <div className={estilos.postInfo}>
                  <p>Publicado: 13:29</p>
                </div>
              </div>
              <div className={estilos.mainContent}>
                <div className={estilos.postTitle}>
                  <h1>{post.title}</h1>
                </div>
                <div className={estilos.postDesc}>
                  <p>{post.desc}</p>
                </div>
                <div className={estilos.postFooter}>
                  <div className={estilos.reactionsLike}>
                    <AiFillLike size={25} />
                    <p>150</p>
                  </div>
                  <div className={estilos.reactionsComments}>
                    <FiMessageCircle size={25} />
                    <p>4</p>
                  </div>
                </div>
              </div>
              <h4>Comentários:</h4>
              <div className={estilos.commentsContainer}>
                <Comment />
                <Comment />
                <Comment />
              </div>
            </div>
          </div>
        </main>
        <footer>
          <h1>E esse é o footer</h1>
        </footer>
      </div>
    </>
  );
};

export default ViewPost;
