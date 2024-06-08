import { Link } from "react-router-dom";
import "./error.css";

// Função que irá renderizar a página de erro 404
// quando o usuário tentar acessar uma rota que não existe ou não foi criada
function Erro() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Erro;