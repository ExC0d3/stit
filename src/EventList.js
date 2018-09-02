import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "./Actions/api";
import Event from "./Event";

class EventList extends Component {
	componentDidMount() {
		const { fetchEvents } = this.props;
		fetchEvents();
	}

	render() {
		
		if (this.props.loading) {
			return <h1>Loading!!</h1>;
		} else {
			return (
				<div>
					<div className="btn-group addressBox" >
						<button className="btn btn-default" onClick={this.props.onClick}>Sort</button>
					</div>
					<ul className="event-list">
						{this.props.events.map((event, idx) => {
							return <Event key={idx.toString()} event={event} />;
						})}
					</ul>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	/*
		maps the state object to the props that will be passed 
		to the component.	
	*/
	return {...state.eventList};
};


const mapDispatchToProps = dispatch => {
	/*
		maps the dispatch action call to a function
		which will be passed a prop.
		calling the function dispatches action
	*/
	return {
		fetchEvents: () => {
			dispatch(Actions.request.events());
		},
		onClick: () => {
			dispatch(Actions.request.location());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
