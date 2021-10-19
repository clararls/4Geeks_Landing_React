import React from "react";

const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-2">A Warm Welcome!</h1>
			<p className="lead">
				Donec ac interdum nulla. Integer sit amet arcu sed augue tempus
				molestie. Sed cursus euismod sem sit amet porttitor. Morbi
				cursus nibh at augue tincidunt, feugiat faucibus lacus
				consectetur. Duis finibus ultricies erat, ut congue eros ornare
				a. Praesent posuere pulvinar erat sed auctor. Aenean sapien
				urna, fermentum sed quam eu, convallis rutrum lorem. Integer in
				elementum enim, sed finibus nibh. Fusce a augue fermentum,
				interdum odio ac, fermentum nisl.
			</p>
			<hr className="my-4" />
			<a className="btn btn-primary btn-lg" href="#" role="button">
				This is a button
			</a>
			<hr className="my-4" />
		</div>
	);
};

export default Jumbotron;
