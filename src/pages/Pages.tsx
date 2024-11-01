// Importing necessary modules from react-router-dom
import { Route, Routes, useLocation } from "react-router-dom";
// Importing components for different routes
import Login from "./Login";
import Dashboard from "./Dashboard";
import UserDetails from "./UserDetails";

// Pages component that handles routing
const Pages = () => {
	// Getting the current location from the router
	const location = useLocation();

	return (
		<div>
			{/* 
				Defining routes for the application. 
				`location` prop ensures that the transition between routes is smooth 
				by using the current pathname as a key for the Routes.
			*/}
			<Routes location={location} key={location.pathname}>
				{/* Route for the login page */}
				<Route path="" element={<Login />} />
                
				{/* Route for the dashboard page */}
                <Route path="/dashboard" element={<Dashboard />} />
                
				{/* Route for user details, using a dynamic parameter `id` */}
				<Route path="/user-details/:id" element={<UserDetails />} />
			</Routes>
		</div>
	);
};

// Exporting the Pages component for use in other parts of the application
export default Pages;
