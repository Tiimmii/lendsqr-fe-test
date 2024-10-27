import { useEffect, useState } from "react"
import DashboardFloatingBoxes from "../components/DashboardFloatingBoxes"
import DashboardHeader from "../components/DashboardHeader"
import DashboardSideBar from "../components/DashboardSideBar"
import '../components/styles/dashboard.scss'
import axios from "axios"
import DashboardRecords from "../components/DashboardRecords"

const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://run.mocky.io/v3/bb22da96-cc89-4146-8c1e-b846102cbb1b')
        .then(result=>{setData(result.data)})
        .catch(error=>console.log(error))
    }, [])
    console.log(data)
  return (
    <div className="dashboard-container">
      <DashboardHeader/>
      <DashboardSideBar/>
      <div className="dashboard-content">
            <h1 className="dashboard-content-title">Users</h1>
            <DashboardFloatingBoxes/>
            <DashboardRecords records={data}/>
      </div>
    </div>
  )
}

export default Dashboard
