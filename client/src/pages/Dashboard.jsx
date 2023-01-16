import React from "react";
import ActivityCard from "../components/dashboard/ActivityCard";
import PerformanceCard from "../components/dashboard/PerformanceCard";

export default function Dashboard() {
	return (
		<div className="flex flex-1 flex-col  bg-[#eff0f6] lg:p-10 p-4 rounded-[40px]">
			<div className="flex flex-row gap-4 ">
				<PerformanceCard />
				<ActivityCard />
			</div>
		</div>
	);
}
