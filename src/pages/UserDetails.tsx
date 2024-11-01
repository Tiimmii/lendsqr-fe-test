import { useEffect, useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSideBar from "../components/DashboardSideBar";
import Back from "../assets/Back.svg";
import UserDetailTopBox from "../components/UserDetailTopBox";
import UserDetailBottomBox from "../components/UserDetailBottomBox";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const { id } = useParams();
  const [_clickedSideBar, _setClickedSideBar] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserDetails = localStorage.getItem(`userDetails_${id}`);
    
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
      setLoading(false);
    } else {
      axios
        .get(`https://run.mocky.io/v3/6c389ca0-7b0c-40b8-ade6-81da5ef4945a`)
        .then((result) => {
          console.log(result)
          const user = result.data.find((user:any) => user._id === id);
          setUserDetails(user);
          console.log(userDetails)
          localStorage.setItem(`userDetails_${id}`, JSON.stringify(user));
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError("Failed to load user details");
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
