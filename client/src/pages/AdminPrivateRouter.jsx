import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";

export default function AdminPrivateRouter({ children }) {
	const [auth, setAuth] = useState(true);
	const [admin, setAdmin] = useState(true);

	if (!auth) return <LoginPage />;
	else if (!admin) return <Navigate to={"/"} replace />;
	else return children;
}
