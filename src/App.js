import React from "react";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LoginSignup />} />
			<Route path="/layout" element={<Layout />} />
		</Routes>
	);
}

export default App;
