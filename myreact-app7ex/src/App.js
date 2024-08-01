import React, { useState } from 'react';
import UnitConv from './mydir/UnitConv';

function App() {
  const [dan, setDan] = useState(1);  // 기본 값 1로 설정
  const [dan2, setDan2] = useState(dan * 100);


  // 1 증가
  const changDang = () => {
    setDan(dan + 1);
      
  };
  
  const cc =() =>{
    setDan2(dan  * 100); 
  }

  console.log('단위변경');

  return (
    <div className="App">
      <h2>단위</h2>
      <UnitConv dan21={dan} dan23={dan2} />
      <button onClick={changDang}>cm 증가</button>
     <button onClick={cc}>m 변경</button>
    </div>
  );
}

export default App;
