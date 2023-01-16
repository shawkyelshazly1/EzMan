import React from "react";
import Logo from "./Logo";
import NavigationLinks from "../../Admin/navbar/NavigationLinks";

export default function Navbar() {
	return (
		<div className="flex flex-col justify-between  py-8 items-center xl:w-[12%] lg:w-[18%] md:w-[18%] w-[30%] px-6">
			<Logo />
			<div className="flex flex-col items-center gap-3">
				<img
					src="profile_pic.jpg"
					alt=""
					className="aspect-square w-32 object-cover rounded-full border-4 border-[#f2be42]"
				/>
				<div className="flex flex-col items-center gap-1">
					<h1 className="font-medium text-lg">Jeniffer Lopez</h1>
					<h1 className="text-base">@lopez.10</h1>
					<h1 className="text-sm  text-[#afafb4]">CSR Agent</h1>
				</div>
			</div>

			<NavigationLinks />

			<h1 className="w-full hover:bg-red-400 hover:font-medium cursor-pointer px-4 py-2  hover:text-white  font-normal rounded-full">
				Logout
			</h1>
		</div>
	);
}
