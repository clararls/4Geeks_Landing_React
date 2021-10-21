import React from "react";

const Navbar = () => {
	return (
		<div className="navbar navbar-expand-md bd-navbar navbar-dark bg-dark sticky-top">
			<div className="container-xxl display-flex flex-md-nowrap">
				<div className="navbar-brand text-white">Start Bootstrap</div>

				<div className="collapse navbar-collapse d-flex flex-row-reverse">
					<ul className="navbar-nav ml-auto ">
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								About
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Services
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
