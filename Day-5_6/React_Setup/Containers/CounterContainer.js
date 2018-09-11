// these containers pass the state in redux architecture as the props of the components
import {connect} from 'react-redux';
import Counter from '../Components/Counter';
import { Increment } from '../Actions/counterActions';
import { Decrement } from '../Actions/counterActions';
import { Multiply } from '../Actions/counterActions';

// map states
var mapStateToProps=(state)=>{
    console.log("mapStateToProps invoked");
    console.log("state :", state);
    return {
        // this goes to Counter component as props
        countVal:state.first.count,
        multiplyVal:state.second.multipliedCount
    }
}
// map actions 
var mapDispatchToProps=(dispatch)=>{
    return {
        // will be available as props in Counter componenT
        onIncrement:()=>{
            console.log("inside container onIncrement");
            dispatch(Increment());
        },
        onDecrement:()=>{
            console.log("inside container onDecrement");
            dispatch(Decrement());
        },
        onDouble:()=>{
            console.log("inside container onDouble");
            dispatch(Multiply());
        }
    }
}
// we need the mapping of Component props ---> state/action of Redux
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// as we connected the Container to the Component we'll render the Container now