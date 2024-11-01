import { useState } from 'react';
import './styles/dashboard.scss';
import { DashboardSideBarProps } from './types/types';

// DashboardSideBar Component
{/* The Dashboard Sidebar Component */}
const DashboardSideBar = ({ clicked, setClicked }: DashboardSideBarProps) => {
    const [clickedIndex, setClickedIndex] = useState<number | null>(null); // Tracks the active sidebar option
    const [clickedSideBar, setClickedSideBar] = useState(false); // Tracks if the sidebar is collapsed

    // Toggles sidebar open/close state both locally and in the parent component
    const toggleSideBar = () => {
        setClickedSideBar(!clickedSideBar);
        setClicked(!clicked);
    };

    // Highlights the clicked sidebar option based on the index
    const handleOptionClick = (index: number) => {
        setClickedIndex(index === clickedIndex ? null : index); // Toggle clicked state for individual option
    };

    return (
        <div className={`sidebar-container ${clickedSideBar && 'hide-side-bar'}`}>
            
            {/* Close button for the sidebar, appears only when sidebar is open */}
            <div style={{ position: 'fixed', top: '1rem', left: '15rem' }}>
                {clickedSideBar ? '' : (
                    <i className="fa-solid fa-x" onClick={toggleSideBar}></i>
                )}
            </div>

            <div className="sidebar">
                
                {/* Sidebar Top Options: Includes 'Switch Organization' and 'Dashboard' */}
                <div className="sidebar-top-options">
                    <div className="switch-organization">
                        <i className="fa-solid fa-briefcase"></i>
                        <p>Switch Organization</p>
                        <i className="fa-solid fa-angle-down" style={{ marginLeft: '-17px' }}></i>
                    </div>
                    <div className="sidebar-dashboard-option">
                        <i className="fa-solid fa-house-chimney"></i>
                        <p>Dashboard</p>
                    </div>
                </div>

                {/* Sidebar section for Customer options */}
                <span>CUSTOMERS</span>
                <div className="sidebar-options">
                    {[
                        { label: "Users", icon: "fa-user-group" },
                        { label: "Guarantors", icon: "fa-users" },
                        { label: "Decision Models", icon: "fa-handshake" },
                        { label: "Savings", icon: "fa-piggy-bank" },
                        { label: "Loan Requests", icon: "fa-hand-holding-dollar" },
                        { label: "Whitelist", icon: "fa-user-check" },
                        { label: "Karma", icon: "fa-user-xmark" }
                    ].map((option, index) => (
                        // Each option renders an icon and label, highlighted if active
                        <div
                            key={option.label}
                            onClick={() => handleOptionClick(index)}
                            className={`sidebar-option ${clickedIndex === index ? 'clicked' : ''}`}
                        >
                            <i className={`fa-solid ${option.icon}`}></i>
                            <p>{option.label}</p>
                        </div>
                    ))}
                </div>

                {/* Sidebar section for Business options */}
                <span>BUSINESSES</span>
                <div className="sidebar-options">
                    {[
                        { label: "Organization", icon: "fa-briefcase" },
                        { label: "Loan Products", icon: "fa-hand-holding-dollar" },
                        { label: "Savings Products", icon: "fa-building-columns" },
                        { label: "Fees and Charges", icon: "fa-coins" },
                        { label: "Transactions", icon: "fa-money-bill-transfer" },
                        { label: "Services", icon: "fa-fan" },
                        { label: "Service Account", icon: "fa-user-gear" },
                        { label: "Settlements", icon: "fa-scroll" },
                        { label: "Reports", icon: "fa-chart-column" }
                    ].map((option, index) => (
                        // Offset index to avoid conflicts with the previous section's index
                        <div
                            key={option.label}
                            onClick={() => handleOptionClick(index + 7)}
                            className={`sidebar-option ${clickedIndex === index + 7 ? 'clicked' : ''}`}
                        >
                            <i className={`fa-solid ${option.icon}`}></i>
                            <p>{option.label}</p>
                        </div>
                    ))}
                </div>

                {/* Sidebar section for Settings options */}
                <span>SETTINGS</span>
                <div className="sidebar-options">
                    {[
                        { label: "Preferences", icon: "fa-sliders" },
                        { label: "Fees and Pricing", icon: "fa-certificate" },
                        { label: "Audit logs", icon: "fa-clipboard-list" }
                    ].map((option, index) => (
                        // Offset index to avoid conflicts with previous sections' index
                        <div
                            key={option.label}
                            onClick={() => handleOptionClick(index + 16)}
                            className={`sidebar-option ${clickedIndex === index + 16 ? 'clicked' : ''}`}
                        >
                            <i className={`fa-solid ${option.icon}`}></i>
                            <p>{option.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardSideBar;
