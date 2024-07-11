import React, { useState } from "react";

const AIAssistant = () => {
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");
	const [height, setHeight] = useState("");
	const [weight, setWeight] = useState("");
	const [bmi, setBmi] = useState("");
	const [bmiStatus, setBmiStatus] = useState("");
	const [dietPlan, setDietPlan] = useState("");

	const calculateBmi = () => {
		if (height && weight) {
			const heightInMeters = height / 100;
			const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
			setBmi(bmiValue);
			determineBmiStatus(bmiValue);
			generateDietPlan(bmiValue);
		}
	};

	const determineBmiStatus = (bmiValue) => {
		if (bmiValue < 18.5) {
			setBmiStatus("Underweight");
		} else if (bmiValue < 24.9) {
			setBmiStatus("Normal weight");
		} else if (bmiValue < 29.9) {
			setBmiStatus("Overweight");
		} else {
			setBmiStatus("Obesity");
		}
	};

	const generateDietPlan = (bmiValue) => {
		if (bmiValue < 18.5) {
			setDietPlan(
				"Increase calorie intake with nutritious foods like nuts, avocados, and whole grains."
			);
		} else if (bmiValue < 24.9) {
			setDietPlan(
				"Maintain your current diet. Focus on balanced nutrition including fruits, vegetables, lean proteins, and whole grains."
			);
		} else if (bmiValue < 29.9) {
			setDietPlan(
				"Consider a diet with controlled portions, focusing on lean proteins, vegetables, and whole grains."
			);
		} else {
			setDietPlan(
				"Adopt a low-calorie, nutrient-dense diet. Include vegetables, lean proteins, and limit sugars and fats."
			);
		}
	};

	return (
		<div style={{ height: "100vh", overflow: "auto" }}>
			<div className="max-w-md mx-auto my-5 p-4 bg-gray-100 rounded-lg shadow-md">
				<h2 className="text-xl font-bold mb-4">AI Assistant BMI</h2>
				<div className="mb-4">
					<label className="block mb-2">
						Age:
						<input
							type="number"
							value={age}
							min="1"
							max="100"
							onChange={(e) => setAge(e.target.value)}
							className="block w-full border-gray-300 rounded-md mt-1"
						/>
					</label>
				</div>
				<div className="mb-4">
					<label className="block mb-2">
						Gender:
						<select
							value={gender}
							onChange={(e) => setGender(e.target.value)}
							className="block w-full border-gray-300 rounded-md mt-1"
						>
							<option value="">Select...</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</label>
				</div>
				<div className="mb-4">
					<label className="block mb-2">
						Height (cm):
						<input
							type="number"
							min="1"
							step="0.5"
							value={height}
							onChange={(e) => setHeight(e.target.value)}
							className="block w-full border-gray-300 rounded-md mt-1"
						/>
					</label>
				</div>
				<div className="mb-4">
					<label className="block mb-2">
						Weight (kg):
						<input
							type="number"
							min="1"
							step="0.5"
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
							className="block w-full border-gray-300 rounded-md mt-1"
						/>
					</label>
				</div>
				<button
					onClick={calculateBmi}
					className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mb-4"
				>
					Calculate BMI
				</button>
				{/* <div className="mb-4">
					<label className="block mb-2">
						BMI:
						<input
							type="text"
							value={bmi}
							readOnly
							className="block w-full border-gray-300 rounded-md mt-1"
						/>
					</label>
				</div> */}
				<div className="mb-4">
					<label className="block mb-2">
						BMI Status:
						<input
							type="text"
							value={bmiStatus}
							readOnly
							className="block w-full border-gray-300 rounded-md mt-1"
						/>
					</label>
				</div>
				<div className="mb-4">
					<label className="block mb-2">
						Diet Plan:
						<input
							type="text"
							value={dietPlan}
							readOnly
							className="block w-full border-gray-300 rounded-md mt-1"
						/>
					</label>
				</div>
			</div>
		</div>
	);
};

export default AIAssistant;
