import React, { useMemo } from "react";

const calculdateDays = (birthYear, birthMonth, birthDay) => {
    console.log('calculdate days');
    const nowYear = new Date().getFullYear();
    const nowMonth = new Date().getMonth() + 1;
    const nowDay = new Date().getDate();

    const birthDate = new Date(birthYear, birthMonth, birthDay);
    const todayDate = new Date(nowYear, nowMonth, nowDay);

    return (todayDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24);
}

const Memoization = ({ birthYear, birthMonth, birthDay }) => {
    console.log('memoization rendering');

    // const days = calculdateDays(birthYear, birthMonth, birthDay);
    const days = useMemo(() => calculdateDays(birthYear, birthMonth, birthDay), [birthYear, birthMonth, birthDay]);
    
    return (
        <>
            <h1>{days}일</h1>
        </>
    );
}

export default Memoization;
