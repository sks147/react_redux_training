import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from '../Reducer';

// to call the asynchronous function with Delays
var store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk))
);

export default store;