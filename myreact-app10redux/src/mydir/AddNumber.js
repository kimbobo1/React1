import React,{Component} from "react";
import Store from "../Store";

export default class AddNumber extends Component{
    state = {size:1}

    render(){
        return(
            <div>
                <h1>Add Number</h1>
                {/* + 버튼 클릭시  size 값이 상위 컴포넌트로 전달될 수 있게 onclick을 구현
                    props로 전달받은 onClick 함수를 호출하는데 현재 컴포넌트의 state인 size값을 전달한다.
                    onClick 함수는 AddNumberSuper에서 작성해 준다
                */}
                {/* 
                <input type="button" value="+" 
                    onClick={function(){  // props = 부모가 자식에게 
                         this.props.onClick(this.state.size)  // 부모 onclick 함수 요청 
                    }.bind(this)}></input>
                    */}
                <input type="button" value="+" 
                    onClick={function(){  // props = 부모가 자식에게 
                        Store.dispatch({type:'INCREMENT', size:this.state.size});  
                    }.bind(this)}></input>

                 {/* Redux 사용  */}   
                <input type="text" value={this.state.size} 
                    onChange={function(e){
                        this.setState({size:Number(e.target.value)});
                     }.bind(this)}></input>
            </div>
        )
    }
}