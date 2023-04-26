import React, { useState } from 'react';
import useCustomStopwatch from './hooks/useCustomStopwatch';

const Stopwatch = () => {
    const [expiry, setExpiry] = useState(300);
    const {seconds, isRunning, start, pause, reset} = useCustomStopwatch();

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '100px' }}>
                <span>{seconds} : {expiry - seconds}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Stopwatch;