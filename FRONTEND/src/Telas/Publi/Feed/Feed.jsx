import Card from "../../../Components/Card/Card";

import estilos from "./feed.module.css";

const Feed = () => {
  return (
    <>
      <div className={estilos.container}>
        <h1>Veja as publicações mais procuradas:</h1>
        <div className={estilos.cards}>
          <Card
            id={1}
            title={"Titulo do card1"}
            desc={"Descriçao do card 1"}
            img={
              "https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg"
            }
          />
          <Card
            id={2}
            title={"Titulo do card2"}
            desc={"Descriçao do card 2"}
            img={
              "https://cc-prod.scene7.com/is/image/CCProdAuthor/FF-SEO-text-to-image-marquee-mobile-2x?$pjpeg$&jpegSize=100&wid=600"
            }
          />
          <Card
            id={3}
            title={"Titulo do card 3"}
            desc={"Descriçao do card 3"}
            img={
              "https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg"
            }
          />
          <Card
            id={4}
            title={"Titulo do card4"}
            desc={"Descriçao do card 4"}
            img={
              "https://cc-prod.scene7.com/is/image/CCProdAuthor/FF-SEO-text-to-image-marquee-mobile-2x?$pjpeg$&jpegSize=100&wid=600"
            }
          />
          <Card
            id={5}
            title={"Titulo do card5"}
            desc={"Descriçao do card 5"}
            img={
              "https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg"
            }
          />
          <Card
            id={6}
            title={"Titulo do cad6"}
            desc={"Descriçao do card 6"}
            img={
              "https://cc-prod.scene7.com/is/image/CCProdAuthor/FF-SEO-text-to-image-marquee-mobile-2x?$pjpeg$&jpegSize=100&wid=600"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Feed;
