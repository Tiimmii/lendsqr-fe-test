import React, { useEffect, useState } from "react";
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
  const { id } = useParams();
  const [clickedSideBar, setClickedSideBar] = useState(false);
  const navigate = useNavigate();
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
      <DashboardHeader clickedSideBar={clickedSideBar} setClickedSideBar={setClickedSideBar} />
      <DashboardSideBar clicked={clickedSideBar} setClicked={setClickedSideBar}/>
      <div className="userdetails-container">
        <div className="dashboard-content">
          <div className="dashboard-goBack">
            <div>
              <img src={Back} />
              <span onClick={()=>navigate('/dashboard')} style={{ cursor: 'pointer'}}> Back to Users</span>
            </div>
            <h1 className="dashboard-content-userDetailsTitle">
              Users Details
            </h1>
          </div>
          <div className="dashboard-content-userDetails">
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
