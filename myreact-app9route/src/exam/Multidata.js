import React from "react";

// Member 컴포넌트 
const Member = ({memberData}) => {
    return(
        <tr>
            <td>{memberData.irum}</td>
            <td>{memberData.tel}</td>
        </tr>
    )
}
// 메인 컴포넌트 
const Multidata = () =>{
       const members = [
            {irum:'관우',tel:'111-111'},
            {irum:'장비',tel:'222-111'},
            {irum:'유비',tel:'333-111'}
       ]; 
       
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>이름</th><th>전화</th>
                    </tr>
                </thead>
                <tbody>
                     {/* 배열 랜더링시 각요소에 고유 key를 추가 */} 
                    {members.map((mem, index) =>(
                       <Member key ={index} memberData={mem}></Member> 
                    ))}
                </tbody>
            </table>
        )
}
export default Multidata;
