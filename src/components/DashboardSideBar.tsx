import React from 'react'
import './styles/dashboard.scss'

{/* The Dashboard Sidebar Component */}
const DashboardSideBar = () => {
  return (
    <div className='sidebar-container'>
        <div className="sidebar">
            <div className="sidebar-top-options">
                <div className="switch-organization">
                    <i className="fa-solid fa-briefcase"></i>
                    <p>Switch Organization</p>
                </div>
                <div className="sidebar-dashboard-option">
                    <i className="fa-solid fa-house-chimney"></i>
                    <p>Dashboard</p>
                </div>
            </div>
            <div className="sidebar-options">
                <span>CUSTOMERS</span>
                <div className="sidebar-option">
                    <i className="fa-solid fa-user-group"></i>
                    <p>Users</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-solid fa-users"></i>
                    <p>Guarantors</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-regular fa-handshake"></i>
                    <p>Decision Models</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-solid fa-piggy-bank"></i>
                    <p>Savings</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-solid fa-hand-holding-dollar"></i>
                    <p>Loan Requests</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-solid fa-user-check"></i>
                    <p>Whitelist</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-solid fa-user-xmark"></i>
                    <p>karma</p>
                </div>

                <span>BUSINESSES</span>
                <div className="sidebar-option">
                    <i className="fa-solid fa-briefcase"></i>
                    <p>Organization</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-solid fa-hand-holding-dollar"></i>
                    <p>Loan Products</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-solid fa-building-columns"></i>
                    <p>Savings Products</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-solid fa-coins"></i>
                    <p>Fees and Charges</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-solid fa-money-bill-transfer"></i>
                    <p>Transactions</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-solid fa-fan"></i>
                    <p>Services</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-solid fa-user-gear"></i>
                    <p>Service Account</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-solid fa-scroll"></i>
                    <p>Settlements</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-solid fa-chart-column"></i>
                    <p>Reports</p>
                </div>

                <span>SETTINGS</span>
                <div className="sidebar-option">
                    <i className="fa-solid fa-sliders"></i>
                    <p>Preferences</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-solid fa-certificate"></i>
                    <p>Fees and Pricing</p>
                </div>
                <div className="sidebar-option">
                    <i className="fa-solid fa-clipboard-list"></i>
                    <p>Audit logs</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardSideBar
