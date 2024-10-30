import { useEffect, useState } from "react";
import DashboardFloatingBoxes from "../components/DashboardFloatingBoxes";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSideBar from "../components/DashboardSideBar";
import '../components/styles/dashboard.scss';
import axios from "axios";
import DashboardRecords from "../components/DashboardRecords";

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [clickedSideBar, setClickedSideBar] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(result => { setData(result.data); })
            .catch(error => console.log(error));
    }, []);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber:number) => {
        setCurrentPage(pageNumber);
    };

    const handleItemsPerPageChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page
    };

    const renderPagination = () => {
        const pages = [];
        const maxVisiblePages = 3; // Change this to control the number of pages displayed on each side

        // First page
        pages.push(
            <button
                key={1}
                onClick={() => handlePageChange(1)}
                className={currentPage === 1 ? "active" : ""}
            >
                1
            </button>
        );

        // Show ellipsis if needed before the middle section
        if (currentPage > maxVisiblePages + 1) {
            pages.push(<span key="start-ellipsis">...</span>);
        }

        // Middle pages around the current page
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

        // Show ellipsis if needed after the middle section
        if (currentPage < totalPages - maxVisiblePages) {
            pages.push(<span key="end-ellipsis">...</span>);
        }

        // Last page
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
            <DashboardHeader clickedSideBar={clickedSideBar} setClickedSideBar={setClickedSideBar}/>
            {clickedSideBar && <DashboardSideBar clicked={clickedSideBar} setClicked={setClickedSideBar}/>}
            <div className="dashboard-content">
                <h1 className="dashboard-content-title">Users</h1>
                <DashboardFloatingBoxes />
                <DashboardRecords records={currentItems} maxItems={itemsPerPage} />
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
                        <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} className="pagination-buttons">
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        {renderPagination()}
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
