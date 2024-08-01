//import React, { Component, useState } from "react"; // hook이구나. 컴포넌트 상속 내부적으로 처리. render 메소드 없이 그냥 리턴
// import React, {  useState } from "react";
// import HookTest from "./mydir/HookTest";
// import HookTest2 from "./mydir/HookTest2";

// class App extends Component{ ... render(){... return ( JSX )}}
// function App(){ ... return( JSX )}

/*
class App extends Component{
state ={
  count : 0
};
  countUpdate(n){
    this.setState({count : n});
  }
  render(){
    const {count} = this.state; const나 let으로 변수 설정

    return(
      <div>
        number : {count}&nbsp;
        <button onClick={() => {
          this.countUpdate(count +1);
        }}>증가 1</button>
        <hr></hr>
        <HookTest></HookTest>
        <hr></hr>
       <HookTest2></HookTest2>
      </div>
    );
  }
}

export default App; // component는 반드시 export해야 index.js에서 import할 수 있어. (Javascript 문법)
*/
import React, {  useState } from "react";
import HookTest from "./mydir/HookTest";
import HookTest2 from "./mydir/HookTest2";

// class App extends Component{ ... render(){... return ( JSX )}}
// function App(){ ... return( JSX )}

const App = () => {
  const [count, setCount] = useState(0);

  const countUpdate = (n) => { // 이벤트 핸들러(처리) 함수
    setCount(n);
    
  };

  return (
    <div>
      number : {count}&nbsp;
      <button onClick={() => countUpdate(count + 1)}>증가 1</button>
      <hr />
      <HookTest />
      <hr />
      <HookTest2 />
    </div>
  );
};

export default App;