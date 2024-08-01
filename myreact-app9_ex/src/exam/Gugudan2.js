import React, { useState } from "react";

function Gugudan2(){
    const [ilist] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [result, setResult] = useState('');

    const changeNum = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
        setResult(ilist.map(i => (
            <div> {Number(e.target.num.value)} * {i} = {Number(e.target.num.value) * i } </div>
        )));
    }

    return(
        <>
            <form onSubmit={changeNum}>
                단 입력: <input type="text" name="num"/>
                <button type="submit">확인</button>
            </form>
            {result}
        </>
    );
}

export default Gugudan2;