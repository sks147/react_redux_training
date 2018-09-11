import firstReducer from './firstReducer';
import secondReducer from './secondReducer';
import { combineReducers } from 'redux';

var indexReducer = combineReducers({
	first: firstReducer,
	second: secondReducer
});

export default indexReducer;