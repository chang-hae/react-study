## Axios Interceptor 를 이용한 Token Refreshing 정리 

### 1. 프로젝트 구성
* front-end : axios-interceptor
* back-end : delay-response-server

> 토큰 만료에 대한 Refreshing 처리가 주요 포인트이므로 토큰은 timestamp 로 대체하여 구현함

### 2. 테스트 시나리오
1. `첫 번째 Request` 발송
2. Token 만료로 인한 서버 401(Unauthorized) 응답 수신
3. `첫 번째 Request` 를 *addRefrshSubscriber* 함수로 *refreshSubscribers* 에 저장
4. *isTokenRefreshing* 이 **false** 이므로 토큰 재발급 API 호출
5. 서버의 토큰 재발급을 기다리는 동안 `두 번째 Request` 발송
6. `두 번째 Request` 는 *refreshSubscribers* 에 추가되고, *isTokenRefreshing* 이 **true** 이므로 서버에 추가로 토큰 재발급 요청하지 않음
7. 서버 재발급 토큰 응답 수신 후 *isTokenRefreshing* 은 **false** 로 세팅
8. *onTokenRefreshed* 함수를 통해 재발급 받은 토큰으로 저장되있던 첫 번째와 두 번째 Request 를 순차발송처리