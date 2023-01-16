import React, { useReducer } from "react";
import LineChart from "../charts/LineChart";
import ActivityCardDropdown from "./ActivityCardDropdown";
import data from "../../../data.json";

export default function ActivityCard() {
	const [accData, setAccData] = useReducer(
		(prev, next) => {
			return { ...prev, ...next };
		},
		{ title: "MOM", data: data.MOM }
	);

	return (
		<div className="bg-[#f2be42] w-full md:flex flex-col justify-between rounded-3xl  p-10 hidden ">
			<div className="flex flex-row justify-between">
				<h1 className=" text-3xl font-semibold ">{accData.title} Activity</h1>
				<ActivityCardDropdown setAccData={setAccData} title={accData.title} />
			</div>

			<LineChart data={accData.data} />
		</div>
	);
}
