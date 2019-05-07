/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
import {React} from "./react";
import render from "./render";
import ReactClass from "./ReactClass";
class MyTest extends ReactClass{
    render(){
        const {test} = this.props;
        return(
            <div>
                <h1>{test}</h1>
                this is MyTest
            </div>
        );
    }
}
class MyTest2 extends ReactClass{
    constructor(props){
        super(props);
        this.state = {
            number:this.props.outNumber
        };
    }
    handle(){
        let preNumber = this.state.number+1;
        this.setState({
            number:preNumber
        });
    }
    componentWillMount(){
        console.log("componentWillMount")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    render(){
        console.log("render")
        return(
            <div>
                <button onClick={this.handle.bind(this)}>click me</button>
                {this.state.number}
                this is MyTest2
            </div>
        );
    }
}
function MyTest3() {
    return(
        <div>function react</div>
    );
}
render(<div>
    <div className="ttttt">this is a test</div>
    <div style={{color:"#ddd"}}>this is a test2</div>
    <div>this is a test3</div>
    <div>{new Date().toLocaleTimeString()}</div>
    <MyTest test={"哈哈我是一个标题"}></MyTest>
    <MyTest3></MyTest3>
    <MyTest2 outNumber={2} test={"哈哈我是一个标题2"}></MyTest2>
</div>,document.getElementById("root"));