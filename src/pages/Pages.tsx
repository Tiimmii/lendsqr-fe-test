import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import UserDetails from "./UserDetails";

const Pages = () => {
	const location = useLocation();

	return (
		<div>
			<Routes location={location} key={location.pathname}>
				{/* <Route path="/" element={<Landing />} /> */}
				<Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard/>}/>
				<Route path="/user-details/:id" element={<UserDetails/>}/>
			</Routes>
		</div>
	);
};

export default Pages;