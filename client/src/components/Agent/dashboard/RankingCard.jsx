import React, { useState, Fragment } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { userData } from "../../../usersData.json";
import FullStatCard from "./FullStatCard";
import RankingModal from "./RankingModal";
import UserRankCard from "./UserRankCard";

export default function RankingCard() {
	let [isOpen, setIsOpen] = useState(false);
	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	return (
		<div className="w-full bg-[#f7c1c5] flex-row rounded-3xl  lg:p-10 p-4 justify-between items-center h-full md:flex hidden">
			<div className="flex flex-col gap-4 items-center h-full">
				<TiStarFullOutline
					size={100}
					color={"#ffff00"}
					className="animate-spin-slow"
				/>
				<h1 className="self-start font-medium text-4xl">Top Performers</h1>
				<p className="font-normal pl-2 self-start">
					You are <span className="font-semibold">#5</span> for Jan performance.
				</p>
			</div>
			<div className="flex flex-row gap-8 items-center">
				{userData.slice(0, 4).map((userData, idx) => (
					<UserRankCard key={idx} data={userData} />
				))}
				<FullStatCard openModal={openModal} />
			</div>

			<RankingModal closeModal={closeModal} isOpen={isOpen} />
		</div>
	);
}
