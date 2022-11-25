import { useState } from "react";
import useInterval from "./Hooks/useInterval";

const Counter = () => {
    const [count, setCount] = useState(100);

    useInterval(() => {
        setCount(count - 1);
    }, 1000);

    return <h1>{count}</h1>;
  }
  
  export default Counter;
  