import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";
import Notfound from "./Notfound";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
