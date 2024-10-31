import Avatar from "../assets/avatar.svg";
import starfilled from "../assets/star-filled.svg";
import star from "../assets/star.svg";
import { useState } from "react";

// Define prop types for UserDetailTopBox component
type UserDetailTopBoxProps = {
    userDetails: Record<string, any>[]; // Array of user detail records
};

// Main UserDetailTopBox component
const UserDetailTopBox = ({ userDetails }: UserDetailTopBoxProps) => {
    
    // Define tabs for different sections
    const tabs = [
        "General Details",
        "Documents",
        "Bank Details",
        "Loans",
        "Savings",
        "App and System",
    ];

    // State to manage the active tab selection
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="userdetails-mainContainer">
            {/* Main container for user details */}
            <div className="userdetails-main">
                
                {/* Map through userDetails to display each user's info */}
                {userDetails.map((item) => (
                    <div key={item.id}>
                        
                        {/* Avatar container */}
                        <div className="avatar-container">
                            <img src={Avatar} alt="User Avatar" className="avatar" />
                        </div>

                        {/* Display username and ID */}
                        <div className="username-key">
                            <h2>{item.username}</h2>
                            <p>{item.Id_key}</p>
                        </div>

                        {/* Display user's tier with corresponding star icons */}
                        <div className="user-tier-container">
                            <div className="line"></div>
                            <div>
                                <p>User's Tier</p>
                                <div>
                                    {/* Conditional rendering of stars based on the user's tier */}
                                    {item["User's_Tier"] === 1 ? (
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: "5px",
                                        }}>
                                            <img src={starfilled} alt="Filled Star" />
                                            <img src={star} alt="Star" />
                                            <img src={star} alt="Star" />
                                        </div>
                                    ) : item["User's_Tier"] === 2 ? (
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: "5px",
                                        }}>
                                            <img src={starfilled} alt="Filled Star" />
                                            <img src={starfilled} alt="Star" />
                                            <img src={star} alt="Star" />
                                        </div>
                                    ) : item["User's_Tier"] === 3 ? (
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: "5px",
                                        }}>
                                            <img src={starfilled} alt="Filled Star" />
                                            <img src={starfilled} alt="Star" />
                                            <img src={starfilled} alt="Star" />
                                        </div>
                                    ) : (
                                        ''  // Empty case for unassigned tiers
                                    )}
                                </div>
                            </div>
                            <div className="line"></div> {/* Divider line */}
                        </div>

                        {/* Display account balance, bank name, and account number */}
                        <div className="bank-details">
                            <h2>{item.account_balance}</h2>
                            <p>{item.bank_name}/{item.account_number}</p>
                        </div>
                    </div>
                ))}

                {/* Tab navigation for different sections */}
                <div className="userdetails-main-tabs">
                    {tabs.map((tab: string) => {
                        const active = activeTab === tab; // Check if the current tab is active
                        return (
                            <button
                                key={tab} // Add key for each tab button
                                className={`userdetails-main-tabs-buttons ${active && 'active'}`} // Apply active class if tab is selected
                                onClick={() => setActiveTab(tab)} // Set active tab on button click
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
