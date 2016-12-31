import React, {Component} from 'react';
import{
	AppRegistry
} from 'react-native';

import {Provider} from 'react-redux';
import configureStore from './Store/ConfigureStore';

import App from './App';

const store = configureStore();

class rootApp extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<Provider store={store}>
	    	<App />
	    </Provider>
		)
	}
}
// export default rootApp;
AppRegistry.registerComponent('BookBall', () => rootApp);
