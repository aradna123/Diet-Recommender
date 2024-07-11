import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

export default function Layout() {
	const [sidebarToggle, setSidebarToggle] = useState(false);
	const [activePage, setActivePage] = useState("Home");

	return (
		<div
			className="flex"
			style={
				{
					// overflow: "hidden",
					// height: "100vh",
					// width: "100vw",
				}
			}
		>
			<Sidebar sidebarToggle={sidebarToggle} setActivePage={setActivePage} />
			<div className="flex-grow">
				<div className="">
					<Dashboard
						sidebarToggle={sidebarToggle}
						setSidebarToggle={setSidebarToggle}
						activePage={activePage}
					/>
				</div>
			</div>
		</div>
	);
}
