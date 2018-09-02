import { takeLatest, call, put } from "redux-saga/effects";
import Actions from '../Actions/api';

const findPosition = () => {
	return new Promise((resolve, reject) => {
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition((position) => {
				resolve(position);
			})	
		}
		else{
			reject('Cannot access Geo location api');
		}
		
	})
}

export default function* locationSaga(action){

	try{
		const position = yield call(findPosition);
		console.log('Fetched location: ', position);
		yield put(Actions.sort.events({position}));
	}
	catch(err){
		yield put({ type: "FAILURE", err });
	}
}