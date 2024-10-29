import React from 'react'

const UserDetailBottomBox = () => {
  return (
    <div className="user-detail-bottom-box-container">
        <div className="user-detail-bottom-box">
            <p>Personal Information</p>
            {[
                {option_header: "FULL NAME", option_value: "Grace Effiom"},
                {option_header: "FULL NAME", option_value: "Grace Effiom"},
                {option_header: "FULL NAME", option_value: "Grace Effiom"},
                {option_header: "FULL NAME", option_value: "Grace Effiom"},
                {option_header: "FULL NAME", option_value: "Grace Effiom"},
                {option_header: "FULL NAME", option_value: "Grace Effiom"},
                {option_header: "FULL NAME", option_value: "Grace Effiom"},
                {option_header: "FULL NAME", option_value: "Grace Effiom"},
            ].map((option)=>{
                return(
                    <div className='outlined-user-details'>
                        <p>{option.option_header}</p>
                        <span>{option.option_value}</span>
                    </div>
                )
            })
            }
        </div>
    </div>
  )
}

export default UserDetailBottomBox
