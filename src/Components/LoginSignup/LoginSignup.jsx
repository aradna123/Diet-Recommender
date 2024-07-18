import { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assests/person.png";
import email_icon from "../Assests/email.png";
import password_icon from "../Assests/password.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginSignup = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(formData);
		axios
			.post(
				"https://alimusa0322.pythonanywhere.com/DIET/register-user/",
				{
					username: formData.username,
					email: formData.email,
					password: formData.password,
				},
				{
					headers: {
						"Content-Type": "application/x-www-form-urlencoded", // Make sure this matches your backend's expected content type
					},
				}
			)
			.then((response) => {
				console.log("ressssssssssssssssssss", response);
				if (response.data.success) {
					console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");

					setFormData({
						username: "",
						email: "",
						password: "",
					});
					navigate("/");
				} else {
					console.error("Login failed:", response.data.Message);
				}
			})
			.catch((error) => {
				console.error("Error during login:", error);
			});
	};

	return (
		<div className="container">
			<div className="header">
				<div className="text">Sign up</div>
				<div className="underline"></div>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="inputs">
					<div className="input">
						<img src={user_icon} alt="User Icon" />
						<input
							type="text"
							id="username"
							name="username"
							value={formData.username}
							onChange={handleChange}
							placeholder="Enter Your Name"
							required
						/>
					</div>

					<div className="input">
						<img src={email_icon} alt="Email Icon" />
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Enter your email address"
							required
						/>
					</div>

					<div className="input">
						<img src={password_icon} alt="Password Icon" />
						<input
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="Enter your password"
							required
						/>
					</div>
				</div>

				<div className="forgot-password">
					Already have an account{" "}
					<span
						onClick={() => {
							navigate("/");
						}}
					>
						Login?
					</span>
				</div>

				<div className="submit-container">
					<input type="submit" value="Sign Up" className="submit gray" />
				</div>
			</form>
		</div>
	);
};

export default LoginSignup;
