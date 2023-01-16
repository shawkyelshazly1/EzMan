import React, { useReducer } from "react";
import LeavesTypesDropdown from "./LeavesTypesDropdown";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

export default function RequestLeaveForm() {
	const [leaveData, setLeaveData] = useReducer(
		(prev, next) => {
			return { ...prev, ...next };
		},
		{ leaveType: "", from: "", to: "" }
	);

	return (
		<form className="flex flex-col gap-8 px-10 items-start">
			<div className="flex flex-row gap-4 items-center">
				<h1>Vacation Type</h1>
				<LeavesTypesDropdown
					setLeaveData={setLeaveData}
					leaveData={leaveData}
				/>
			</div>
			<div className="flex flex-row gap-4">
				<h1>From</h1>
				<DatePicker
					className="self-end"
					minDate={moment().toDate()}
					placeholderText="Select Date"
					selected={leaveData.from}
					onChange={(date) => setLeaveData({ from: date })}
				/>
			</div>
			<div className="flex flex-row gap-4">
				<h1>To</h1>
				<DatePicker
					className="self-end"
					placeholderText="Select Date"
					minDate={moment().toDate()}
					selected={leaveData.to}
					onChange={(date) => setLeaveData({ to: date })}
				/>
			</div>
			<button
				className="bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] text-lg text-white font-medium rounded-xl py-2 px-4 self-center"
				type="submit"
			>
				Submit
			</button>
		</form>
	);
}
