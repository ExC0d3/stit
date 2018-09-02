import { put, takeLatest, call } from 'redux-saga/effects';
import eventsSaga from './eventsSaga';
import locationSaga from './locationSaga';

/*
	Right now this is the root saga which is running.
*/

export function* watchApiRequest(){
	/*
		Watches for any API Requests and calls fetchFromApi
		generator function.
	*/
	// console.log('API Saga triggered');
	yield takeLatest( action => /^REQUEST/.test(action.type) , fetchFromApi);
}

function* fetchFromApi(action) {

	/*
		
		1. Receives action as a default arguemnt from takeLatest
		
		2.Based on the type of action dispatched it handles the 
		control over to either blog saga or about saga.

	*/

	try{

		// const {payload} = action;
		// console.log('Payload: ', payload);


		switch(action.type){

			// handover control to about saga to make the request
			case 'REQUEST/EVENTS':
				yield call(eventsSaga, action)
				break;

			case 'REQUEST/LOCATION':
				console.log('Inside api saga');
				yield call(locationSaga, action)
				break;

			// default case
			default:
				yield put({type: 'FAILURE', error: new Error('Payload could not be interepreted')})
		}
	}
	catch(error) {
		console.log('Error: ', error);
		yield put({type: 'FAILURE', error});
	}
}