import { useState, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import LapList from "./LapList";

import "./Timer.css";
import LapsHistory from "./LapsHistory";

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);

  const formatTime = () => {
    const minutes = ("0" + Math.floor((milliseconds / 60000) % 60)).slice(-2);
    const seconds = ("0" + (Math.floor(milliseconds / 1000) % 60)).slice(-2);
    const centiseconds = ("0" + (Math.floor(milliseconds / 10) % 100)).slice(
      -2
    );

    return `${minutes}: ${seconds}: ${centiseconds}`;
  };

  const startTimer = (interval) => {
    return setInterval(() => {
      setMilliseconds((prevMilliseconds) => prevMilliseconds + 10);
    }, 10);
  };

  const stopTimer = (interval) => {
    clearInterval(interval);
    return interval;
  };

  const resetTimer = () => {
    setMilliseconds(0);
    setTimerOn(false);
    saveLapsLocalStorage(laps);
    setLaps([]);
  };

  const addLap = () => {
    setLaps([...laps, formatTime()]);
  };

  const getDate = () => {
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString();
    return dataFormatada;
  };

  const changePosition = (arr, from, to) => {
    return arr.splice(to, 0, arr.splice(from, 1)[0]);
  };

  const saveLapsLocalStorage = (laps) => {
    const findDate = (element) => element == getDate();

    let completeList = laps.concat(getLapsLocalStorage());
    if (!completeList.includes(getDate())) {
      completeList.unshift(getDate());
    } else {
      changePosition(completeList, completeList.findIndex(findDate), 0);
    }

    localStorage.setItem("laps", JSON.stringify(completeList));
  };

  const getLapsLocalStorage = () => {
    const laps = JSON.parse(localStorage.getItem("laps"));
    return laps;
  };

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = startTimer(interval);
    }

    return () => stopTimer(interval);
  }, [timerOn]);

  return (
    <div className="timer-container">
      <TimerDisplay time={formatTime()} />
      <TimerControls
        timerOn={timerOn}
        onStart={() => setTimerOn(true)}
        onStop={() => setTimerOn(false)}
        onReset={resetTimer}
        onLap={addLap}
      />
      <LapList laps={laps} />
      <LapsHistory date={getDate} storageList={getLapsLocalStorage} />
    </div>
  );
};

export default Timer;
