# useInterval Hook 만들기

## 1. 왜 setInterval 이 아니라 useInterval 을 써야하는가
<https://overreacted.io/making-setinterval-declarative-with-react-hooks/>  
<https://velog.io/@jakeseo_me/%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%9B%85%EC%8A%A4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C-setInterval-%EC%82%AC%EC%9A%A9-%EC%8B%9C%EC%9D%98-%EB%AC%B8%EC%A0%9C%EC%A0%90>

이는 리액트 프로그래밍 모델과 명령형 *setInterval API* 사이의 임피던스 불일치 때문이다.

### 1) React
리액트 컴포넌트는 마운트되고 많은 상태변화를 겪은 뒤 렌더링을 통해 모든 상태를 한 번에 표현한다.

### 2) setInterval
*setInterval* 은 일단 설정되고 나면 *interval* 을 없애는 것 말고는 어떠한 것도 변경할 수 없습니다.

### 3) useRef, 이 불일치를 끝내러 왔다.
지속적인 컴포넌트 리렌더링 환경에서 *interval* 은 전혀 변경하지 않고, 대신 최근 변경된 *interval callback*을 가리키는 *savedCallback* 변수를 도입한다면 어떻게 될까?

프로세스는 다음과 같다.

1. setInterval(fn, delay) 에서 fn이 savedCallback을 호출하게 한다.
2. 첫 번째 렌더링에서 savedCallback을 callback1 로 설정
3. 두 번째 렌더링에서 savedCallback을 callback2 로 설정
4. ...
5. interval 은 종료직전까지 정상적으로 수행

이 때, *savedCallback* 은 리렌더링 시에도 잘 보존되어야 하는데 여기서 `useRef` 를 사용한다. `useRef` 로 *callback*을 관리하는 *useInterval Hook*을 만들어 사용함으로써 임피던스 불일치 문제를 해결하는 것이다.