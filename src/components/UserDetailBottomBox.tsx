import { UserDetailProps } from "./types/types";

// Main UserDetailBottomBox component
const UserDetailBottomBox = ({ userDetails }: UserDetailProps) => {
    // Console log for debugging to check the user details being passed as props
    console.log(userDetails);

    return (
        <div className="user-detail-bottom-box-container">
            
            {/* Section for displaying personal information */}
            <div className="user-details">
                <p>Personal Information</p>
                <div className="outlined-user-details-container">
                    {
                        // Loop through each user detail record and render personal information fields
                        userDetails.map((detail) => (
                            <div className="outlined-user-details-container" key={detail.username}>
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
                                    <span style={{ textTransform: 'lowercase' }}>{detail.normalmail}</span>
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
                        ))
                    }
                </div>
                <div className="user-detail-divider"></div> {/* Divider between sections */}
            </div>

            {/* Section for displaying education and employment details */}
            <div className="user-details">
                <p>Education and Employment</p>
                <div className="outlined-user-details-container">
                    {
                        // Map through user details and render education and employment details
                        userDetails.map((detail) => (
                            <div className="outlined-user-details-container" key={detail.level_of_education}>
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
                                    <span style={{ textTransform: 'lowercase' }}>{detail.email}</span>
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
                        ))
                    }
                </div>
                <div className="user-detail-divider"></div> {/* Divider between sections */}
            </div>

            {/* Section for displaying social media links */}
            <div className="user-details">
                <p>Socials</p>
                <div className="outlined-user-details-container">
                    {
                        // Map through user details and render social media fields
                        userDetails.map((detail) => (
                            <div className="outlined-user-details-container" key={detail.Twitter}>
                                <div className='outlined-user-details'>
                                    <p>TWITTER</p>
                                    <span style={{ textTransform: 'lowercase' }}>{detail.Twitter}</span>
                                </div>
                                <div className='outlined-user-details'>
                                    <p>FACEBOOK</p>
                                    <span style={{ textTransform: 'lowercase' }}>{detail.Facebook}</span>
                                </div>
                                <div className='outlined-user-details'>
                                    <p>Instagram</p>
                                    <span>{detail.Instagram}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="user-detail-divider"></div> {/* Divider between sections */}
            </div>

            {/* Section for displaying guarantor information */}
            <div className="user-details">
                <p>Guarantor</p>
                <div className="outlined-user-details-container">
                    {
                        // Map through user details and render guarantor details
                        userDetails.map((detail) => (
                            <div className="outlined-user-details-container" key={detail.guarantor_fullname}>
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
                                    <span style={{ textTransform: 'lowercase' }}>{detail.guarantor_email}</span>
                                </div>
                                <div className='outlined-user-details'>
                                    <p>RELATIONSHIP</p>
                                    <span>{detail.relationship}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="user-detail-divider"></div> {/* Divider between sections */}
            </div>

            {/* Additional section for any repeated details, such as guarantor details again if needed */}
            <div className="user-details">
                <div className="outlined-user-details-container">
                    {
                        // Map through user details and render repeated guarantor details if necessary
                        userDetails.map((detail) => (
                            <div className="outlined-user-details-container" key={detail.guarantor_fullname + '-repeated'}>
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
                                    <span style={{ textTransform: 'lowercase' }}>{detail.guarantor_email}</span>
                                </div>
                                <div className='outlined-user-details'>
                                    <p>RELATIONSHIP</p>
                                    <span>{detail.relationship}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="user-detail-divider"></div> {/* Divider between sections */}
            </div>
        </div>
    );
};

export default UserDetailBottomBox;
