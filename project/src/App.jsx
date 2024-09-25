import React, { useState } from "react";
import "./App.css";
import biscoito from "./assets/biscoito.png";

// Componente App como função
function App() {
  // Utilizando o hook useState para armazenar o texto da frase
  const [textoFrase, setTextoFrase] = useState("");

  // Array com as frases do biscoito da sorte
  const frases = [
    "Siga os bons e aprenda com eles.",
    "O bom-senso vale mais do que muito conhecimento.",
    "O riso é a menor distância entre duas pessoas.",
    "Deixe de lado as preocupações e seja feliz.",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
    "Acredite em milagres, mas não dependa deles.",
    "A maior barreira para o sucesso é o medo do fracasso.",
    "A vida trará coisas boas se tiver paciência.",
    "Não compense na ira o que lhe falta na razão.",
    "Não há que ser forte. Há que ser flexível.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Siga os bons e aprenda com eles",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "O bom-senso vale mais do que muito conhecimento.",
    "Uma bela flor é incompleta sem as suas folhas.",
    "Amizade e Amor são coisas que se unem num piscar de olhos.",
    "A paciência na adversidade é sinal de um coração sensível.",
    "Quem olha para fora sonha; quem olha para dentro acorda.",
    "Todas as coisas são difíceis antes de se tornarem fáceis.",
    "O conhecimento é a única virtude e a ignorância é o único vício.",
    "O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
    "Acredite em milagres, mas não dependa deles.",
    "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
    "A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!",
    "Nós somos o que pensamos.",
    "Se você se sente só é porque construiu muros ao invés de pontes.",
  ];

  // Função que gera uma frase aleatória
  const quebraBiscoito = () => {
    // Gera um número aleatório com base no tamanho do array de frases e arredonda para baixo
    const numeroAleatorio = Math.floor(Math.random() * frases.length);
    // Atualiza o estado do texto da frase com a frase gerada aleatoriamente do array
    setTextoFrase(`" ${frases[numeroAleatorio]} "`);
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

export default App;
