import React, { useEffect, useState } from "react";
import Slider from '@mui/material/Slider';
import useTimer from "./hooks/useTimer";

function Timer() {
    const [restSeconds, setRestSeconds, isRunning, isFinish, start, end, reset] = useTimer(1);

    const handleSliderChange = (event, newMinute) => {
        if (typeof newMinute === 'number') {
            setRestSeconds(newMinute * 60);
        }
    };

    return (
        <>
            <button onClick={() => { start(); }} disabled={isRunning || isFinish}>시작</button>
            <button onClick={() => { end(); }} disabled={!isRunning}>종료</button>
            <button onClick={() => { reset(); }} disabled={!isFinish}>초기화</button>
            <h1>{Math.floor(restSeconds / 60)}분 {Math.floor(restSeconds % 60)}초</h1>
            <Slider
                step={1}
                min={0}
                max={60}
                onChange={handleSliderChange}
                aria-label="Disabled slider"
            />
            {isFinish ? <h3>타이머 종료</h3> : null}
        </>
    );
}

export default Timer;
