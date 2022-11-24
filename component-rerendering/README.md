# React Component Rerendering Case Study

### 1. setState 로 값을 변경한 경우
자신의 컴포넌트가 리렌더링 됨

### 2. 전달받은 props 값이 업데이트 된 경우
정확한 테스트를 위해 React.memo 를 사용하여 props 변경 감지만 작동하도록 세팅하였음

### 3. 부모 컴포넌트가 렌더링되는 경우
부모로부터 props 를 받지 않는 Sticker 컴포넌트를 만들어 테스트함