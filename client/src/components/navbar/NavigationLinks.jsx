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
				to={"/"}
				className="px-4 py-2 text-xl font-normal rounded-full "
			>
				Dashboard
			</NavLink>
			<NavLink
				style={activeLinkStyle}
				to={"/performance"}
				className="  px-4  py-2 text-xl font-normal rounded-full "
			>
				Performance
			</NavLink>
			<NavLink
				style={activeLinkStyle}
				to={"/leaves"}
				className="  px-4 py-2 text-xl font-normal rounded-full "
			>
				Leaves
			</NavLink>
			<NavLink
				style={activeLinkStyle}
				to={"/settings"}
				className="   px-4 py-2 text-xl font-normal rounded-full "
			>
				Settings
			</NavLink>
		</div>
	);
}
