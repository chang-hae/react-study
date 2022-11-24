import React from "react";

function TimerClock({ minutes, seconds }) {
    console.log('timerClock rendering');
    return (
        <>
            <h1>{minutes}분 {seconds}초</h1>
        </>
    );
}

export default TimerClock;
