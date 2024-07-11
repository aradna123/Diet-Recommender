import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assests/person.png";
import email_icon from "../Assests/email.png";
import password_icon from "../Assests/password.png";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
	const [action, setAction] = useState("Sign Up");
	const navigate = useNavigate();

	return (
		<div className="container">
			<div className="header">
				<div className="text">{action}</div>
				<div className="underline"></div>
			</div>

			<div className="inputs">
				{action === "Sign Up" && (
					<div className="input">
						<img src={user_icon} alt="User Icon" />
						<input type="text" placeholder="Name" />
					</div>
				)}

				<div className="input">
					<img src={email_icon} alt="Email Icon" />
					<input type="email" placeholder="Email Id" />
				</div>

				<div className="input">
					<img src={password_icon} alt="Password Icon" />
					<input type="password" placeholder="Password" />
				</div>
			</div>

			{action === "Login" && (
				<div className="forgot-password">
					Lost Password? <span>Click Here!</span>
				</div>
			)}

			<div className="submit-container">
				<div
					className={action === "Login" ? "submit gray" : "submit"}
					onClick={() => {
						setAction("Sign Up");
					}}
				>
					Sign Up
				</div>
				<div
					className={action === "Sign Up" ? "submit gray" : "submit"}
					onClick={() => {
						navigate("/layout");
					}}
				>
					Login
				</div>
			</div>
		</div>
	);
};

export default LoginSignup;
