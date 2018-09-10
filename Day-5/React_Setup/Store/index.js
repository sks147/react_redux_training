import {createStore} from 'redux';
import reducer from '../Reducer';

var store = createStore(reducer);

export default store;