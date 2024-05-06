import Logo from "../../assets/MainLogo.png";
import estilos from "./navbar.module.css";
import { Link } from "react-router-dom";

import { FaSearch, FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className={estilos.container}>
        <div className={estilos.logo}>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className={estilos.searchField}>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            placeholder="O que você está procurando?"
          />
          <FaSearch size={35} className={estilos.searchIcon} />
        </div>
        <div className={estilos.loginContainer}>
          <Link to="/login" className={estilos.loginIcon}>
            <FaRegUserCircle size={55} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
