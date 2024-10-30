import React from 'react'

type UserDetailBottomBoxProps = {
    userDetails: Record<string, any>[];
};

const UserDetailBottomBox = ({userDetails}:UserDetailBottomBoxProps) => {
    console.log(userDetails)
  return (
    <div className="user-detail-bottom-box-container">
        <div className="user-details">
            <p>Personal Information</p>
            <div className="outlined-user-details-container">
                {
                userDetails.map((detail)=>{
                    return(
                        <div className="outlined-user-details-container">
                            <div className='outlined-user-details'>
                                <p>FULL NAME</p>
                                <span>{detail.username}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>PHONE NUMBER</p>
                                <span>{detail.phone_number}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>EMAIL ADDRESS</p>
                                <span style={{ textTransform: 'lowercase'}}>{detail.normalmail}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>BVN</p>
                                <span>{detail.BVN}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>GENDER</p>
                                <span>{detail.gender}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>MARITAL STATUS</p>
                                <span>{detail.marital_status}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>CHILDREN</p>
                                <span>{detail.children}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>TYPE OF RESIDENCE</p>
                                <span>{detail.type_of_residence}</span>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className="user-detail-divider"></div>
        </div>
        <div className="user-details">
            <p>Education and Employment</p>
            <div className="outlined-user-details-container">
                {
                userDetails.map((detail)=>{
                    return(
                        <div className="outlined-user-details-container">
                            <div className='outlined-user-details'>
                                <p>LEVEL OF EDUCATION</p>
                                <span>{detail.level_of_education}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>EMPLOYMENT STATUS</p>
                                <span>{detail.employment_status}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>SECTOR OF EMPLOYMENT</p>
                                <span>{detail.sector_of_employment}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>DURATION OF EMPLOYMENT</p>
                                <span>{detail.duration_of_employment}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>OFFICE EMAIL</p>
                                <span style={{ textTransform: 'lowercase'}}>{detail.email}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>MONTHLY INCOME</p>
                                <span>{detail.monthly_income}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>LOAN REPAYMENT</p>
                                <span>{detail.loan_repayment}</span>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className="user-detail-divider"></div>
        </div>
        <div className="user-details">
            <p>Socials</p>
            <div className="outlined-user-details-container">
                {
                userDetails.map((detail)=>{
                    return(
                        <div className="outlined-user-details-container">
                            <div className='outlined-user-details'>
                                <p>TWITTER</p>
                                <span style={{ textTransform: 'lowercase'}}>{detail.Twitter}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>FACEBOK</p>
                                <span style={{ textTransform: 'lowercase'}}>{detail.Facebook}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>Instagram</p>
                                <span>{detail.Instagram}</span>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className="user-detail-divider"></div>
        </div>
        <div className="user-details">
            <p>Guarantor</p>
            <div className="outlined-user-details-container">
                {
                userDetails.map((detail)=>{
                    return(
                        <div className="outlined-user-details-container">
                            <div className='outlined-user-details'>
                                <p>FULL NAME</p>
                                <span>{detail.guarantor_fullname}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>PHONE NUMBER</p>
                                <span>{detail.guarantor_phone_number}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>EMAIL ADDRESS</p>
                                <span style={{ textTransform: 'lowercase'}}>{detail.guarantor_email}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>RELATIONSHIP</p>
                                <span>{detail.relationship}</span>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className="user-detail-divider"></div>
        </div>
        <div className="user-details">
            <p></p>
            <div className="outlined-user-details-container">
                {
                userDetails.map((detail)=>{
                    return(
                        <div className="outlined-user-details-container">
                            <div className='outlined-user-details'>
                                <p>FULL NAME</p>
                                <span>{detail.guarantor_fullname}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>PHONE NUMBER</p>
                                <span>{detail.guarantor_phone_number}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>EMAIL ADDRESS</p>
                                <span style={{ textTransform: 'lowercase'}}>{detail.guarantor_email}</span>
                            </div>
                            <div className='outlined-user-details'>
                                <p>RELATIONSHIP</p>
                                <span>{detail.relationship}</span>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className="user-detail-divider"></div>
        </div>
    </div>
  )
}

export default UserDetailBottomBox
