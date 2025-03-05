import "./Navbar.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-space"></div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/Sobre">SOBRE</Link></li>
        <li><Link to="/Projetos">PROJETOS</Link></li>
        <li><Link to="/Formulario">FORMULÁRIO</Link></li>
        <li><Link to="/Parcerias">PARCERIAS</Link></li>
        <li><Link to="/Calendly">CALENDÁRIO</Link></li>
      </ul>

      <div className="social-icons">
        <a href="https://www.instagram.com/lab_lita?igsh=a2Y1ZDcxMnh2NWEx" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Projeto-LITA" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
