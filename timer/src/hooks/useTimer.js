import { useEffect, useRef, useState } from "react";

const useTimer = (initialMinute) => {
    console.log('useTimer');
    const intervalId = useRef(0);
    // const [intervalId, setIntervalId] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isFinish, setIsFinish] = useState(false);
    const [minuteBar, setMinuteBar] = useState(initialMinute);
    const [totalSec, setTotalSec] = useState(initialMinute * 60);

    const start = () => {
        setIsRunning(true);
        setIsFinish(false);
        
        intervalId.current = setInterval(() => {
            setTotalSec(sec => {
                if (sec <= 1) {
                    setIsFinish(true);
                    clearInterval(intervalId.current);
                }
                return sec - 1;
            });
        }, 1000);
        // setIntervalId(setInterval(() => {
        //     setTotalSec(sec => {
        //         if (sec <= 1) {
        //             setIsFinish(true);
        //             clearInterval(intervalId.current);
        //         }
        //         return sec - 1;
        //     });
        // }, 1000));
    }

    const end = () => {
        setIsRunning(false);
        setIsFinish(false);
        setMinuteBar(initialMinute);
        setTotalSec(initialMinute * 60);
        clearInterval(intervalId.current);
        // clearInterval(intervalId);
    }

    const handleMinuteBar = (newMinute) => {
        setTotalSec(newMinute * 60);
        setMinuteBar(newMinute);
    }

    useEffect(() => {
        return () => clearInterval(intervalId.current);
        // return () => clearInterval(intervalId);
    }, []);
    
    return [totalSec, minuteBar, handleMinuteBar, isRunning, isFinish, start, end];
}

export default useTimer;