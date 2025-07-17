import "./styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import { Frame1 } from "./Frame1/Frame1";
import { Frame2 } from "./Frame2/Frame2";
import { Frame4 } from "./Frame4/Frame4";

// Navigation component
const Navigation = () => {
  const location = useLocation();

  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        background: "rgba(255, 255, 255, 0.9)",
        padding: "10px 20px",
        borderRadius: "25px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        display: "flex",
        gap: "15px",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: location.pathname === "/" ? "#007bff" : "#333",
          fontWeight: location.pathname === "/" ? "bold" : "normal",
          padding: "8px 16px",
          borderRadius: "20px",
          transition: "all 0.3s ease",
        }}
      >
        Home
      </Link>
      <Link
        to="/skills"
        style={{
          textDecoration: "none",
          color: location.pathname === "/skills" ? "#007bff" : "#333",
          fontWeight: location.pathname === "/skills" ? "bold" : "normal",
          padding: "8px 16px",
          borderRadius: "20px",
          transition: "all 0.3s ease",
        }}
      >
        Skills
      </Link>
      <Link
        to="/about"
        style={{
          textDecoration: "none",
          color: location.pathname === "/about" ? "#007bff" : "#333",
          fontWeight: location.pathname === "/about" ? "bold" : "normal",
          padding: "8px 16px",
          borderRadius: "20px",
          transition: "all 0.3s ease",
        }}
      >
        About
      </Link>
    </nav>
  );
};

export default function App() {
  return (
    <Router>
      <div style={{ width: "100%", height: "100%" }}>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Frame1 />} />
          <Route path="/skills" element={<Frame2 />} />
          <Route path="/about" element={<Frame4 />} />
        </Routes>
      </div>
    </Router>
  );
}
