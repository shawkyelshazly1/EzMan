import React from "react";
import { Menu } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import data from "../../../data.json";

export default function ActivityCardDropdown({ setAccData, title }) {
	return (
		<Menu as="div" className="z-[9] text-left relative flex flex-col gap-2">
			<Menu.Button>
				<div className="flex flex-row items-center gap-2 bg-white rounded-full px-4 py-2 text-lg">
					{" "}
					{title}
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
								setAccData({ title: "MOM", data: data.MOM });
							}}
						>
							MOM
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
								setAccData({ title: "WOW", data: data.WOW });
							}}
						>
							WOW
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
								setAccData({ title: "DOD", data: data.DOD });
							}}
						>
							DOD
						</h1>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	);
}
