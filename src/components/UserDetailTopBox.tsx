import Avatar from "../assets/avatar.svg";
import starfilled from "../assets/star-filled.svg";
import star from "../assets/star.svg";
import { useState } from "react";
import { UserDetailProps } from "./types/types";

const UserDetailTopBox = ({ userDetails }: UserDetailProps) => {
    const tabs = [
        "General Details",
        "Documents",
        "Bank Details",
        "Loans",
        "Savings",
        "App and System",
    ];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="userdetails-mainContainer">
            <div className="userdetails-main">
                <div>
                    {/* Avatar container */}
                <div className="avatar-container">
                    <img src={Avatar} alt="User Avatar" className="avatar" />
                </div>

                {/* Display username and ID */}
                <div className="username-key">
                    <h2>{userDetails.username}</h2>
                    <p>{userDetails.Id_key}</p>
                </div>

                {/* Display user's tier with corresponding star icons */}
                <div className="user-tier-container">
                    <div className="line"></div>
                    <div>
                        <p>User's Tier</p>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "5px",
                        }}>
                            {/* Render star icons based on the user's tier */}
                            {[...Array(3)].map((_, i) => (
                                <img
                                    key={i}
                                    src={i < userDetails["User's_Tier"] ? starfilled : star}
                                    alt={i < userDetails["User's_Tier"] ? "Filled Star" : "Star"}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="line"></div>
                    {/* Display account balance, bank name, and account number */}
                    <div className="bank-details">
                        <h2>{userDetails.account_balance}</h2>
                        <p>{userDetails.bank_name}/{userDetails.account_number}</p>
                    </div>    
                </div>    
            </div>

                {/* Tab navigation for different sections */}
                <div className="userdetails-main-tabs">
                    {tabs.map((tab: string) => {
                        const active = activeTab === tab;
                        return (
                            <button
                                key={tab}
                                className={`userdetails-main-tabs-buttons ${active && 'active'}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default UserDetailTopBox;
