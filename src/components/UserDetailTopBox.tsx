import Avatar from "../assets/avatar.svg";
import starfilled from "../assets/star-filled.svg";
import star from "../assets/star.svg";
import { useState } from "react";

type UserDetailTopBoxProps = {
    userDetails: Record<string, any>[];
};


const UserDetailTopBox = ({userDetails}: UserDetailTopBoxProps) => {
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
        {userDetails.map((item) => (
            <div key={item.id}>
                <div className="avatar-container">
                    <img src={Avatar} alt="User Avatar" className="avatar"/>
                </div>
                <div className="username-key">
                    <h2>{item.username}</h2>
                    <p>{item.Id_key}</p>
                </div>
                <div className="user-tier-container">
                <div className="line"></div>
                <div>
                    <p>User's Tier</p>
                    <div>
                        {item["User's_Tier"]===1?
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "5px",
                            }}>
                                <img src={starfilled} alt="Filled Star" /> 
                                <img src={star} alt="Star" />
                                <img src={star} alt="Star" />
                            </div>:
                        item["User's_Tier"]===2?
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "5px",
                        }}>
                            <img src={starfilled} alt="Filled Star" /> 
                            <img src={starfilled} alt="Star" />
                            <img src={star} alt="Star" />
                        </div>:
                        item["User's_Tier"]===3?
                        <div 
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "5px",
                        }}>
                            <img src={starfilled} alt="Filled Star" /> 
                            <img src={starfilled} alt="Star" />
                            <img src={starfilled} alt="Star" />
                        </div>:
                        ''    
                        }
                    </div>
                </div>
                <div className="line"></div>
                </div>
                <div className="bank-details">
                    <h2>{item.account_balance}</h2>  {/* Use item instead of user */}
                    <p>{item.bank_name}/{item.account_number}</p>  {/* Use item instead of user */}
                </div>
            </div>
        ))}

            <div className="userdetails-main-tabs">
            {tabs.map((tab: string) => {
                const active = activeTab == tab;
                return (
                <button
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

export default UserDetailTopBox
