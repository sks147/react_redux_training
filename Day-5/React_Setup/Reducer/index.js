var reducer = (state = {
	count: 0
}, action) => {
	let currentVal = state.count;
	switch (action.type) {
		case "INCREMENT":
			console.log("inside Increment reducer", action);
			return Object.assign({}, state, { count: currentVal + 1 })
			// return state.count = state.count+1;
		case "DECREMENT":
			console.log("inside Decrement reducer", action);
			return Object.assign({}, state, { count: currentVal - 1});
			// return state.count = state.count-1;
		default:
			return state;
	}
}

export default reducer;