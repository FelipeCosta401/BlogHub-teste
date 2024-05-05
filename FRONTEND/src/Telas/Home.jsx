import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="container">
        <header>
          <Navbar />
        </header>
        <main>
          <p>Essa é a main</p>
        </main>
        <footer>
          <h1>E esse é o footer</h1>
        </footer>
      </div>
    </>
  );
};

export default Home;
