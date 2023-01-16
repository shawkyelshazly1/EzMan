import React from "react";

export default function PerformanceCard() {
	return (
		<div className="bg-[#1d2029] flex flex-col rounded-3xl  lg:p-10 px-4 gap-10 items-center ">
			<div className="flex flex-col justify-between w-full">
				<h1 className="text-[#d2d7ff] text-xl font-semibold self-start">Jan</h1>
				<h1 className="text-[#d2d7ff] text-3xl font-semibold self-start">
					Performance
				</h1>
			</div>

			<div className="bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] rounded-full p-3 w-fit aspect-square">
				<div className="flex flex-col gap-1 text-[#e2e5fa] text-6xl font-bold w-fit h-fit bg-[#1d2029] p-12 rounded-full aspect-square  items-center justify-center">
					<h1>57%</h1>
					<h1 className="text-sm font-light">+5% from last week</h1>
				</div>
			</div>
			<div className="flex flex-row justify-between gap-6">
				<div className="flex flex-row gap-2 items-center">
					<h1 className="text-[#fddee1] text-3xl font-medium">76%</h1>
					<h1 className="text-[#fddee1] text-sm break-words">
						CSAT Performance
					</h1>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<h1 className="text-[#dffee2] text-3xl font-medium">84%</h1>
					<h1 className="text-[#dffee2] text-sm break-words ">
						NPS Performance
					</h1>
				</div>
			</div>
		</div>
	);
}
