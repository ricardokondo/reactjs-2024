import React, { useEffect, useState } from "react";
import "./stylesRequisicao.css";

// Link para acessar a API que utilizaremos como teste
////https://sujeitoprogramador.com/rn-api/?api=posts

function Requisicao() {
  // Criando um estado para armazenar as informações da API em um array vazio []
  // e a função que irá alterar o estado setNutri(useState([])) e o useState é uma função que
  // recebe um parâmetro que é o valor inicial do estado(useState([])) e retorna um array com duas posições,
  // a primeira posição é o valor do estado e a segunda posição é a função que altera o valor do estado(setNutri)
  const [nutri, setNutri] = useState([]);

  // Utilize o useEffect para carregar as informações da API assim que o componente for montado na tela
  useEffect(() => {
    //Função na qual carrega as informações de API e armazena no array Nutri
    function loadApi() {
      // Armazenar a minha url em uma variável
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      // Requisição HTTP utilizando API Fetch() do javaScript
      // Dando certo "ok"
      // fetch retorna uma promise (promessa) que é um objeto que representa a conclusão ou falha de uma operação assíncrona
      fetch(url)
        // Recebe o resultado e transformar em um json e armazenamos no array Nutri
        // then() é uma função que recebe um parâmetro que é o resultado da requisição e retorna um json
        .then((result) => result.json())
        // Devolve o resultado e armazenamos no array Nutri
        // then((json) => setNutri(json) é uma função que recebe um parâmetro que é o resultado da requisição e retorna um array
        .then((json) => {
          console.log(json);
          setNutri(json);
        });
    }

    // Instanciação da função loadApi() para carregar as informações da API assim que o componente for montado na tela utilizando o useEffect
    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {/* COMENTÁRIO JSX 
       map é uma função que percorre o array e retorna um novo array com as informações que desejamos 
      */}
      {nutri.map((item) => {
        return (
          // key={item.id} é uma propriedade que recebe um valor único para cada item do array para que o react consiga identificar cada item do array
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">{item.subtitulo}</p>
            <a className="botao">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default Requisicao;
