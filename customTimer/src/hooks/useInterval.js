import { useEffect, useRef } from "react";

const useInterval = (callback, delay) => {
    const callbacRef = useRef();

    useEffect(() => {
        callbacRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!delay) {
            return () => {};
        }

        const interval = setInterval(() => {
            callbacRef.current && callbacRef.current();
        }, delay);
        return () => clearInterval(interval);
    }, [delay]);
}

export default useInterval;