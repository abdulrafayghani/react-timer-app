import React, { useState } from 'react';
import './Timer.css'
import { TimerButton } from '../TimerButton/TimerButton';

export const Timer = () => {
  const [ time, setTime ] = useState({ms:0, s:0, m:0, h:0})
  const [ timeInterval, setTimeInterval ] = useState({})
  const [ timeStatus, setTimeStatus ] = useState(0)

  let updateMs = time.ms;
  let updateS = time.s;
  let updateM = time.m;
  let updateH = time.h;

  const runTimer = () => {
    if(updateMs === 100){
      updateS++
      updateMs = 0
    }

    if(updateS === 60){
      updateM++
      updateS = 0
    }

    if(updateM === 60){
      updateH++
      updateM = 0
    }
    updateMs++
    return setTime({ms:updateMs, s:updateS, m:updateM, h:updateH})
  }

  const startTimer = () => {
    if(timeStatus !== 1){
      runTimer()
      setTimeStatus(1)
      setTimeInterval(setInterval(runTimer, 10))
    }
  }

  const stopTimer = () => {
    clearInterval(Number(timeInterval));
    setTimeStatus(2)
  }

  const resumeTimer = () =>{
    startTimer();
  }

  const resetTimer = () => {
    clearInterval(Number(timeInterval))
    setTimeStatus(0)
    setTime({ms:0, s:0, m:0, h:0})
  }
  return (
    <div className="timer-container">
      <div className="time-display"></div>
      
      <span>{(time.h >0 ? time.h : "00")}</span> <strong className="timerDots">:</strong>
      <span>{(time.m >0 ? time.m : "00")}</span> <strong className="timerDots">:</strong>
      <span>{(time.s >0 ? time.s : "00")}</span> <strong className="timerDots">:</strong>
      <span>{(time.ms >0 ? time.ms : "00")}</span> 

      <div className="timer-button-container">
        <TimerButton buttonAction={startTimer} buttonValue={'Start'} />
        <TimerButton buttonAction={stopTimer} buttonValue={'Stop'} />
        <TimerButton buttonAction={resumeTimer} buttonValue={'Resume'} />
        <TimerButton buttonAction={resetTimer} buttonValue={'Reset'} />
      </div>
    </div>
  );
};
