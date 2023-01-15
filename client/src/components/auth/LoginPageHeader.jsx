import React from "react";

export default function LoginPageHeader() {
	return (
		<div className="flex flex-row gap-3 items-center">
			<div className="bg-[#f2be42] py-3 px-2 flex flex-row rounded-xl">
				<p className=" text-5xl font-extrabold bg-[#f2be42] px-[0.7px] z-[99]">
					B
				</p>
				<p className="ml-[-1.2rem] text-5xl font-extrabold">B</p>
			</div>
			<div className="flex flex-col gap-0">
				<h1 className="break-words text-4xl font-medium p-0 m-0">Brand</h1>
				<h1 className="break-words text-4xl font-medium p-0 m-0">Booster</h1>
			</div>
		</div>
	);
}
