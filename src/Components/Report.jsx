import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Report() {
	const [reportData, setReportData] = useState(null);
	const id = localStorage.getItem("user_id");
	useEffect(() => {
		const fetchReport = async () => {
			if (!id) {
				console.log("No user ID found in localStorage");
				return;
			}

			const url = `https://alimusa0322.pythonanywhere.com/DIET/get-report/?user_id=1`;

			try {
				const response = await axios.get(url);
				console.log("Response:", response.data); // Log the response for debugging
				setReportData(response.data.result.report_1.food_name); // Set the fetched data to state
			} catch (error) {
				console.error("Error fetching report:", error);
				if (error.response) {
					console.error("Error response:", error.response.data);
				}
			}
		};

		fetchReport();
	}, [id]);

	return (
		<div style={{ padding: "20px" }}>
			<h2>Report Page</h2>
			{reportData ? (
				<div>
					{/* <h3>User ID: {id}</h3> */}
					<pre>{JSON.stringify(reportData, null, 2)}</pre>
				</div>
			) : (
				<p>Loading report...</p>
			)}
		</div>
	);
}
