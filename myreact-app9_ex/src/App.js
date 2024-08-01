import React,{useState} from "react";
import {BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Guguan from "./exam/Gugudan";
import Ajax from "./exam/Ajax";
import Gugudan2 from "./exam/Gugudan2";
import Gugu from "./exam/Gugu";
function App() {
  
  return (
    <Router>
    <div className="App">
      <h2>라우트 연습용 메인 화면</h2>
    
      <hr />
      {/*메뉴 작성 : 라우팅 연습 */}
      <nav>
          {/* Link는 a tag로 전환 : 요청명*/}
          <Link to="/">직원자료 화면</Link> | 
          <Link to="/about">구구단 보기</Link> | 
          <Link to="/a">구구단 보기2</Link> | 
          <Link to="/b">구구단 보기3</Link> | 
       
      </nav>
        <Routes>
          {/* 컴포넌트에서 동적 라우팅을 구현 가능  */}
            <Route path="/" element={<Ajax />}></Route>  
            <Route path="/about" element={<Guguan />}></Route> 
            <Route path="/a" element={<Gugudan2 />}></Route> 
            <Route path="/b" element={<Gugu/>}></Route>
        </Routes> 
       
    </div>
    </Router>
  );
}


export default App;
