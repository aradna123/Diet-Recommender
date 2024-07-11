import React from "react";
import HomePage from "./HomePage";

import Report from "./Report";
import ContactUs from "./ContactUs";
import AIAssistant from "./AIAssistant";

const Dashboard = ({ sidebarToggle, activePage }) => {
	let content;
	switch (activePage) {
		case "Home":
			content = <HomePage />;
			break;

		case "Report":
			content = <Report />;
			break;
		case "Contact Us":
			content = <ContactUs />;
			break;
		case "AI Assistant":
			content = <AIAssistant />;
			break;
		default:
			content = <HomePage />;
	}

	return (
		<div className={`flex ml-64`}>
			<div className="flex-1 bg-gray-200">{content}</div>
		</div>
	);
};

export default Dashboard;
