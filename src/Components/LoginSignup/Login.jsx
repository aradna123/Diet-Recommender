import React, { useState } from "react";
import "./LoginSignup.css";
import email_icon from "../Assests/email.png";
import password_icon from "../Assests/password.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
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
				"https://alimusa0322.pythonanywhere.com/DIET/login-user/",
				{
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
					console.log("aaaa", response.data.response.id);

					localStorage.setItem(
						"user_id",
						JSON.stringify(response.data.response.id)
					);
					setFormData({
						email: "",
						password: "",
					});
					navigate("/layout");
				} else {
					console.error("Login failed:", response.data.Message);
				}
			})
			.catch((error) => {
				console.error("Error during login:", error);
			});
	};

	return (
		<>
			<div className="container">
				<div className="header">
					<div className="text">Login</div>
					<div className="underline"></div>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="inputs">
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
							{/* {errors.email && (
								<span className="error">{errors.email.message}</span>
							)} */}
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
							{/* {errors.password && (
								<span className="error">{errors.password.message}</span>
							)} */}
						</div>
					</div>

					<div className="forgot-password">
						<br />
						New Here?{" "}
						<span
							onClick={() => {
								navigate("/register");
							}}
						>
							Register
						</span>
					</div>

					<div className="submit-container">
						<input type="submit" value="Login" className="submit gray" />
					</div>
				</form>
			</div>
		</>
	);
}
