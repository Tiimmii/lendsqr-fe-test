import DashboardHeader from "../components/DashboardHeader"
import DashboardSideBar from "../components/DashboardSideBar"
import '../components/styles/dashboard.scss'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader/>
      <DashboardSideBar/>
    </div>
  )
}

export default Dashboard
