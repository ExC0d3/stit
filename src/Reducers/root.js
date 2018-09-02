import { combineReducers } from 'redux';
import eventListReducer from './eventListReducer';
import eventSortReducer from './eventSortReducer';

export default combineReducers({
	eventList: eventListReducer
});

