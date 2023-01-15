import React, { useState } from "react";
import LoginPage from "./LoginPage";

export default function PrivateRouter({ children }) {
	const [auth, setAuth] = useState(true);

	if (!auth) return <LoginPage />;
	else return children;
}
