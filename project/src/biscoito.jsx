import React, { useState } from "react";
import "./App.css";
import biscoito from "./assets/biscoito.png";

// Componente App como função
function Biscoito() {
  // Utilizando o hook useState para armazenar o texto da frase
  // TO DO 

  // Array com as frases do biscoito da sorte
  // TO DO

  // Função que gera uma frase aleatória
  const quebraBiscoito = () => {
    // TO DO
  };

  return (
    <div className="container">
      <img src={biscoito} className="img" alt="Biscoito da Sorte" />
      <Botao nome="Abrir Biscoito" acaoBtn={quebraBiscoito} />
      <h3 className="textoFrase">{textoFrase}</h3>
    </div>
  );
}

// Componente Botao como função
function Botao({ nome, acaoBtn }) {
  return (
    <div>
      <button onClick={acaoBtn}>{nome}</button>
    </div>
  );
}

export default Biscoito;
