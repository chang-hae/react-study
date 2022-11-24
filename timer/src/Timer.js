import React, { useState } from "react";
import Slider from '@mui/material/Slider';
import { useTimer } from "./hooks/useTimer";
import TimerClock from "./TimerClock";

function Timer() {
    console.log('timer rendering');
    const [isRunning, setIsRunning] = useState(false);
    const [minutes, seconds, minuteBar, setMinuteBar, start, end] = useTimer(10);

    const handleStart = () => {
        setIsRunning(true);
        start();
    }

    const handleEnd = () => {
        setIsRunning(false);
        end();
    }

    const handleSliderChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setMinuteBar(newValue)
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
