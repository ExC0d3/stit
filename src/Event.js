import React from "react";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
	return (
		<li>
			<time dateTime="2014-07-20">
				<span className="day">{event.time_start}</span>
			</time>
			<div className="info">
				<Link
					to={{
						pathname: "/map",
						state: {
							address: `${event.location.address1}+${
								event.location.address2
							}+${event.location.address3}+${
								event.location.city
							}+${event.location.country}`,
							name: event.name,
							time: event.time_start,
							dist: event.dist,
							cost: event.cost
						}
					}}
				>
					<h2 className="title">{event.name}</h2>
				</Link>

				<p className="desc">{event.description}</p>
			</div>
			<div className="social">
				<ul>
					<li className="facebook" style={{ width: "33%" }}>
						<span className="" />
						{event.cost_max === null
							? "Free"
							: event.cost_max + "$"}
					</li>
					<li className="twitter" style={{ width: "34%" }}>
						<span className="" />{" "}
						{event.dist === undefined || null
							? "-- mi"
							: event.dist + " mi"}
					</li>
				</ul>
			</div>
		</li>
	);
};

export default Event;
