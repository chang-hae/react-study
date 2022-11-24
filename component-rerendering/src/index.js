import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * 리액트 컴포넌트 리렌더링 케이스 정리
 * 
 * 1. setState 로 값을 변경한 경우
 * 2. 전달받은 props 값이 업데이트 된 경우
 * 3. 부모 컴포넌트가 렌더링되는 경우
 */

ReactDOM.createRoot(
  document.getElementById('root')
).render(<App />);
