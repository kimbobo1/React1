import React,{useState} from "react";

function MyForm(){

    const [formData,setForData]=useState({
        irum:'',
        nai:'',
        menu:'파전'
    })
    const dataChange = (e) =>{
        const name = e.target.name; // form 태그 내의 name
        const value = e.target.value
        setForData({
            ...formData,
            [name]:value
        });
    }
    const dataSubmit = (e) => {
        e.preventDefault(); // 고유기능 해제
        const {nai} = formData; // formData 객체에서 nai를 추출해 nai 변수에 치환

        if(!Number(nai) || isNaN(Number(nai))){ // 나이 입력자료 검사 
            alert('나이는 숫자로 입력하시오');
        }else{
            alert('처리 성공')
        }
    }
    return(
        <>
       <h3>결과 : {formData.irum},넌 {formData.nai} 살! 선택한 음식은 {formData.menu}</h3> 
       
        <form onSubmit={dataSubmit}>
            이름 입력: <input type="text" name="irum" onChange={dataChange}></input><br></br>
            나이 입력: <input type="text" name="nai" onChange={dataChange}></input>
            야식 메뉴: 
            <select name="menu" value={formData.menu} onChange={dataChange}>
                <option value="치킨">치킨</option>
                <option value="파전">파전</option>
                <option value="곱창">곱창</option>
            </select>
            <br></br>
            <button type="submit">전송</button>
        </form>
        </>
    )
}
export default MyForm;