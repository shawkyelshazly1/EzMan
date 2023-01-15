import React from "react";

export default function LoginForm() {
	return (
		<form className=" xl:w-1/4 lg:w-2/5 md:w-2/4    flex flex-col gap-8 items-center px-7  rounded-lg">
			<input
				type="text"
				name="username"
				className=" px-4 py-2 focus:outline-none w-full border-b-2 border-gray-300 focus:border-[#f2be42] focus:border-b-[3px]"
				placeholder="Username"
			/>
			<input
				type="password"
				name="password"
				className=" px-4 py-2 focus:outline-none w-full border-b-2 border-gray-300 focus:border-[#f2be42] focus:border-b-[3px]"
				placeholder="Password"
			/>
			<button
				type="submit"
				className="rounded-lg w-full py-2 bg-[#f2be42] text-black font-medium text-xl"
			>
				Login
			</button>
			<q className="text-sm italic font-mono">
				If you don't have an account please contact your local
				<strong> IT</strong> for support.
			</q>
		</form>
	);
}
