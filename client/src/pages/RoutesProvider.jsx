import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PrivateRouter from "./PrivateRouter";
import Navbar from "../components/navbar/Navbar";
import Dashboard from "./Dashboard";
import Performance from "./Performance";
import Leaves from "./Leaves";
import Settings from "./Settings";
import Logo from "../components/navbar/Logo";

export default function RoutesProvider() {
	return (
		<Router>
			<div className="flex mx-auto min-h-[100vh] w-full items-center justify-center">
				<Toaster />
				<Routes>
					<Route
						path="*"
						element={
							<PrivateRouter>
								<div className="h-full  w-full flex flex-row ">
									<Navbar />
									<Routes>
										<Route path="/" element={<Dashboard />} />
										<Route path="/performance" element={<Performance />} />
										<Route path="/leaves" element={<Leaves />} />
										<Route path="/settings" element={<Settings />} />
									</Routes>
								</div>
							</PrivateRouter>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}
