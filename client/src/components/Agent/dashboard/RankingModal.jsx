import React, { Fragment } from "react";
import { Dialog, Transition, Tab } from "@headlessui/react";
import { TiStarFullOutline } from "react-icons/ti";
import monthlyRanking from "../../../monthlyRanking.json";

export default function RankingModal({ closeModal, isOpen }) {
	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={closeModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
								<Dialog.Title
									as="h3"
									className="text-xl font-semibold leading-6 text-gray-900 flex flex-row items-center gap-1"
								>
									OverAll Ranking{" "}
									<TiStarFullOutline
										size={40}
										color={"#f2be42"}
										className="animate-spin-slow"
									/>
								</Dialog.Title>
								<div className="mt-2">
									<div className="w-full max-w-md px-2 py-4 sm:px-0">
										<Tab.Group>
											<Tab.List className="flex space-x-1 rounded-xl bg-[#949ff7]/60 p-1">
												{Object.keys(monthlyRanking).map((month, idx) => (
													<Tab
														key={idx}
														className={({ selected }) =>
															classNames(
																"w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white",
																"ring-white ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2",
																selected
																	? "bg-[#f2be42] shadow"
																	: "text-[#f2be42]*20 hover:bg-white/[0.12] hover:text-white"
															)
														}
													>
														{month}
													</Tab>
												))}
											</Tab.List>
											<Tab.Panels className="mt-2">
												{Object.values(monthlyRanking).map((users, idx) => (
													<Tab.Panel
														key={idx}
														className={classNames(
															"rounded-xl bg-white p-3",
															"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
														)}
													>
														<ul className="max-h-[500px] overflow-y-auto">
															{users.map((user, idx) => (
																<li
																	key={idx}
																	className=" relative rounded-md p-3 hover:bg-gray-100 flex flex-row gap-8 justify-between items-center "
																>
																	<h1 className="font-semibold">#{idx + 1}</h1>
																	<div className="flex flex-row gap-4 items-center flex-1">
																		<img
																			src={user.profilePic}
																			alt=""
																			className="aspect-square object-cover w-12 rounded-lg"
																		/>
																		<div className="flex flex-col">
																			<h1 className="text-lg font-medium">
																				{user.firstName} {user.lastName}
																			</h1>
																			<h1 className="text-sm font-light">
																				@{user.username}
																			</h1>
																		</div>
																	</div>
																	<h1 className="font-bold text-xl">
																		{user.score * 100}%
																	</h1>
																</li>
															))}
														</ul>
													</Tab.Panel>
												))}
											</Tab.Panels>
										</Tab.Group>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
