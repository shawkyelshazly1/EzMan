import React from "react";
import ActivityCard from "../../components/Agent/dashboard/ActivityCard";
import PerformanceCard from "../../components/Agent/dashboard/PerformanceCard";
import RankingCard from "../../components/Agent/dashboard/RankingCard";

export default function Dashboard() {
	return (
		<div className="flex flex-1 flex-col  bg-[#eff0f6] lg:p-10 p-4 rounded-[40px] gap-4">
			<div className="flex flex-row gap-4 ">
				<PerformanceCard />
				<ActivityCard />
			</div>
			<RankingCard />
		</div>
	);
}
