import React from "react";
import homePageImg from "./Images/original.jpg";
import "./HomePage.css"; // Ensure this path is correct
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="homepage-container">
			<nav className="navbar">
				<div className="logo">Diet Artificially</div>
				<div className="nav-links">
					<Link to="#">Meal Planner</Link>
					<Link to="#">Diet Plan</Link>
					<Link to="#">Family Plan</Link>
					<Link to="#">Personal Trainer</Link>
					<Link to="#">Consultation</Link>
				</div>
			</nav>
			<div className="content">
				<div className="text-section">
					<h1>Suitable Healthy Plan for every human.</h1>
					<p>
						This diet recommendation system is based on users' health conditions
						using BMI level and on disease conditions. It is an ML-based project
						using Flask for the frontend and Django for backend APIs
						integration. The Fronted designing is implemented using the React
						framework.
					</p>
					<button className="start-button">Start your journey</button>
				</div>
				<div className="image-section">
					<img src={homePageImg} alt="Healthy Plan" />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
