# React.memo 와 useMemo 사용법 정리

## 1. React.memo
<https://ko.reactjs.org/docs/react-api.html#reactmemo>
```
const MyComponent = React.memo(function MyComponent(props) {
  /* props를 사용하여 렌더링 */
});
```

### 1) React.memo 는 HOC(Higher Order Component, 고차함수) 이다.
<https://ko.reactjs.org/docs/higher-order-components.html>  
고차 컴포넌트는 컴포넌트를 인자로 받아 새로운 컴포넌트를 반환하는 함수이다.

### 2) React.memo 를 사용하면 컴포넌트의 불필요한 리렌더링을 방지할 수 있다.
부모로부터 전달받은 'props' 가 동일하다면 부모 컴포넌트가 리렌더링 되어도 자신의 컴포넌트를 리렌더링하지 않는다.

<br>

## 2. useMemo
<https://ko.reactjs.org/docs/hooks-reference.html#usememo>
```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### 1) useMemo 는 함수형 컴포넌트에서 사용하는 hook 이다.
<https://ko.reactjs.org/docs/hooks-intro.html>  

### 2) useMemo 는 함수를 메모이제이션한다.
`React.memo` 가 컴포넌트를 메모이제이션했다면, `useMemo` 는 함수를 메모이제이션한다.

즉, 부모 컴포넌트가 리렌더링되면 자식 컴포넌트의 useMemo 함수는 메모이제이션되어 재실행되지 않지만 자식 컴포넌트 자체는 리렌더링된다.