import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export default function Private({ children }) {
  //console.log("Teste");
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return <div></div>;
  }

  //console.log(signed);
  // se não estiver logado, redireciona para a página de login
  if (!signed) {
    return <Navigate to="/" />;
  }

  return children;
}
