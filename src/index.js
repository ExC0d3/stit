import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import root from './Reducers/root';
import { watchApiRequest } from './Sagas/apiSaga';

// create a middle ware for running redux-sagas
const sagaMiddleware = createSagaMiddleware();

// create a middle ware for using redux dev tools
const reduxDevTools =
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store by passing the reducers
let store = createStore(
	root,
	compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

// run the root saga
sagaMiddleware.run(watchApiRequest);

// render the root component and pass the store as prop 
// so the all the children have access to it
ReactDOM.render(
	<Root store={ store } ></Root>,
	document.getElementById("root")
);
registerServiceWorker();
