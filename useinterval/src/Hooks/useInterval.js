import { useEffect, useRef } from "react";

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const func = () => {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(func, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default useInterval;