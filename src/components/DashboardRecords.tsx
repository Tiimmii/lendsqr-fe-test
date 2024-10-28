import React, { useState } from 'react'
import './styles/dashboard.scss'
import UserPage from '../pages/UserPage'

type DashboardRecordsProps = {
    records : never[]
    maxItems : number
}

const DashboardRecords = ({records, maxItems}:DashboardRecordsProps) => {

  return (
    <div className="dashboard-records-container">
        <div className="dashboard-records-table-header">
            <div className='table-header-texts'>
                ORGANIZATION
                <i className="fa-solid fa-bars"></i>
                <UserPage/>
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
        {records? records.slice(0, maxItems).map((item) => (
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
