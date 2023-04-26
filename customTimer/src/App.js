import React from "react";
import CustomTimer from "./CustomTimer";
import Timer from "./Timer";
import Stopwatch from "./Stopwatch";

function App() {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 300);

  return (
    <>
      {/* <CustomTimer /> */}
      <Stopwatch />
      {/* <Timer expiryTimestamp={expiryTimestamp} /> */}
    </>
  );
}

export default App;
