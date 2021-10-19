import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="col-3">
			<div className="card" style={{ width: "18rem", color: "blue" }}>
				<img
					src="https://lh3.googleusercontent.com/proxy/cbnhaDdmdcRK-Q1MtQjGJuNMweO-6500grEdVFMrekq2lIAb5pVFLkCq_-yyPXFycGla8Tl5e3M5edQkv_K7qm6UGg01PkmmASVNNUyM8of0dzKuENPTXC1nc6x-tF8AF0TR1_EFRVp2-X10rDux-qs4nWm3ypE"
					className="card-img-top"
					alt="..."
				/>
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
