import { useEffect, useRef, useState } from "react";

const useTimer = (initialValue) => {
    console.log('useTimer rendering');
    const intervalId = useRef(0);
    const [isRunning, setIsRunning] = useState(false);
    const [minuteBar, setMinuteBar] = useState(initialValue);
    const [totalSec, setTotalSec] = useState(initialValue * 60);

    const start = () => {
        setIsRunning(true);
        intervalId.current = setInterval(() => {
            // setTotalSec(totalSec - 1); 로 하니까 안됨
            setTotalSec(totalSec => totalSec - 1);
        }, 1000);
    }

    const end = () => {
        setIsRunning(false);
        setMinuteBar(initialValue);
        setTotalSec(initialValue * 60);
        clearInterval(intervalId.current)
    }

    const handleMiniteBar = (newValue) => {
        setTotalSec(newValue * 60);
        setMinuteBar(newValue);
    }

    useEffect(() => {
        return () => clearInterval(intervalId.current);
    }, []);
    
    return [Math.floor(totalSec / 60), Math.floor(totalSec % 60), 
            minuteBar, handleMiniteBar, 
            isRunning, start, end];
}

export { useTimer };