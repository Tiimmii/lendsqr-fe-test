import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Pages = () => {
	const location = useLocation();

	return (
		<div>
			<Routes location={location} key={location.pathname}>
				{/* <Route path="/" element={<Landing />} /> */}
				<Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard/>}/>
			</Routes>
		</div>
	);
};

export default Pages;