import { useState } from "react";
import useInterval from "./useInterval";

const useTimer = (initialMinute) => {
    const [isRunning, setIsRunning] = useState(false);
    const [isFinish, setIsFinish] = useState(false);
    const [restSeconds, setRestSeconds] = useState(initialMinute * 60);

    useInterval(
        () => { countdown() },
        isRunning ? 1000 : null
    );

    const countdown = () => {
        if (restSeconds <= 1) {
            setIsRunning(false);
            setIsFinish(true);
        }
        setRestSeconds(restSeconds - 1);
    }

    const start = () => {
        setIsRunning(true);
        setIsFinish(false);
    }

    const end = () => {
        setIsRunning(false);
        setIsFinish(false);
    }

    const reset = () => {
        setIsRunning(false);
        setIsFinish(false);
        setRestSeconds(initialMinute * 60);
    }

    return [restSeconds, setRestSeconds, isRunning, isFinish, start, end, reset];
}

export default useTimer;