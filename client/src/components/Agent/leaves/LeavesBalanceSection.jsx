import React from "react";

export default function LeavesBalanceSection() {
	return (
		<div className="flex flex-row justify-between px-40">
			<div className=" flex flex-col gap-4 items-center bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] p-8 shadow-2xl rounded-3xl  hover:scale-110 transition-transform">
				<h1 className="font-medium  text-white">Annual Leave Balance</h1>
				<h1 className="text-lg text-white">26</h1>
			</div>
			<div className="flex flex-col gap-4 items-center bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] p-8 shadow-2xl rounded-3xl hover:scale-110 transition-transform">
				<h1 className="font-medium  text-white">Sick Leave Balance</h1>
				<h1 className="text-lg text-white">26</h1>
			</div>
			<div className="flex flex-col gap-4 items-center bg-gradient-to-r from-[#4a00e0] to-[#8e2de2]  p-8 shadow-2xl rounded-3xl  hover:scale-110 transition-transform">
				<h1 className="font-medium  text-white">Casual Leave Balance</h1>
				<h1 className="text-lg text-white">26</h1>
			</div>
		</div>
	);
}
