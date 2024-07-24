import React from "react";
import { useForm, Controller } from "react-hook-form";

const AIAssistant = () => {
	const { control, handleSubmit } = useForm();

	const onSubmit = (data) => {
		// Handle form submission here
		console.log(data); // Example: { diseaseName: 'Some Disease' }
	};

	return (
		<div style={{ height: "100vh", overflow: "auto" }}>
			<div className="max-w-md mx-auto my-10 p-4 bg-gray-100 rounded-lg shadow-md">
				<h2 className="text-xl font-bold mb-4">AI Assistant Disease</h2>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-4">
						<label className="block mb-2">
							Disease Name:
							<Controller
								name="diseaseName"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<input
										{...field}
										type="text"
										style={{ height: "40px" }}
										className="block w-full border-gray-300 rounded-md mt-1"
									/>
								)}
							/>
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
						Diet Plan:
						<input
							type="text"
							style={{ height: "40px" }}
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
