import { createActions } from 'redux-actions';


const ApiActions = createActions({
		REQUEST: {
			EVENTS: data => ({...data}),
			LOCATION: data => ({...data})
			
		},
		SUCCESS: {
			EVENTS: data => ({...data})
		},
		SORT: {
			EVENTS: data => ({...data})
		},
		FAILURE: undefined
});

export default ApiActions;