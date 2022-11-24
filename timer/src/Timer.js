import React, { useState } from "react";
import Slider from '@mui/material/Slider';
import { useTimer } from "./hooks/useTimer";
import TimerClock from "./TimerClock";

function Timer() {
    console.log('timer rendering');
    const [minutes, seconds, minuteBar, handleMiniteBar, isRunning, start, end] = useTimer(10);

    const handleStart = () => {
        start();
    }

    const handleEnd = () => {
        end();
    }

    const handleSliderChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            handleMiniteBar(newValue)
        }
    };

    return (
        <>
            <button onClick={handleStart} disabled={isRunning}>시작</button>
            <button onClick={handleEnd} disabled={!isRunning}>종료</button>
            <TimerClock minutes={minutes} seconds={seconds} />
            <Slider
                value={minuteBar}
                min={0}
                max={60}
                step={1}
                onChange={handleSliderChange}
                aria-label="Disabled slider"
            />
        </>
    );
}

export default Timer;
