import React from "react";
import { FiChevronRight } from "react-icons/fi";

export default function FullStatCard({ openModal }) {
	return (
		<div
			onClick={() => {
				openModal();
			}}
			className="flex flex-col bg-[#1d2029] rounded-[50px] justify-between p-6 py-8 cursor-pointer   items-start  aspect-square w-[210px] h-fit animate-bounce-slow"
		>
			<h1 className="text-white font-semibold text-2xl break-words w-2/4">
				Full Stats
			</h1>
			<FiChevronRight
				color="#FFF"
				className="bg-[#949ff7] rounded-full aspect-square p-2 font-bold"
				size={50}
			/>
		</div>
	);
}
