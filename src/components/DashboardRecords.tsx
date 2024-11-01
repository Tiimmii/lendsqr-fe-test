import { useEffect, useState } from "react";
import "./styles/dashboard.scss";
import { UserPage } from "../pages/UserPage"; // Import components for user filtering options
import { Link } from "react-router-dom";
import { DashboardRecordsProps, FilterCriteria } from "./types/types";

// DashboardRecords Component for displaying and filtering user records
const DashboardRecords = ({ records, maxItems }: DashboardRecordsProps) => {
  const [activeHeader, setActiveHeader] = useState<string | null>(null); // State for tracking active filter header
  const [activeOption, setActiveOption] = useState<string | null>(null); // State for tracking active option box
  const [filteredRecords, setFilteredRecords] = useState(records); // State for filtered list of records

  // Update filteredRecords when the records prop changes
  useEffect(() => {
    setFilteredRecords(records);
  }, [records]);

  // Toggles display of UserPage (filter options) for the specific header
  const toggleUserPage = (headerLabel: string) => {
    setActiveHeader(activeHeader === headerLabel ? null : headerLabel); // Close if already open, otherwise open
  };

  // Toggles the display of the option box for a specific option
  const toggleOptionBox = (option: string) => {
    setActiveOption(activeOption === option ? null : option);
  };

  console.log(toggleOptionBox)

  // Filter function to filter records based on criteria
  const handleFilter = (filters: FilterCriteria) => {
    const filtered = records.filter((record) => {
      return (
        (!filters.organization || record.organization === filters.organization) && // Filter by organization
        (!filters.username || record.username.toLowerCase().includes(filters.username.toLowerCase())) && // Filter by username
        (!filters.email || record.email.toLowerCase().includes(filters.email.toLowerCase())) && // Filter by email
        (!filters.date || record.date_joined === filters.date) && // Filter by date joined
        (!filters.phoneNumber || record.phone_number.includes(filters.phoneNumber)) && // Filter by phone number
        (!filters.status || record.status === filters.status) // Filter by status
      );
    });
    setFilteredRecords(filtered); // Update the state with the filtered records
  };

  // Reset function to clear filters and show all records
  const handleReset = () => {
    setFilteredRecords(records);
  };

  return (
    <div className="dashboard-records-container">
      
      {/* Table Header with Columns for Sorting/Filtering */}
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
              onClick={() => toggleUserPage(headerLabel)} // Toggle filter options on icon click
              style={{ cursor: "pointer" }}
            ></i>
            {/* Display UserPage component if header is active for filtering */}
            {activeHeader === headerLabel && <UserPage onFilter={handleFilter} onReset={handleReset} />}
          </div>
        ))}
      </div>

      {/* Table Rows: Show Filtered Records or Display No Users Message */}
      {filteredRecords && filteredRecords.length > 0 ? (
        // Display filtered records, limiting to maxItems
        filteredRecords.slice(0, maxItems).map((item) => (
          <Link to={`/user-details/${item["_id"]}`} key={item["id"]} className="table-row-link">
            <div className="table-row-container">
              
              {/* Display individual record details in each row */}
              <div className="table-row">
                <div>{item["organization"]}</div>
                <div>{item["username"]}</div>
                <div>{item["email"]}</div>
                <div>{item["phone_number"]}</div>
                <div>{item["date_joined"]}</div>
                <div className={'dashboard-table-status ' + item["status"]}>{item["status"]}</div>
              </div>

              {/* Options menu (ellipsis icon) for each row */}
              <div className="table-options">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="loading-container" style={{padding:'7px'}}>
        <p>Loading Data</p>
        {[0,1,2,3].map((val)=>{  // Loop to display loading placeholders
          return(
            <div key={val} className={"loading "+`loading${val}`}></div>
          )
        })}
      </div> // Message if no records are available after filtering
      )}
    </div>
  );
};

export default DashboardRecords;
