import React, { useState } from "react";
import Memoization from "./Memoization";

function App() {
  const [dummy, setDummy] = useState('');

  const onChange = (event) => {
    console.log('onChange called');
    setDummy(event.target.value);
  }
  return (
    <>
      <input name="dummyInput" value={dummy} onChange={onChange} />
      <Memoization birthYear={"1991"} birthMonth={"07"} birthDay={"23"} />
    </>
  );
}

export default App;
