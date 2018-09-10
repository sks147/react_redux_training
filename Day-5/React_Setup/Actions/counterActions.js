function Increment(){
    console.log("inside increment Action: counterActions");
    return {
        type: "INCREMENT"
    }
}

function Decrement(){
    console.log("inside decrement Action: counterActions");
    return {
        type: "DECREMENT"
    }
}

export {Increment, Decrement};