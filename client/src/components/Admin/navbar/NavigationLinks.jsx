import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationLinks() {
	// active link style
	const activeLinkStyle = ({ isActive }) => {
		return {
			backgroundColor: isActive ? "#f3f2f7" : "",
		};
	};

	return (
		<div className="flex flex-col gap-4 w-full">
			<NavLink
				style={activeLinkStyle}
				to={"dashboard"}
				className="px-4 py-2 text-xl font-normal rounded-full "
			>
				Dashboard
			</NavLink>
			<NavLink
				style={activeLinkStyle}
				to={"users"}
				className="px-4 py-2 text-xl font-normal rounded-full "
			>
				Users Management
			</NavLink>
		</div>
	);
}
