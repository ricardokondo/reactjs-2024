import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
// Importando o componente ToastContainer do react-toastify para ser utilizado na aplicação e estilizando o componente
// https://www.npmjs.com/package/react-toastify
import { ToastContainer } from "react-toastify";
// Importando o arquivo de estilização do componente ToastContainer do react-toastify
import "react-toastify/dist/ReactToastify.css";


// Definição do componente App que é o componente raiz da aplicação e que contém as rotas da aplicação
export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </BrowserRouter>
  );
}