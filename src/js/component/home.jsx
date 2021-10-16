import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		(<Navbar />),
		(
			<div className="container">
				<div className="row">
					<Card
						title="Noticia 1"
						description="Esta es la noticia 1"
						label="Leer más ...."
					/>
				</div>
			</div>
		)
	);
};

export default Home;
