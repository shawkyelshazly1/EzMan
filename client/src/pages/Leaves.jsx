import React from "react";
import LeavesBalanceSection from "../components/Agent/leaves/LeavesBalanceSection";
import LeavesLog from "../components/Agent/leaves/LeavesLog";
import RequestLeaveModal from "../components/Agent/leaves//RequestLeaveModal";

export default function Leaves() {
	return (
		<div className="flex flex-1 flex-col bg-[#eff0f6] lg:p-10 p-4 rounded-[40px] gap-8">
			<div className="flex flex-row justify-between">
				<h1 className="font-bold text-4xl">Leaves Portal</h1>
				<RequestLeaveModal />
			</div>

			<div className="flex flex-col gap-2">
				<h1 className="text-xl font-medium">My Balance</h1>
				<hr className="border-2 border-[#f2be42]" />
			</div>

			<LeavesBalanceSection />

			<div className="flex flex-col gap-2">
				<h1 className="text-xl font-medium">Leaves Requests History</h1>
				<hr className="border-2 border-[#f2be42]" />
			</div>

			<LeavesLog />
		</div>
	);
}
