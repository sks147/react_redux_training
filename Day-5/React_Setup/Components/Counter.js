import React, {Component} from 'react';
import {Button} from 'reactstrap';
// this is a presentational component i.e stateless component
class Counter extends Component {
    render(){
        return (
            <React.Fragment>
                <h1>{this.props.countVal}</h1>
                <Button color="primary" onClick={()=>{this.props.onIncrement()}}>Increment</Button>
                <Button color="primary" onClick={()=>{this.props.onDecrement()}}>Decrement</Button>
            </React.Fragment>
        );
    }
}