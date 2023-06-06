import React, { useCallback, useState } from 'react';
import RecipeTable from './RecipeTable';

function App() {
  const [toggle, setToggle] = useState(true);
  
  const alertTitle = () => {
    alert("얼어죽어도 아이스 아메리카노, 더워죽어도 따뜻한 아메리카노");
    setToggle(!toggle);
  }

  const useCallbackAlertTitle = useCallback(alertTitle, []);

  return (
    <>
      <RecipeTable alertTitle={alertTitle} />
    </>
  );
}

export default App;
