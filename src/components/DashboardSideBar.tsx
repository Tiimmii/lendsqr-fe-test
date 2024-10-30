import { useState } from 'react';
import './styles/dashboard.scss';

type DashboardSideBarProps = {
    clicked: boolean
    setClicked: React.Dispatch<React.SetStateAction<boolean>>
}
{/* The Dashboard Sidebar Component */}
const DashboardSideBar = ({clicked, setClicked}: DashboardSideBarProps) => {
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const [clickedSideBar, setClickedSideBar] = useState(false)

    const toggleSideBar = ()=>{
        setClickedSideBar(!clickedSideBar)
        setClicked(!clicked)
    }

    const handleOptionClick = (index: number) => {
        setClickedIndex(index === clickedIndex ? null : index);
    };

    return (
        <div className={`sidebar-container ${clickedSideBar && 'hide-side-bar'}`}>
            <div style={{ position: 'fixed', top: '1rem', left: '15rem'}}>
                    {clickedSideBar?
                    '':
                    <i className="fa-solid fa-x" onClick={toggleSideBar}></i>
                    }
            </div>
            <div className="sidebar">
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
                        <div
                            key={option.label}
                            onClick={() => handleOptionClick(index + 7)} // Offset index to avoid conflicts with previous section
                            className={`sidebar-option ${clickedIndex === index + 7 ? 'clicked' : ''}`}
                        >
                            <i className={`fa-solid ${option.icon}`}></i>
                            <p>{option.label}</p>
                        </div>
                    ))}
                </div>

                <span>SETTINGS</span>
                <div className="sidebar-options">
                    {[
                        { label: "Preferences", icon: "fa-sliders" },
                        { label: "Fees and Pricing", icon: "fa-certificate" },
                        { label: "Audit logs", icon: "fa-clipboard-list" }
                    ].map((option, index) => (
                        <div
                            key={option.label}
                            onClick={() => handleOptionClick(index + 16)} // Offset index to avoid conflicts with previous sections
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
}

export default DashboardSideBar;
