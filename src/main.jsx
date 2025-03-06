import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Formulario from "./Pages/Formulario";
import Home from "./Pages/Home";
import Parcerias from "./Pages/Parcerias";
import Projetos from "./Pages/Projetos";
import Calendly from "./Pages/Calendly";
import Sobre from "./Pages/Sobre";
import "./index.css"; // Caso tenha estilos globais

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Parcerias" element={<Parcerias />} />
        <Route path="/Formulario" element={<Formulario />} />
        <Route path="/Calendly" element={<Calendly />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
