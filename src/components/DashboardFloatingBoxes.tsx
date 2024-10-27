import './styles/dashboard.scss'

const DashboardFloatingBoxes = () => {
  return (
    <div className="dashboard-floating-boxes-container">
        <div className="box">
            <div className="icon1">
                <i className="fa-solid fa-user-group"></i>
            </div>
            <p>USERS</p>
            <span>2,453</span>
        </div>
        <div className="box">
            <div className="icon2">
                <i className="fa-solid fa-users"></i>
            </div>
            <p>ACTIVE USERS</p>
            <span>2,453</span>  
        </div>
        <div className="box">
            <div className="icon3">
                <i className="fa-solid fa-file-invoice-dollar"></i>
            </div>
            <p>USERS WITH LOAN</p>
            <span>12,453</span>
        </div>
        <div className="box">
            <div className="icon4">
                <i className="fa-solid fa-coins"></i>
            </div>
            <p>USERS WITH SAVINGS</p>
            <span>102,453</span>
        </div>
    </div>
  )
}

export default DashboardFloatingBoxes
