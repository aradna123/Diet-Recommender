import axios from "axios";
import React, { useEffect } from "react";

export default function Report() {
	const id = localStorage.getItem("user_id");
	console.log("User ID:", id);

	useEffect(() => {
		if (id) {
			const url = `https://alimusa0322.pythonanywhere.com/DIET/get-report/?user_id=${id}`;
			console.log("Request URL:", url);

			axios
				.get(url)
				.then((res) => {
					console.log("Response:", res.data); // Adjust based on actual response structure
				})
				.catch((err) => {
					console.error("Error:", err);
				});
		} else {
			console.log("No user ID found in localStorage");
		}
	}, [id]);

	// console.log(localStorage.getItem("user_id"));
	return <div>This Page is under construction</div>;
}
