import React from "react";
//import Navbar from "./navbar.jsx";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container-xxl mb-3">
				<Jumbotron />
				<div className="row">
					<Card
						title="Noticia 1"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum vitae sapien id finibus. Nunc tempor nisl vel lectus cursus."
						label="Leer más ...."
					/>
					<Card
						title="Noticia 2"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum vitae sapien id finibus. Nunc tempor nisl vel lectus cursus."
						label="Leer más ...."
					/>
					<Card
						title="Noticia 3"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum vitae sapien id finibus. Nunc tempor nisl vel lectus cursus."
						label="Leer más ...."
					/>
					<Card
						title="Noticia 4"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum vitae sapien id finibus. Nunc tempor nisl vel lectus cursus."
						label="Leer más ...."
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
