import './styles/dashboard.scss';

// DashboardFloatingBoxes component to display key user statistics
const DashboardFloatingBoxes = () => {
  return (
    <div className="dashboard-floating-boxes-container">
      
      {/* Box for Total Users */}
      <div className="box">
        <div className="icon1">
          <i className="fa-solid fa-user-group"></i> {/* Icon for users */}
        </div>
        <p>USERS</p> {/* Label */}
        <span>2,453</span> {/* Statistic */}
      </div>

      {/* Box for Active Users */}
      <div className="box">
        <div className="icon2">
          <i className="fa-solid fa-users"></i> {/* Icon for active users */}
        </div>
        <p>ACTIVE USERS</p> {/* Label */}
        <span>2,453</span> {/* Statistic */}
      </div>

      {/* Box for Users with Loans */}
      <div className="box">
        <div className="icon3">
          <i className="fa-solid fa-file-invoice-dollar"></i> {/* Icon for loan holders */}
        </div>
        <p>USERS WITH LOAN</p> {/* Label */}
        <span>12,453</span> {/* Statistic */}
      </div>

      {/* Box for Users with Savings */}
      <div className="box">
        <div className="icon4">
          <i className="fa-solid fa-coins"></i> {/* Icon for savings */}
        </div>
        <p>USERS WITH SAVINGS</p> {/* Label */}
        <span>102,453</span> {/* Statistic */}
      </div>
      
    </div>
  );
};

export default DashboardFloatingBoxes;
