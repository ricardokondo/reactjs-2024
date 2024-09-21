import './App.css';
import React, { useState } from 'react';

function Task() {
  const [tarefas, setTarefas] = useState([
    "Pagar a conta de luz",
    "Estudar React Hooks",
    "Aula de programação Web",
  ]);

  const [input, setInput] = useState("");
  // A utilização do "..." é necessária para pegar todos os elementos que temos no nosso vetor
  function handleAdd() {
    setTarefas([...tarefas, input]);
    setInput("");
  }
  return (
      <div>
          <h1>Lista de tarefas</h1>
      <ul>
        {tarefas.map((tarefas) => (
          <li key={tarefas}>{tarefas}</li>
        ))}
      </ul>
      <form>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
              ></input>
              <br />
              <br />
        <button type="button" onClick={handleAdd}>
          Adicionar
        </button>
      </form>
    </div>
  );
}
export default Task;
