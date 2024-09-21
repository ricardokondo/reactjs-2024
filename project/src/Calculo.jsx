import React, { useState, useMemo } from 'react';
import './App.css';

function ExpensiveComponent({ number }) {
  // Função simulando um cálculo pesado
  const expensiveCalculation = (num) => {
    console.log('Calculando...');
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  // useMemo memoriza o valor retornado pelo cálculo
  const memoizedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h2>Resultado do cálculo: {memoizedValue}</h2>
    </div>
  );
}

function Calculo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  return (
    <div>
      <ExpensiveComponent number={number} />
      <button onClick={() => setCount(count + 1)}>Incrementar contador: {count}</button>
      <button onClick={() => setNumber(number + 1)}>Incrementar número: {number}</button>
    </div>
  );
}

export default Calculo;
