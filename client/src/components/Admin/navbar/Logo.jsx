import React from "react";

export default function Logo() {
	return (
		<div className="flex flex-row gap-3 items-center">
			<div className="bg-[#f2be42] py-2 px-3 flex flex-row rounded-xl">
				<p className=" text-3xl font-extrabold bg-[#f2be42] px-[0.7px] z-[99]">
					B
				</p>
				<p className="ml-[-0.7rem] text-3xl font-extrabold">B</p>
			</div>
			<div className="flex flex-col gap-0">
				<h1 className="break-words text-xl font-medium p-0 m-0">Brand</h1>
				<h1 className="break-words text-xl font-medium p-0 m-0">Booster</h1>
			</div>
		</div>
	);
}
