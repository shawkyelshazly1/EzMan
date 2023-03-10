import React, { useState } from "react";
import { Navigate } from "react-router";
import LoginPage from "./LoginPage";

export default function PrivateRouter({ children }) {
	const [auth, setAuth] = useState(true);
	const [admin, setAdmin] = useState(true);

	if (!auth) return <LoginPage />;
	else if (admin) return <Navigate to={"/admin/dashboard"} replace />;
	else return children;
}
