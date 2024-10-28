import React, { useState } from 'react';
import './styles/dashboard.scss';
import UserPage from '../pages/UserPage';

type DashboardRecordsProps = {
    records: Record<string, any>[];
    maxItems: number;
};

const DashboardRecords = ({ records, maxItems }: DashboardRecordsProps) => {
    const [activeHeader, setActiveHeader] = useState<string | null>(null);

    const toggleUserPage = (headerLabel: string) => {
        setActiveHeader(activeHeader === headerLabel ? null : headerLabel);
    };

    return (
        <div className="dashboard-records-container">
            <div className="dashboard-records-table-header">
                {["ORGANIZATION", "USERNAME", "EMAIL", "PHONE NUMBER", "DATE JOINED", "STATUS"].map((headerLabel) => (
                    <div className="table-header-texts" key={headerLabel}>
                        {headerLabel}
                        <i
                            className="fa-solid fa-bars"
                            onClick={() => toggleUserPage(headerLabel)}
                            style={{ cursor: 'pointer' }}
                        ></i>
                        {activeHeader === headerLabel && <UserPage />}
                    </div>
                ))}
            </div>

            {records && records.length > 0 ? (
                records.slice(0, maxItems).map((item) => (
                    <div className="table-row-container" key={item["id"]}>
                        <div className="table-row">
                            <div>{item["organization"]}</div>
                            <div>{item["username"]}</div>
                            <div>{item["email"]}</div>
                            <div>{item["phone_number"]}</div>
                            <div>{item["date_joined"]}</div>
                            <div className={'dashboard-table-status ' + item["status"]}>{item["status"]}</div>
                        </div>
                        <div className="table-options">
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                ))
            ) : (
                <p>No Users at this time</p>
            )}
        </div>
    );
};

export default DashboardRecords;
