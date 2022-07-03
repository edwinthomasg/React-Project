import React,{Component} from "react";

class Life extends Component{
    constructor(props){
        super()
    }
    componentDidMount(){
        console.log("Component mounted")
    }
    render(){
        console.log("rendered")
        return <p>Hello</p>
    }
}

export default Life