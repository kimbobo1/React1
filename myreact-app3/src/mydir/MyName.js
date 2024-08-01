import React,{Component} from "react";

/*
class MyName extends Component{
    // static defaultProps = { // props에 기본값 부여
    //     name:'기본 이름'
    // }
    render(){
        return(
          <div>
            안녕~ 내 이름은 <b>{this.props.name}</b>
          </div>  
        );
    }
}
MyName.defaultProps = { // props에 기본값 부여
    name:'기본 이름'
}*/

// 클래스를 함수로  소스 코드 변환
/*
function MyName(props){
    return(
        <div>
            안녕~ 하세요 반가워요<b>{props.name}</b>
        </div>
    )
}*/
// 클래스를 함수로  소스 코드 변환2
const MyName = ({name}) => {
    return(
        <div>
            안녕~ 하세요 반가워요<b>{name}</b>라고 해
        </div>
    )
}
export default MyName;