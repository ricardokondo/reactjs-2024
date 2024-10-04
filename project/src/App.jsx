import React, { useState, useEffect } from "react";
import "./App.css"; // Estilos para a interface

const WORK_TIME = 25 * 60; // 25 minutos em segundos
const SHORT_BREAK = 5 * 60; // 5 minutos em segundos
const LONG_BREAK = 15 * 60; // 15 minutos em segundos
const SESSIONS_BEFORE_LONG_BREAK = 4;

function PomodoroClock() {
  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionCount, setSessionCount] = useState(0);
  const [isWorkSession, setIsWorkSession] = useState(true);

  // Hook para controlar o cronômetro
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      clearInterval(timer);
      if (isWorkSession) {
        setSessionCount((prev) => prev + 1);
        if (sessionCount + 1 === SESSIONS_BEFORE_LONG_BREAK) {
          setTimeLeft(LONG_BREAK);
        } else {
          setTimeLeft(SHORT_BREAK);
        }
      } else {
        setTimeLeft(WORK_TIME);
      }
      setIsWorkSession((prev) => !prev);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isWorkSession, sessionCount]);

  const startPauseHandler = () => {
    setIsRunning((prev) => !prev);
  };

  const resetHandler = () => {
    setIsRunning(false);
    setTimeLeft(WORK_TIME);
    setSessionCount(0);
    setIsWorkSession(true);
  };

  // Formata os minutos e segundos para a interface
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      secs < 10 ? "0" : ""
    }${secs}`;
  };

  return (
    <div className="pomodoro-clock">
      <h1>Pomodoro Clock</h1>
      <div className="timer">
        <h2>
          {isWorkSession
            ? "Work Time"
            : sessionCount + 1 === SESSIONS_BEFORE_LONG_BREAK
            ? "Long Break"
            : "Break Time"}
        </h2>
        <div className="time">{formatTime(timeLeft)}</div>
      </div>
      <div className="controls">
        <button onClick={startPauseHandler}>
          {isRunning ? "Pausar" : "Iniciar"}
        </button>
        <button onClick={resetHandler}>Resetar</button>
      </div>
      <div className="session-info">
        <p>Sessão: {sessionCount}</p>
      </div>
    </div>
  );
}

export default PomodoroClock;
