import React from "react";
import { FaUserCircle, FaBars, FaBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
	return (
		<nav className="bg-gray-800 h-16 flex items-center justify-between px-4 fixed w-full z-10">
			<div className="flex items-center">
				<FaBars
					className="text-white cursor-pointer"
					size={24}
					onClick={() => setSidebarToggle(!sidebarToggle)}
				/>
				<span className="text-white font-semibold ml-4">
					Diet Recommendation System
				</span>
			</div>
			<div className="flex items-center">
				<div className="relative hidden md:block">
					<input
						type="text"
						className="w-64 px-4 py-1 rounded shadow outline-none"
						placeholder="Search..."
					/>
					<button className="absolute right-0 top-0 mt-1 mr-2 text-gray-600">
						<FaSearch />
					</button>
				</div>
				<div className="text-white ml-4">
					<FaBell size={24} />
				</div>
				<div className="relative ml-4">
					<button className="text-white group">
						<FaUserCircle className="w-6 h-6 mt-1" />
						<div className="z-10 hidden absolute rounded-lg shadow w-32 group-focus:block top-full right-0 bg-white text-gray-900">
							<ul className="py-2 text-sm">
								<li key="profile">
									<Link to="#" className="block px-4 py-2 hover:bg-gray-200">
										Profile
									</Link>
								</li>
								<li key="settings">
									<Link to="#" className="block px-4 py-2 hover:bg-gray-200">
										Settings
									</Link>
								</li>
								<li key="logout">
									<Link to="#" className="block px-4 py-2 hover:bg-gray-200">
										Logout
									</Link>
								</li>
							</ul>
						</div>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
