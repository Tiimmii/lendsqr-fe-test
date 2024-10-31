import { useEffect, useState } from "react";
import DashboardFloatingBoxes from "../components/DashboardFloatingBoxes";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSideBar from "../components/DashboardSideBar";
import '../components/styles/dashboard.scss';
import axios from "axios";
import DashboardRecords from "../components/DashboardRecords";

const Dashboard = () => {
    // State for user data, items per page, current page, and sidebar visibility
    const [data, setData] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [clickedSideBar, setClickedSideBar] = useState(true);

    // Fetch user data on initial load, with data storage and retrieval from localStorage
    useEffect(() => {
        // Attempt to get data from localStorage
        const storedData = localStorage.getItem("userDetails");
        if (storedData) {
            // If data is found in localStorage, parse and set it to state
            setData(JSON.parse(storedData));
        } else {
            // Fetch data from API if not available in localStorage
            axios.get('http://localhost:3000/users')
                .then(result => {
                    setData(result.data); // Set fetched data to state
                    localStorage.setItem("userDetails", JSON.stringify(result.data)); // Store data in localStorage
                })
                .catch(error => console.log(error));
        }
    }, []);

    // Calculate total pages based on data length and items per page
    const totalPages = Math.ceil(data.length / itemsPerPage);
    // Determine items to display based on current page and items per page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change for pagination
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Handle items per page change and reset to first page
    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page
    };

    // Render pagination buttons with ellipses for pages out of visible range
    const renderPagination = () => {
        const pages = [];
        const maxVisiblePages = 3; // Adjust to control the number of visible pages

        // First page button
        pages.push(
            <button
                key={1}
                onClick={() => handlePageChange(1)}
                className={currentPage === 1 ? "active" : ""}
            >
                1
            </button>
        );

        // Ellipsis before the middle section, if needed
        if (currentPage > maxVisiblePages + 1) {
            pages.push(<span key="start-ellipsis">...</span>);
        }

        // Display middle pages around the current page
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={currentPage === i ? "active" : ""}
                >
                    {i}
                </button>
            );
        }

        // Ellipsis after the middle section, if needed
        if (currentPage < totalPages - maxVisiblePages) {
            pages.push(<span key="end-ellipsis">...</span>);
        }

        // Last page button
        pages.push(
            <button
                key={totalPages}
                onClick={() => handlePageChange(totalPages)}
                className={currentPage === totalPages ? "active" : ""}
            >
                {totalPages}
            </button>
        );

        return pages;
    };

    return (
        <div className="dashboard-container">
            {/* Dashboard Header and Sidebar */}
            <DashboardHeader clickedSideBar={clickedSideBar} setClickedSideBar={setClickedSideBar} />
            {clickedSideBar && <DashboardSideBar clicked={clickedSideBar} setClicked={setClickedSideBar} />}

            {/* Main Content Area */}
            <div className="dashboard-content">
                <h1 className="dashboard-content-title">Users</h1>
                
                {/* Floating boxes displaying summary or other relevant information */}
                <DashboardFloatingBoxes />

                {/* Display records (users) for current page */}
                <DashboardRecords records={currentItems} maxItems={itemsPerPage} />

                {/* Pagination and Items Per Page Selector */}
                <div className="dashboard-content-bottom">
                    <label>
                        Showing
                        <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                        out of {data.length}
                    </label>
                    <div className="pagination">
                        {/* Previous page button */}
                        <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} className="pagination-buttons">
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        
                        {/* Render pagination buttons */}
                        {renderPagination()}

                        {/* Next page button */}
                        <button onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} className="pagination-buttons">
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
