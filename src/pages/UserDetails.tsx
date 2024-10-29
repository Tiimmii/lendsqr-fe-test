import React from 'react'
import DashboardHeader from "../components/DashboardHeader";
import DashboardSideBar from "../components/DashboardSideBar";
import Back from "../assets/Back.svg";
import UserDetailTopBox from '../components/UserDetailTopBox';

const UserDetails = () => {
  return(
    <div className="userdetails-container">
      <DashboardHeader />
      <DashboardSideBar />
      <div className="dashboard-content">
        <div className="dashboard-goBack">
            <img src={Back} />
            <span> Back to Users</span>
        </div>
        <div className="dashboard-content-userDetails">
            <h1 className="dashboard-content-userDetailsTitle">Users Details</h1>
            <div className="dashboard-functions">
            <button>BLACKLIST USER</button>
            <button>ACTIVATE USER</button>
            </div>
        </div>
      </div>
      <UserDetailTopBox/>
    </div>
  )
};

export default UserDetails;
