import React from "react";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";

export default function AdminNavbar() {
	return (
		<div className="flex flex-col justify-between  py-8 items-center xl:w-[12%] lg:w-[18%] md:w-[18%] w-[30%] px-6">
			<Logo />

			<NavigationLinks />

			<h1 className="w-full hover:bg-red-400 hover:font-medium cursor-pointer px-4 py-2  hover:text-white  font-normal rounded-full">
				Logout
			</h1>
		</div>
	);
}
