import React from "react";
import LoginForm from "../components/auth/LoginForm";
import LoginPageHeader from "../components/auth/LoginPageHeader";

export default function LoginPage() {
	return (
		<div className=" flex items-center justify-center w-full ">
			<div className="flex flex-col items-center justify-center gap-20 w-full">
				<LoginPageHeader />

				<LoginForm />
			</div>
		</div>
	);
}
