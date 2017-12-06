import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';
import './styles/index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render((
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	),document.querySelector('.app'));
