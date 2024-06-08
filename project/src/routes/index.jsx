import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import Private from "./Private";
import Error from "../pages/Error";

// Definição do componente RoutesApp que contém as rotas da aplicação
// O componente RoutesApp é utilizado pelo componente App para definir as rotas da aplicação
function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/admin"
        element={
          <Private>
            <Admin />
          </Private>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default RoutesApp;