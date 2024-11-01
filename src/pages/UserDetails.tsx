import { useEffect, useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSideBar from "../components/DashboardSideBar";
import Back from "../assets/Back.svg";
import UserDetailTopBox from "../components/UserDetailTopBox";
import UserDetailBottomBox from "../components/UserDetailBottomBox";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);  // State to store fetched user details
  const { id } = useParams();  // Extract user ID from the URL parameters
  const [_clickedSideBar, _setClickedSideBar] = useState(true);  // Sidebar toggle state
  const [loading, setLoading] = useState(true);  // Loading state for API calls
  const [error, setError] = useState("");  // Error message state
  const navigate = useNavigate();  // React Router navigate function for redirecting

  useEffect(() => {
    // Try to get user details from localStorage to avoid repeated API calls
    const storedUserDetails = localStorage.getItem(`userDetails_${id}`);
    
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));  // Load from localStorage if available
      setLoading(true);  // Set loading to true if data found in localStorage
    } else {
      // If not found in localStorage, make an API call to fetch user details
      axios
        .get(`https://run.mocky.io/v3/6c389ca0-7b0c-40b8-ade6-81da5ef4945a`)
        .then((result) => {
          const user = result.data.find((user: any) => user._id === id);  // Find user by ID
          setUserDetails(user);  // Set fetched user data to state
          localStorage.setItem(`userDetails_${id}`, JSON.stringify(user));  // Store user data in localStorage for future access
          setLoading(true);  // Set loading to true after successful fetch
        })
        .catch((error) => {
          console.log(error);  // Log errors to the console
          setError("Failed to load user details");  // Set error state if fetch fails
          setLoading(false);  // Set loading to false when there’s an error
        });
    }
  }, [id]);  // Re-run effect if ID changes

  // Render loading screen if data is still being fetched
  if (loading){
    return(
      <div className="loading-container">
        <DashboardHeader clickedSideBar={_clickedSideBar} setClickedSideBar={_setClickedSideBar} />
        <p>Loading Data</p>
        {[0,1,2,3].map((val)=>{  // Loop to display loading placeholders
          return(
            <div key={val} className={"loading "+`loading${val}`}></div>
          )
        })}
      </div>
    )
  }
    
  if (error) return <p>ERROR LOADING PAGE</p>;  // Display error message if data failed to load

  return (
    <div className="user-detail-container">
      <DashboardHeader clickedSideBar={_clickedSideBar} setClickedSideBar={_setClickedSideBar} />
      {_clickedSideBar && <DashboardSideBar clicked={_clickedSideBar} setClicked={_setClickedSideBar} />}
      <div className="userdetails-container">
        <div className="dashboard-content">
          <div className="dashboard-goBack">
            <div>
              <img src={Back} alt="Back" />
              <span onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>Back to Users</span>
            </div>
            <h1 className="dashboard-content-userDetailsTitle">User Details</h1>
          </div>
          <div className="dashboard-content-userDetails">
            <div className="dashboard-functions">
              <button>BLACKLIST USER</button>
              <button>ACTIVATE USER</button>
            </div>
          </div>
        </div>
        {/* Conditionally render user details components only if userDetails is available */}
        {userDetails && (
          <>
            <UserDetailTopBox userDetails={userDetails} />
            <UserDetailBottomBox userDetails={userDetails} />
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
