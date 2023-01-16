import { Menu } from "@headlessui/react";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

export default function LeavesTypesDropdown({ leaveData, setLeaveData }) {
	return (
		<Menu as="div" className="z-[999] text-left relative flex flex-col gap-2">
			<Menu.Button>
				<div className="flex flex-row items-center gap-2 bg-white rounded-full px-4 py-2 text-lg">
					{" "}
					{leaveData.leaveType === ""
						? "Select Leave Type"
						: leaveData.leaveType}
					<FiChevronDown />{" "}
				</div>
			</Menu.Button>
			<Menu.Items className="flex flex-col bg-white rounded-lg  text-lg absolute top-12 w-full">
				<Menu.Item>
					{({ active }) => (
						<h1
							className={` p-3 rounded-lg cursor-pointer ${
								active && "bg-[#f3f2f7]"
							}`}
							onClick={() => {
								setLeaveData({ leaveType: "annual" });
							}}
						>
							Annual
						</h1>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<h1
							className={` p-3 rounded-lg cursor-pointer ${
								active && "bg-[#f3f2f7]"
							}`}
							onClick={() => {
								setLeaveData({ leaveType: "sick" });
							}}
						>
							Sick
						</h1>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<h1
							className={` p-3 rounded-lg cursor-pointer ${
								active && "bg-[#f3f2f7]"
							}`}
							onClick={() => {
								setLeaveData({ leaveType: "casual" });
							}}
						>
							Casual
						</h1>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	);
}
