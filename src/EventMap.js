import React, { Component } from "react";
import mapApi from "./mapApi";
class EventMap extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				
				<div className="iframe-container">
					<iframe
						src={`https://www.google.com/maps/embed/v1/place?key=${
												mapApi.key
											}&q=${this.props.location.state.address}`}
						width="600"
						height="450"
						frameBorder="0"
						style={{"border":"0"}}
						allowFullScreen
					/>
				</div>
				<div className="iframe-container-2">
					<span>
						<h2 className="title">Name: {this.props.location.state.name}</h2>	
					</span>
					<span>
						<h2 className="title">Time: {this.props.location.state.time}</h2>
					</span>
					<span>
						<h2 className="title">Dist: {`${this.props.location.state.dist} mi`}</h2>
					</span>
					<span>
						<h2 className="title">Cost: {`${this.props.location.state.cost} $`}</h2>
					</span>
				</div>
			</div>
		);
	}
}

export default EventMap;
