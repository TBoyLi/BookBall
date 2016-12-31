'use strict';

import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';

import login from '../Reducer/LoginReducer';
// import address from './ChangeAddress';

const rootReducer = combineReducers({
      login
    //   address
})

export default function ConfigureStore(initialState) {
	let buildstore = compose(applyMiddleware(thunk))(createStore);
	return buildstore(rootReducer, initialState);
}
