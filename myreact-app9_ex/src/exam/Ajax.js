import React,{useState, useEffect} from "react";

const Ajax = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // fetch를 이용해 jsp 자료(Apache server)읽기
    // Ajax 처리 성공하면 isLoaded, items를 갱신
    // 기본 : SOP (Same Origin Policy, 동일 출처 정책)
    // 다른 출처의 리소스가 필요하다면 CORS 사용 
    // A Server <>B Server는 CORS 에러가 나지 않는다.
    // CORS처리는 package.json에 등록  "proxy":"http://localhost:8080" 
    // 참고 :https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F
    useEffect(() => {
        fetch("/web_react/bbb.jsp", {method:'GET'})
        .then(res => {
            if(!res.ok){
                throw new Error('network response was not ok');
            }
            return res.json();
        })
        .then(
            (result) =>{
                setIsLoaded(true);
                setItems(result.jikwon); // items는 이클립스 items 임
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    },[]); 

    // error가 나면 에러 메세지를, isLoaded가 false이면 로딩 메세지를 
    // 그 외에는 items를 출력(랜더링)한다
    if(error){
        return <div>에러 : {error.message}</div>
    }else if(!isLoaded){
        return <div>자료 수신 중 ...</div>
    }else{
        return(
            <div> 
            <table>
                {items.map(item =>(
                    <tr>
                       <td>{item.no}</td>  <td>{item.name}</td> <td>{item.buser}</td><td>{item.jik} </td>
                    </tr>
                    
                ))}
            </table>
            인원수 : {items.length}
           </div>
            
            
        );
    }
}
export default Ajax;