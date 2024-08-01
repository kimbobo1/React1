import Clock1 from "./exam/Clock1";
import Clock2 from "./exam/Clock2";
import Clock3 from "./exam/Clock3";
import MyComponent from "./exam/MyComponent";
import MyComponent2 from "./exam/MyComponent2";
import MyForm from "./exam/MyForm";
function App() {
  return (
    <div className="App">
      <h2>리액트 생명주기 연습용 : 디지털 시계</h2>
      <Clock1 />
      <hr />
      <Clock2 />
      <hr />
      <Clock3 />
      <hr></hr>
      <MyComponent />
      <hr></hr>
      <MyComponent2 />
      <hr />
      생명주기와 상관없다~~Form 작업(사용자와 웹 페이지간 상호 작용)<br></br>
      <MyForm />
    </div>
  );
}

export default App;
