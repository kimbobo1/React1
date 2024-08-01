
import React,{ Component } from 'react';
import './App.css';
import Navdata from './mydir/Navdata';
//  클래스 컴포넌트 조립식 프로그래밍이 가능
class Subject extends Component{
  render(){
    return(
      <header>
        <h1>머리글 : 웹 문서</h1>
      </header>
    );
  }
}

// 함수 컴포넌트
function Welcome(props){
  return(
    <article>
      {props.who} 글 기사 내용
    </article>
  
  );
}

function App() {
  return (
    <div className="App">
      연습용
      <Subject></Subject> {/* 컴포넌트 호출 */}
      <br></br>
      <Welcome></Welcome>
      <br></br>
      <Welcome who='김보현'></Welcome>
      <br></br>
      <Navdata msg='출발'></Navdata>
    </div>
  );
}

export default App;
