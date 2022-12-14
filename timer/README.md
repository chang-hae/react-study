# 리액트 타이머 만들기

## 1. 개발에 필요한 내용

### 1) JavaScript - setInterval, clearInterval
<https://developer.mozilla.org/en-US/docs/Web/API/setInterval>  
```
const intervalID = setInterval(func, delay)
```
`setInterval` 함수는 전달받은 *func* 함수를 *delay*(ms) 주기로 반복 실행시켜주는 함수이다.

<br>

<https://developer.mozilla.org/en-US/docs/Web/API/clearInterval>  
```
clearInterval(intervalID)
```
`clearInterval` 은 *setInerval* 함수의 동작을 취소하는 함수이다.

### 2) React - hook
<https://ko.reactjs.org/docs/hooks-intro.html>  
<https://velog.io/@sunhwa508/%EC%9A%B0%EB%A6%AC%EA%B0%80-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-Hooks-%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0>  

`hook` 은 기존 클래스형 컴포넌트에서만 가능했던 상태 관리 및 렌더링 관련 작업들을 함수형 컴포넌트에서도 사용할 수 있도록 도와주는 기능이다.

> hook 사용 이유
1. 여러 컴포넌트에서 사용될 독립적인 상태 및 관련 로직을 추상화할 수 있다.
2. 복잡한 코드를 가독성 좋게 표현할 수 있다.
3. 클래스 컴포넌트의 this 사용에 대한 어려움이 사라졌다.

<br>

### 3) React - useRef
<https://reactjs.org/docs/hooks-reference.html#useref>
```
const refContainer = useRef(initialValue);
```

`useRef` 는 크게 두 가지 기능을 수행한다.
하나는 리액트에서 DOM 에 접근하기 위한 기능이고 다른 하나는 컴포넌트가 언마운트될 때까지 그 값이 유지되는 기능이다.

여기서는 컴포넌트가 언마운트 될 때까지 값을 유지하기 위해 사용한다.

### 4) React- useInterval(사용자정의)
<https://overreacted.io/making-setinterval-declarative-with-react-hooks/>  
<https://velog.io/@jakeseo_me/%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%9B%85%EC%8A%A4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C-setInterval-%EC%82%AC%EC%9A%A9-%EC%8B%9C%EC%9D%98-%EB%AC%B8%EC%A0%9C%EC%A0%90>  

다른 스터디 프로젝트인 'useinterval' 을 참고한다.