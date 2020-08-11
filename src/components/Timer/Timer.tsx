import React from 'react';
import './Timer.css'
import { TimerButton } from '../TimerButton/TimerButton';

export const Timer = () => {
  const state = {
    minutes: 25,
    seconds: 0,
    isOn: false,
  };

  function startTimer() {
    console.log('Starting timer.');
  }

  function stopTimer() {
    console.log('Stopping timer.');
  }

  function resetTimer() {
    console.log('Resetting timer.');
  }
  return (
    <div className="timer-container">
      <div className="time-display"></div>
      <div className="timer-button-container">
        <TimerButton buttonAction={startTimer} buttonValue={'Start'} />
        <TimerButton buttonAction={stopTimer} buttonValue={'Stop'} />
        <TimerButton buttonAction={resetTimer} buttonValue={'Reset'} />
      </div>
    </div>
  );
};
