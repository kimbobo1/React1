import React,{Component} from "react";
import Store from "../Store";

export default class ShowNumber extends Component{
    state = {number:Store.getState().number}
        constructor(props){
            super(props);
            Store.subscribe(function(){
                this.setState({number:Store.getState().number});
            }.bind(this));
     }


    render(){
        return(
            <div>
                <h1>Show Number</h1>
                {/* 
                <input type="text" value={this.props.number} readOnly></input>
                */}
                <input type="text" value={this.state.number} readOnly></input>
            </div>
        )
    }
}