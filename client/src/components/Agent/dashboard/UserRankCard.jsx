import React from "react";

export default function UserRankCard({ data }) {
	return (
		<div className="flex flex-col bg-white rounded-[50px] py-14  items-center gap-8 relative aspect-square w-[210px] h-fit">
			<img
				src={data.profilePic}
				alt=""
				className="aspect-square w-16 rounded-xl object-cover absolute  top-[-20px]"
			/>
			<div className="flex flex-col gap-1 items-center">
				<h1 className="text-lg font-medium">
					{data.firstName} {data.lastName}
				</h1>
				<h1>@{data.username}</h1>
			</div>
			<h1 className="text-5xl font-semibold text-[#503049]">
				{data.score * 100}%
			</h1>
		</div>
	);
}
