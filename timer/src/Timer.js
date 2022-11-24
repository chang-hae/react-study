import React, { useState } from "react";
import Slider from '@mui/material/Slider';
import { useTimer } from "./hooks/useTimer";
import TimerClock from "./TimerClock";

function Timer() {
    console.log('timer rendering');
    const [isRunning, setIsRunning] = useState(false);
    const [minutes, seconds, minuteBar, setMinuteBar, startTimer, endTimer] = useTimer(10);

    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setMinuteBar(newValue)
        }
    };

    console.log(minutes);
    console.log(seconds);

    return (
        <>
            <button onClick={startTimer}>시작</button>
            <button onClick={endTimer}>종료</button>
            <TimerClock minutes={minutes} seconds={seconds} />
            <Slider
                value={minuteBar}
                min={0}
                max={60}
                step={1}
                onChange={handleChange}
                aria-label="Disabled slider"
            />
        </>
    );
}

export default Timer;
