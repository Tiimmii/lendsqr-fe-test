import Avatar from "../assets/avatar.svg";
import starfilled from "../assets/star-filled.svg";
import star from "../assets/star.svg";
import { useState } from "react";

const UserDetailTopBox = () => {
    const user = {
        name: "Grace Effiom",
        id: "LSQFf587g90",
        money: "₦200,000.00",
        bankDetails: "9912345678/Providus Bank",
    };
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
            <img src={Avatar} />
            <div>
                <h2>{user.name}</h2>
                <p>{user.id}</p>
            </div>
            <div className="line"></div>
            <div>
                <p>User's Tier</p>
                <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5px",
                }}
                >
                <img src={starfilled} alt="" /> <img src={star} alt="" />{" "}
                <img src={star} alt="" />
                </div>
            </div>
            <div className="line"></div>
            <div>
                <h2>{user.money}</h2>
                <p>{user.bankDetails}</p>
            </div>
            </div>
            <div className="userdetails-main-tabs">
            {tabs.map((tab: string) => {
                const active = activeTab == tab;
                return (
                <button
                    className="userdetails-main-tabs-buttons active"
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
