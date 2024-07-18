import React from "react";
import { useForm } from "react-hook-form";
import "./LoginSignup.css";
import email_icon from "../Assests/email.png";
import password_icon from "../Assests/password.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		try {
			const response = await axios.post(
				"https://alimusa0322.pythonanywhere.com/DIET/login-user/",
				data,
				{
					headers: {
						"Content-Type": "application/x-www-form-urlencoded", // Make sure this matches your backend's expected content type
					},
				}
			);

			if (response.data.success) {
				localStorage.setItem(
					"user_id",
					JSON.stringify(response.data.response.id)
				);
				navigate("/layout");
			} else {
				console.error("Login failed:", response.data.Message);
			}
		} catch (error) {
			console.error("Error during login:", error);
		}
	};

	return (
		<div className="container">
			<div className="header">
				<div className="text">Login</div>
				<div className="underline"></div>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="inputs">
					<div className="input">
						<img src={email_icon} alt="Email Icon" />
						<input
							type="email"
							{...register("email", { required: "Email is required" })}
							placeholder="Enter your email address"
						/>
						{errors.email && (
							<span className="error">{errors.email.message}</span>
						)}
					</div>

					<div className="input">
						<img src={password_icon} alt="Password Icon" />
						<input
							type="password"
							{...register("password", { required: "Password is required" })}
							placeholder="Enter your password"
						/>
						{errors.password && (
							<span className="error">{errors.password.message}</span>
						)}
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
	);
}
