import {createStore} from 'redux';

// reducer
var reducer = (state = {
	count: 0
}, action) => {
	let currentVal = state.count;
	switch (action.type) {
		case "INCREMENT":
			return Object.assign({}, state, { count: currentVal + 1 })
			// return state.count = state.count+1;
		case "DECREMENT":
			return Object.assign({}, state, { count: currentVal - 1 + action.step});
			// return state.count = state.count-1;
		default:
			return state;
	}
}

// store
// stores the state object
var store = createStore(reducer);
// whenever store changes functions inside subscribe function will be executed
store.subscribe(()=>{
	console.log('store changed', store.getState());
})

// actions 
// used in order to execute the action
store.dispatch({type:"INCREMENT", step: 3});
store.dispatch({type:"INCREMENT", step: 2});
store.dispatch({type:"DECREMENT", step: 3});
store.dispatch({type:"INCREMENT", step: 1});
store.dispatch({type:"INCREMENT", step: 3});
store.dispatch({type:"DECREMENT", step: 2});