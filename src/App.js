import "./App.css";
import React, { useState, useEffect } from "react";
import Clock from "./Clock";

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("March 28,2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const duration = countDownDate - now;
      const days = Math.floor(duration / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (duration % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((duration % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((duration % (60 * 1000)) / 1000);

      if (duration < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });
  return (
    <div className="App">
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </div>
  );
}

export default App;
