import { useEffect, useRef, useState } from "react";

const useTimer = (initialValue) => {
    console.log('useTimer rendering');
    const intervalId = useRef(0);
    const [minuteBar, setMinuteBar] = useState(initialValue);
    const [totalSec, setTotalSec] = useState(initialValue * 60);

    const startTimer = () => {
        intervalId.current = setInterval(() => {
            console.log('tictoc...');
            // setTotalSec(totalSec - 1); 로 하니까 안됨
            setTotalSec(totalSec => totalSec - 1);
        }, 1000);
    }

    const endTimer = () => {
        console.log('endTimer');
        clearInterval(intervalId.current)
    }

    useEffect(() => {
        return () => clearInterval(intervalId.current);
    }, []);
    
    return [Math.floor(totalSec / 60), Math.floor(totalSec % 60), minuteBar, setMinuteBar, startTimer, endTimer];
}

export { useTimer };