import React from "react";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Login from "./Components/LoginSignup/Login";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/register" element={<LoginSignup />} />
			<Route path="/layout" element={<Layout />} />
		</Routes>
	);
}

export default App;
