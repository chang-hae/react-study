import React from "react";
import Slider from '@mui/material/Slider';
import useTimer from "./hooks/useTimer";

function Timer() {
    const [totalSec, minuteBar, handleMinuteBar, isRunning, isFinish, start, end] = useTimer(1);

    const handleSliderChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            handleMinuteBar(newValue)
        }
    };

    return (
        <>
            <button onClick={() => { start(); }} disabled={isRunning}>시작</button>
            <button onClick={() => { end(); }} disabled={!isRunning}>종료</button>            
            <h1>{Math.floor(totalSec / 60)}분 {Math.floor(totalSec % 60)}초</h1>
            <Slider
                value={minuteBar}
                min={0}
                max={60}
                step={1}
                onChange={handleSliderChange}
                aria-label="Disabled slider"
            />
            { isFinish ? <h3>타이머 종료</h3> : null }
        </>
    );
}

export default Timer;
