import { useState } from "react";
import useInterval from "./useInterval";

const getSecondsFromPrevTime = (prevTime, shouldRound) => {
    const now = new Date().getTime();
    const milliSecondsDistance = now - prevTime;
    if (milliSecondsDistance > 0) {
        const val = milliSecondsDistance / 1000;
        return shouldRound ? Math.round(val) : val;
    }
    return 0;
}

const useCustomStopwatch = () => {
    const [prevTime, setPrevTime] = useState(new Date());
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useInterval(() => {
        setSeconds(getSecondsFromPrevTime(prevTime, true));
    }, isRunning ? 1000 : null);

    const start = () => {
        const newPrevTime = new Date();
        setPrevTime(newPrevTime);
        setIsRunning(true);
        setSeconds(getSecondsFromPrevTime(newPrevTime, true));
    }

    const pause = () => {
        setIsRunning(false);
    }

    const reset = () => {
        setPrevTime(new Date());
        setIsRunning(false);
        setSeconds(0)
    }

    return {seconds, start, pause, reset, isRunning};
}

export default useCustomStopwatch;