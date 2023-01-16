import React from "react";
import moment from "moment";
import { leavesData } from "../../../leavesData.json";

export default function LeavesLog() {
	return (
		<div className="flex flex-col overflow-y-auto  ">
			<table className="table-auto text-center">
				<thead className="bg-[#f2be42] border-b sticky top-0">
					<tr>
						<th scope="col" className=" font-medium text-gray-900 px-6 py-4 ">
							#
						</th>
						<th scope="col" className=" font-medium text-gray-900 px-6 py-4 ">
							Leave Type
						</th>
						<th scope="col" className=" font-medium text-gray-900 px-6 py-4 ">
							From
						</th>
						<th scope="col" className=" font-medium text-gray-900 px-6 py-4 ">
							To
						</th>
						<th
							scope="col"
							className=" font-medium text-gray-900 px-6 py-4 text-left"
						>
							Status
						</th>
					</tr>
				</thead>
				<tbody className="h-96 overflow-y-auto ">
					{leavesData.map((leave, leaveIdx) => (
						<tr
							key={leaveIdx}
							className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 "
						>
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								{leaveIdx + 1}
							</td>
							<td className=" text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
								{leave.leaveType}
							</td>
							<td className=" text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
								{moment(leave.from).format("l")}
							</td>
							<td className=" text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
								{moment(leave.to).format("l")}
							</td>
							<td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
								<h1
									className={`text-white font-medium py-2 px-4 rounded-xl ${
										leave.status === "approved"
											? "bg-green-500"
											: leave.status === "declined"
											? "bg-red-400"
											: "bg-yellow-500"
									} w-fit`}
								>
									{leave.status}
								</h1>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
