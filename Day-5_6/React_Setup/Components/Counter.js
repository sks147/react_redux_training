import React, {Component} from 'react';
import {Button} from 'reactstrap';
// this is a presentational component i.e stateless component
class Counter extends Component {
    render(){
        return (
            <React.Fragment>
                <h1>{this.props.countVal}</h1>
                <h1>{this.props.multiplyVal}</h1>
                <Button color="primary" onClick={()=>{this.props.onIncrement()}}>Increment</Button>
                <Button color="danger" onClick={()=>{this.props.onDecrement()}}>Decrement</Button>
                <Button color="danger" onClick={()=>{this.props.onDouble()}}>Multiply</Button>
            </React.Fragment>
        );
    }
}

export default Counter;