import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="col-3">
			<div className="card" style={{ width: "18rem", color: "blue" }}>
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<a href="#" className="btn btn-primary">
						{props.label}
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	label: PropTypes.string
};

export default Card;
