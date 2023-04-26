import React, { useState } from 'react';
import useCustomStopwatch from './hooks/useCustomStopwatch';


const Stopwatch = () => {
    const [startTime, setStartTime] = useState(Date.now());
    const [expiry, setExpiry] = useState(300);
    const {seconds, isRunning, start, pause, reset} = useCustomStopwatch();

    const onStart = () => {
        const startMilli = Date.now();
        setStartTime(startMilli);
        console.log(startMilli);
    }
    
    const onEnd = () => {
        console.log(startTime);
        console.log(startTime + (seconds * 1000));
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '100px' }}>
                <span>{seconds} : {expiry - seconds}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button onClick={() => {
                start();
                onStart();
            }}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={() => {
                reset();
                onEnd();
            }}>Reset</button>
        </div>
    );
}

export default Stopwatch;