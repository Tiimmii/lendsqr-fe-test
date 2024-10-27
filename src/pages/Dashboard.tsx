import DashboardFloatingBoxes from "../components/DashboardFloatingBoxes"
import DashboardHeader from "../components/DashboardHeader"
import DashboardSideBar from "../components/DashboardSideBar"
import '../components/styles/dashboard.scss'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader/>
      <DashboardSideBar/>
      <div className="dashboard-content">
            <h1 className="dashboard-content-title">Users</h1>
            <DashboardFloatingBoxes/>
      </div>
    </div>
  )
}

export default Dashboard
