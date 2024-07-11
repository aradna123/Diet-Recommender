import React from "react";
import { FaHome, FaRegEnvelope, FaRegFileAlt, FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarToggle, setActivePage }) => {
	return (
		<div
			className={`${
				sidebarToggle ? "hidden" : "block"
			} w-64 bg-gray-800 fixed h-full px-4 py-2`}
		>
			<div className="my-2 mb-4">
				<h1 className="text-2xl text-white font-bold">Admin Dashboard</h1>
				<hr />
				<ul className="mt-3 text-white font-bold">
					<li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
						<Link
							to="#"
							className="px-3 flex items-center"
							onClick={() => setActivePage("Home")}
						>
							<FaHome className="inline-block w-6 h-6 mr-2 mt-2" />
							Home
						</Link>
					</li>

					<li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
						<Link
							to="#"
							className="px-3 flex items-center"
							onClick={() => setActivePage("AI Assistant")}
						>
							<FaRobot className="inline-block w-6 h-6 mr-2 mt-2" />
							AI Assistant
						</Link>
					</li>
					<li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
						<Link
							to="#"
							className="px-3 flex items-center"
							onClick={() => setActivePage("Report")}
						>
							<FaRegEnvelope className="inline-block w-6 h-6 mr-2 mt-2" />
							Report
						</Link>
					</li>
					<li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
						<Link
							to="#"
							className="px-3 flex items-center"
							onClick={() => setActivePage("Contact Us")}
						>
							<FaRegFileAlt className="inline-block w-6 h-6 mr-2 mt-2" />
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
