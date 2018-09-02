import produce from 'immer';

const initialState = {
	events: [],
	loading: true
};

const eventListReducer = (state = initialState, action) => {

	return produce(state, draft => {

		switch(action.type){

			case 'REQUEST/EVENTS':
				/*
					while a request is being made to the API
					the the component should have loading state.
				*/

				draft.loading = true;
				draft.error = null;
				break;

			case 'SUCCESS/EVENTS':
			/*
				On Successful response from the API
				loading is false.
				Story and activities received as payload
				override the default state.
			*/

				draft.loading = false;
				draft.events = action.payload.events;
				break;

			case 'SORT/EVENTS':
				const {position} = action.payload;
				const lat1 = position.coords.latitude;
				const lon1 = position.coords.longitude;
				draft.events = draft.events.map((event) => {

					const lat2 = event.latitude;
					const lon2 = event.longitude;
					const radlat1 = Math.PI * lat1/180
			        const radlat2 = Math.PI * lat2/180
			        const radlon1 = Math.PI * lon1/180
			        const radlon2 = Math.PI * lon2/180
			        const theta = lon1-lon2
			        const radtheta = Math.PI * theta/180
			        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
			        dist = Math.acos(dist)
			        dist = dist * 180/Math.PI
			        dist = dist * 60 * 1.1515
					return {...event, dist: dist.toFixed(2)}
				});

				draft.events = draft.events.sort((a,b) => {
					return a.dist - b.dist;
				})

				console.log(draft.events);
			break;

			case 'FAILURE':
			/*
				On API failure loading is false
				so that error screen shows the error.
			*/

				draft.loading = false;
				draft.error = action.error;
				break;

			default:
				return draft;
		}
	});
}

export default eventListReducer;
