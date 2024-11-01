import { useState } from "react";
import grouped_icon from "../assets/Group.svg";
import user_profile_picture from "../assets/image 4.png";
import "./styles/dashboard.scss";
import { DashboardHeaderProps } from "./types/types";


// The Dashboard Header Component
const DashboardHeader = ({
  clickedSideBar,
  setClickedSideBar,
}: DashboardHeaderProps) => {
  const [toggleMobileHeaderDropdown, setToggleMobileHeaderDropdown] =
    useState(false);

  // Toggle function to show or hide the sidebar
  const toggleSideBar = () => {
    setClickedSideBar(true);
  };
  console.log(clickedSideBar)

  return (
    <div className="dashboard-header-container">
      {/* Sidebar toggle button visible only when sidebar is closed */}
      <div
        className="responsive-side-bar-toggler"
        style={{
          position: "fixed",
          top: "2rem",
          left: "10px",
          color: "#213F7D",
        }}
      >
        <i className="fa-solid fa-bars" onClick={toggleSideBar}></i>
      </div>

      {/* Left section of the header with logo and search bar */}
      <div className="header-left-items">
        {/* Logo container */}
        <div className="logo-container">
          <img src={grouped_icon} alt="lendsqr logo" /> {/* Top left logo */}
        </div>

        {/* Search bar with an input field and search button */}
        <div className="search-bar-container">
          <input type="search" placeholder="Search for anything" />
          <button className="search-bar-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      {/* Right section of the header with docs link, notifications, and user profile */}
      <div className="header-right-items">
        <a href="#" className="link">Docs</a> {/* Documentation link */}
        <i className="fa-regular fa-bell notification"></i>{" "}
        {/* Notification bell icon */}
        {/* User profile section with profile picture and username */}
        <div className="user-header-profile">
          <div className="user-header-profile-picture">
            <img src={user_profile_picture} alt="user profile picture" />
          </div>
          <span>Adedeji</span> {/* Displaying username */}
          <i
            className="fa-solid fa-caret-down"
            onClick={() =>
              setToggleMobileHeaderDropdown(!toggleMobileHeaderDropdown)
            }
          ></i>{" "}
          {/* Dropdown indicator (dropsdown on mobile to display the items removed from the header) */}
          {toggleMobileHeaderDropdown && (
            <div className="dropdown-on-mobile">
              <a href="#">Docs</a> {/* Documentation link */}
              <p>
                <i className="fa-regular fa-bell"></i> {/* Notification bell icon */}
                Notifications
              </p> 
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
