import React from "react";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./Components/HomePage";
import ContactUs from "./Components/ContactUs";
import AIAssistant from "./Components/AIAssistant";
import Report from "./Components/Report";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LoginSignup />} />
			<Route path="/layout" element={<Layout />} />
		</Routes>
	);
}

export default App;
