import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

useEffect(() => {
      // O setInterval é configurado dentro do useEffect para aumentar os segundos a cada segundo
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

        // Limpa o intervalo quando o componente for desmontado
        // A função de limpeza retorna clearInterval(interval), 
        // garantindo que o intervalo seja cancelado quando o componente for desmontado, 
        // evitando vazamento de memória.
    return () => clearInterval(interval);
  }, []); // O array vazio faz o efeito rodar apenas uma vez (após a montagem)

  return <div>Segundos: {seconds}</div>;
}

export default Timer
