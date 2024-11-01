import { useEffect, useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSideBar from "../components/DashboardSideBar";
import Back from "../assets/Back.svg";
import UserDetailTopBox from "../components/UserDetailTopBox";
import UserDetailBottomBox from "../components/UserDetailBottomBox";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState([]);
  const { id } = useParams();  // Get the user ID from the URL
  const [_clickedSideBar, _setClickedSideBar] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user details are already stored in localStorage
    const storedUserDetails = localStorage.getItem(`userDetails_${id}`);
    
    if (storedUserDetails) {
      // If details are found in localStorage, set them in state
      setUserDetails(JSON.parse(storedUserDetails));
    } else {
      // If no details are found, fetch the data from the API
      axios
        .get(`http://localhost:3000/users?_id=${id}`)
        .then((result) => {
          setUserDetails(result.data);

          // Store the fetched data in localStorage
          localStorage.setItem(`userDetails_${id}`, JSON.stringify(result.data));
        })
        .catch((error) => console.log(error));
    }
  }, [id]);  // Dependency array includes 'id' to re-run when the id changes

  console.log(userDetails) 
  console.log(_clickedSideBar) // Log the user details to the console

  return (
    <div className="user-detail-container">
      <DashboardHeader clickedSideBar={_clickedSideBar} setClickedSideBar={_setClickedSideBar} />
      {_clickedSideBar && <DashboardSideBar clicked={_clickedSideBar} setClicked={_setClickedSideBar} />}
      <div className="userdetails-container">
        <div className="dashboard-content">
          <div className="dashboard-goBack">
            <div>
              <img src={Back} />
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
        {/* Pass the user details to the top and bottom components */}
        <UserDetailTopBox userDetails={userDetails} />
        <UserDetailBottomBox userDetails={userDetails} />
      </div>
    </div>
  );
};

export default UserDetails;
