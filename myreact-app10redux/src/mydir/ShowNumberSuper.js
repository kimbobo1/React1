import React,{Component} from "react";
import ShowNumber from "./ShowNumber";

export default class ShowNumberSuper extends Component{
    render(){
        return(
            <div id="super">
                <h1>Show Number</h1>
                {/*
                Show Number super의 :  {this.props.number}

                <ShowNumber number={this.props.number} />
                */}
                <ShowNumber />
            </div>
        )
    }
}