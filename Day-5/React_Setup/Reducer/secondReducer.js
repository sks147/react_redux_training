var reducer = (state = {
    multipliedCount: 1
}, action) => {
    let currentVal = state.multipliedCount;
    switch(action.type){
        case "MULTIPLY":
            return Object.assign({}, state, {multipliedCount: currentVal*2});
        default:
            return state;
    }
}

export default reducer;