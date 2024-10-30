import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSideBar from "../components/DashboardSideBar";
import Back from "../assets/Back.svg";
import UserDetailTopBox from "../components/UserDetailTopBox";
import UserDetailBottomBox from "../components/UserDetailBottomBox";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users?_id=${id}`)
      .then((result) => {
        setUserDetails(result.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(userDetails);
  return (
    <div className="user-detail-container">
      <DashboardHeader />
      <DashboardSideBar />
      <div className="userdetails-container">
        <div className="dashboard-content">
          <div className="dashboard-goBack">
            <img src={Back} />
            <span> Back to Users</span>
          </div>
          <div className="dashboard-content-userDetails">
            <h1 className="dashboard-content-userDetailsTitle">
              Users Details
            </h1>
            <div className="dashboard-functions">
              <button>BLACKLIST USER</button>
              <button>ACTIVATE USER</button>
            </div>
          </div>
        </div>
        <UserDetailTopBox userDetails={userDetails} />
        <UserDetailBottomBox userDetails={userDetails} />
      </div>
    </div>
  );
};

export default UserDetails;
