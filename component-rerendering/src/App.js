import React, { useState } from 'react';
import CountId from './CountId';
import Sticker from './Sticker';

function App() {
  // 1. setState 로 값을 변경한 경우
  const [toggle, setToggle] = useState(false);
  const [countId, setCountId] = useState(1);
  
  console.log('rerendering app');
  
  const toggleFunc = () => {
    setToggle(!toggle);
  }

  const plusCount = () => {
    setCountId(countId + 1);
  }

  return (
    <>
      <button onClick={toggleFunc}>toggle</button>
      <button onClick={plusCount}>plus count</button>
      <CountId countId={countId} />
      <Sticker />
    </>
  );
}

export default App;
