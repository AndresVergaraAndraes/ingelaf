import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./index.css";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Works from "./routes/Works";

function App() {
  return (
    <>
<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/servicios" element={<Works/>} />
          <Route path="/sobrenosotros" element={<About/>} />
          <Route path="/contactenos" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
