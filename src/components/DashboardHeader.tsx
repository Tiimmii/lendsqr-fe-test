import React from 'react'
import grouped_icon from '../assets/Group.svg'
import user_profile_picture from '../assets/image 4.png'
import './styles/dashboard.scss'


{/* The Dashboard Header Component */}
const DashboardHeader = () => {
  return (
    <div className='dashboard-header-container'>
      <div className="header-left-items">
            <div className="logo-container">
                <img src={grouped_icon} alt='lendsqr logo'></img>   {/* top left logo */}
            </div>
            <div className="search-bar-container">
                <input type='search' placeholder='Search for anything'></input>
                <button className='search-bar-button'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
      </div>
      <div className="header-right-items">
        <a href='#'>Docs</a>
        <i className="fa-regular fa-bell"></i>
        <div className="user-header-profile">
            <div className="user-header-profile-picture">
                <img src={user_profile_picture} alt="user profile picture"/>
            </div>
            <span>Adedeji</span>
            <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
