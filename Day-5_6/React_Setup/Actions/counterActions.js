import axios from 'axios';

function Increment(){
    console.log("inside increment Action: counterActions");
    return {
        type: "INCREMENT",
        step: 3
    }
}

function Decrement(){
    console.log("inside decrement Action: counterActions");
    return {
        type: "DECREMENT",
        step: 2
    }
}

function Multiply(){
    console.log("insde multiply Action: counterActions");
    return {
        type: "MULTIPLY"
    }
}

// making asynchronous function calls
// we're using redux-thunk middleware to execute this function
function IncrementWithDelay(){
    console.log("inside IncrementWithDelay Action: counterActions");
    return (dispatch) => {
        axios('https://reqres.in/api/users?delay=3', {
            method: "GET",
            headers:{
                "Content-type": "application/json"
            }
        }).then(
            (response)=>{
                console.log(response);
                dispatch(Increment());
            }
        )
    }
}

export {Decrement, Multiply, IncrementWithDelay};