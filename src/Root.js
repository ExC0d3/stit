import React from 'react';
import EventList from './EventList';
import EventMap from './EventMap';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Root = ({store}) => (
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route strict exact path='/' component={EventList}></Route>
				<Route strict exact path='/map' component={EventMap}></Route>
			</Switch>
		</BrowserRouter>
	</Provider>
)

export default Root;