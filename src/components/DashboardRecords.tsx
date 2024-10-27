import React from 'react'
import './styles/dashboard.scss'

type recordProps = {
    records : never[]
}

const DashboardRecords = ({records}:recordProps) => {
  return (
    <div className="dashboard-records-container">
        <div className="dashboard-records-table-header">
            <div className='table-header-texts'>
                ORGANIZATION
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className='table-header-texts'>
                USERNAME
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className='table-header-texts'>
                EMAIL
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className='table-header-texts'>
                PHONE NUMBER
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className='table-header-texts'>
                DATE JOINED
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className='table-header-texts'>
                STATUS
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
        {records? records.map((item) => (
        <div className='table-row-container'>
            <div className="table-row" key={item["id"]}>
                <div>{item["organization"]}</div>
                <div>{item["username"]}</div>
                <div>{item["email"]}</div>
                <div>{item["phone_number"]}</div>
                <div>{item["date_joined"]}</div>
                <div className={'dashboard-table-status '+item["status"]}>{item["status"]}</div>
            </div>
            <div className='table-options'><i className="fa-solid fa-ellipsis-vertical"></i></div>
        </div>
        )) : 
        <p>No Users at this time</p>}
    </div>
  )
}

export default DashboardRecords
