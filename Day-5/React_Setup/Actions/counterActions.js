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
export {Increment, Decrement, Multiply};