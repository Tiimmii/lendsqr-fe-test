import React, { useEffect, useState } from "react";
import "./styles/dashboard.scss";
import { UserPage, OptionBox } from "../pages/UserPage";
import { Link } from "react-router-dom";

type DashboardRecordsProps = {
  records: Record<string, any>[];
  maxItems: number;
};

type FilterCriteria = {
    organization?: string;
    username?: string;
    email?: string;
    date?: string;
    phoneNumber?: string;
    status?: string;
};

const DashboardRecords = ({ records, maxItems }: DashboardRecordsProps) => {
  const [activeHeader, setActiveHeader] = useState<string | null>(null);
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const [filteredRecords, setFilteredRecords] = useState(records);

  useEffect(() => {
    setFilteredRecords(records);
  }, [records]);

  const toggleUserPage = (headerLabel: string) => {
    setActiveHeader(activeHeader === headerLabel ? null : headerLabel);
  };

  const toggleOptionBox = (option: string) => {
    setActiveOption(activeOption === option ? null : option);
  };

  const handleFilter = (filters:FilterCriteria) => {
    const filtered = records.filter((record) => {
      return (
        (!filters.organization ||
          record.organization === filters.organization) &&
        (!filters.username ||
          record.username
            .toLowerCase()
            .includes(filters.username.toLowerCase())) &&
        (!filters.email ||
          record.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (!filters.date || record.date_joined === filters.date) &&
        (!filters.phoneNumber ||
          record.phone_number.includes(filters.phoneNumber)) &&
        (!filters.status || record.status === filters.status)
      );
    });
    setFilteredRecords(filtered);
  };

  const handleReset = () => {
    setFilteredRecords(records);
  };

  return (
    <div className="dashboard-records-container">
      <div className="dashboard-records-table-header">
        {[
          "ORGANIZATION",
          "USERNAME",
          "EMAIL",
          "PHONE NUMBER",
          "DATE JOINED",
          "STATUS",
        ].map((headerLabel) => (
          <div className="table-header-texts" key={headerLabel}>
            {headerLabel}
            <i
              className="fa-solid fa-bars"
              onClick={() => toggleUserPage(headerLabel)}
              style={{ cursor: "pointer" }}
            ></i>
            {activeHeader === headerLabel && <UserPage onFilter={handleFilter} onReset={handleReset}/>}
          </div>
        ))}
      </div>

      {filteredRecords && filteredRecords.length > 0 ? (
        filteredRecords.slice(0, maxItems).map((item) => (
          <Link to={`/user-details/${item["_id"]}`} key={item["id"]} className="table-row-link">
            <div className="table-row-container">
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
          </Link>
        ))
      ) : (
        <p>No Users at this time</p>
      )}
    </div>
  );
};

export default DashboardRecords;
