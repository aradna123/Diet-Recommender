import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AIAssistant = () => {
	const [prediction, setPrediction] = useState("");
	const [userId, setUserId] = useState("");
	const [foodName, setFoodName] = useState("");
	const [image1, setImage1] = useState("");
	const [image2, setImage2] = useState("");
	const [image3, setImage3] = useState("");

	useEffect(() => {
		const user = localStorage.getItem("user_id");
		if (user) {
			setUserId(user);
		}
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		const url = "https://rehman1603-physique-estimator.hf.space/run/predict";

		// JSON payload
		const payload = {
			data: [data.gender, parseFloat(data.height), parseFloat(data.weight)],
		};

		try {
			const response = await axios.post(url, payload, {
				headers: { "Content-Type": "application/json" },
			});

			if (response.status === 200) {
				const result = response.data.data[0].toString();
				setPrediction(result);

				const index = response.data.data[1];
				localStorage.setItem("index", JSON.stringify(index));

				const dietPlanUrl =
					"https://alimusa0322.pythonanywhere.com/DIET/bmi-prediction/";
				const dietPayload = {
					user_id: userId,
					index: index,
				};

				axios
					.post(dietPlanUrl, dietPayload, {
						headers: {
							"Content-Type": "application/x-www-form-urlencoded",
						},
					})
					.then((response) => {
						console.log(response);
						setFoodName(response.data.result.food_name);
						setImage1(response.data.result.food_image1); // Assuming images are provided as URLs
						setImage2(response.data.result.food_image2); // Assuming images are provided as URLs
						setImage3(response.data.result.food_image3); // Assuming images are provided as URLs
					})
					.catch((error) => {
						console.error("Error posting diet plan:", error);
					});
			} else {
				console.error(
					"Failed to get prediction result. Status:",
					response.status
				);
			}
		} catch (error) {
			console.error("Error fetching prediction:", error);
		}
	};

	return (
		<div style={{ height: "100vh", overflow: "auto" }}>
			<div className="max-w-md mx-auto my-5 p-4 bg-gray-100 rounded-lg shadow-md">
				<h2 className="text-xl font-bold mb-4">AI Assistant BMI</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-4">
						<label className="block mb-2">
							Gender:
							<select
								{...register("gender", { required: true })}
								className="block w-full border-gray-300 rounded-md mt-1"
							>
								<option value="">Select...</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
							{errors.gender && (
								<span className="text-red-500">Gender is required.</span>
							)}
						</label>
					</div>
					<div className="mb-4">
						<label className="block mb-2">
							Height (cm):
							<input
								type="number"
								min="1"
								step="0.5"
								{...register("height", { required: true, min: 1 })}
								className="block w-full border-gray-300 rounded-md mt-1"
							/>
							{errors.height && (
								<span className="text-red-500">
									Height is required and must be greater than 0.
								</span>
							)}
						</label>
					</div>
					<div className="mb-4">
						<label className="block mb-2">
							Weight (kg):
							<input
								type="number"
								min="1"
								step="0.5"
								{...register("weight", { required: true, min: 1 })}
								className="block w-full border-gray-300 rounded-md mt-1"
							/>
							{errors.weight && (
								<span className="text-red-500">
									Weight is required and must be greater than 0.
								</span>
							)}
						</label>
					</div>
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mb-4"
					>
						Calculate BMI
					</button>
				</form>
				<div className="mb-4">
					<label className="block mb-2">
						BMI Status:
						<input
							type="text"
							readOnly
							value={prediction}
							className="block w-full border-gray-300 rounded-md mt-1"
						/>
					</label>
				</div>
				<div className="mb-4">
					<label className="block mb-2">
						Diet Plan:
						<textarea
							value={foodName}
							rows={3} // Set the number of rows here
							className="block w-full border-gray-300 rounded-md mt-1"
							readOnly
						/>
					</label>
				</div>
				<div className="mb-4">
					<h3>Images:</h3>
					<div className="flex flex-wrap justify-start">
						{image1 && (
							<img
								src={image1}
								alt="Food Image 1"
								className="w-32 h-32 object-cover border-gray-300 rounded-md m-1"
							/>
						)}
						{image2 && (
							<img
								src={image2}
								alt="Food Image 2"
								className="w-32 h-32 object-cover border-gray-300 rounded-md m-1"
							/>
						)}
						{image3 && (
							<img
								src={image3}
								alt="Food Image 3"
								className="w-32 h-32 object-cover border-gray-300 rounded-md m-1"
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AIAssistant;
