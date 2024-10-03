import React from "react";
import "./Contato.css";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <Link to="/">Retorna para Home</Link> <br />
    </div>
  );
}

export default Notfound;
