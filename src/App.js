import "./styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Vito1 from "./components/Vito1";
import Vito2 from "./components/Vito2";
import Vito3 from "./components/Vito3";
import Vito4 from "./components/Vito4";
import Rezervacija from "./components/Rezervacija";

export default function App() {
  return (
    <Router>
      <header className="header">
        <h1>🔥 Izgoreni Kutak🔥</h1>
        <p className="napravio">Lucijan Cosic</p>
        <nav>
          <NavLink to="/vito1">Vito 1</NavLink>
          <NavLink to="/vito2">Vito 2</NavLink>
          <NavLink to="/vito3">Vito 3</NavLink>
          <NavLink to="/vito4">Vito 4</NavLink>
          <NavLink to="/rezervacija">Rezervacija</NavLink>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Vito1 />} />
          <Route path="/vito1" element={<Vito1 />} />
          <Route path="/vito2" element={<Vito2 />} />
          <Route path="/vito3" element={<Vito3 />} />
          <Route path="/vito4" element={<Vito4 />} />
          <Route path="/rezervacija" element={<Rezervacija />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>Izgoreni Kutak</p>
      </footer>
    </Router>
  );
}
