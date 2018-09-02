import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { map } from "lodash";
import Actions from '../Actions/api';
import yelpApi from '../yelpApi';
/*
	Handle API request for About component.
	Fetches data for it and dispatches SUCCESS/ABOUT action
	which causes the state to be updated.
*/

const fetchEvents = () => {
	/*
		makes the actual api request to /about endpoint
		and return the data obtained.
	*/
	return axios({
		method: "get",
		url: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events`,
		params: {
			limit: 30,
			location: "East Village New York, NY",
			start_date: Math.round((new Date()).getTime() / 1000)
		},
		headers: {
			'Origin':'http://localhost:3000',
			'Authorization': `Bearer ${yelpApi.key}`,
			'Access-Control-Allow-Origin': 'http://localhost:3000',
			'Access-Control-Allow-Headers': '*'
		}
	});
};

export default function* eventsSaga(action) {

	//action object received as the argument from `call` in the apiSaga
	
	try {
		/*
			fetch the data for About component and parse
			aboutStory and activities from it.
		*/
		const response = yield call(fetchEvents);
		// console.log(response);
		const events = response.data.events;
		/*
			dispatch a SUCCESS/EVENTS action with it's payload to update
			the state.
		*/

		yield put(Actions.success.events({events}))
	
	} catch (error) {

		// on error dispatch FAILURE
		yield put({ type: "FAILURE", error });
	}
}
