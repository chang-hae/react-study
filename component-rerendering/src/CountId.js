import React from 'react';

const CountId = ({ countId }) => {
    // 2. 전달받은 props 값이 업데이트 된 경우
    console.log('rerendering countId', countId);
    return (
        <>
            <h1>{countId}</h1>
        </>
    );
};

/*
 * 부모 state 변경시 부모컴포넌트 리렌더링에 의한 자식컴포넌트 리렌더링이 발생하기 때문에
 * 이에 대한 케이스 분리를 위해 React.memo 로 props 가 변경되는 상황에서만 자식컴포넌트가
 * 리렌더링될 수 있도록 세팅함.
 */
export default React.memo(CountId);
