/**
 *  Neste exemplo, um contador é implementado usando o hook useState.
 * O hook useState é uma função que retorna um array com dois elementos:
 * o estado atual e uma função que permite atualizar esse estado.
 * 
 * O valor inicial do estado é passado como argumento para o useState.
 * 
 * A função de atualização do estado é chamada setCount.
 * Quando o botão é clicado, setCount é chamado com o novo valor do estado.
 * 
 * O novo valor do estado é calculado com base no valor atual do estado.
 * Isso é feito passando uma função para setCount que recebe o valor atual do estado como argumento.
 * 
 * O novo valor do estado é calculado adicionando 1 ao valor atual do estado.
 * 
 */

import './App.css';
import React, { useEffect, useState, useCallback } from 'react';

function Counter() {
  // Declare uma variável de estado "count" e inicialize com 0
  const [count, setCount] = useState(0);

  // Atualiza o título da página após cada renderização
  
  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  }, [count]);

  //---------- useCallback e useEffect ------------
  // Função para incrementar o contador memorizada com useCallback
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    console.log('Função increment foi modificada');
  }, [increment]);

  /// ------

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>

        Clique aqui useEffect
      </button>
      <br />
      <br />
      <button onClick={increment} > Clique aqui useCallback

      </button>
    </div>
  );
}

export default Counter;