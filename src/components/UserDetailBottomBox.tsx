import { UserDetailProps } from "./types/types";

// Main UserDetailBottomBox component
const UserDetailBottomBox = ({ userDetails }: UserDetailProps) => {
    if (!userDetails) return null; // Return null if userDetails is not loaded

    return (
        <div className="user-detail-bottom-box-container">
            {/* Personal Information Section */}
            <div className="user-details">
                <p>Personal Information</p>
                <div className="outlined-user-details-container">
                    <div className='outlined-user-details'>
                        <p>FULL NAME</p>
                        <span>{userDetails.username}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>PHONE NUMBER</p>
                        <span>{userDetails.phone_number}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>EMAIL ADDRESS</p>
                        <span style={{ textTransform: 'lowercase' }}>{userDetails.normalmail}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>BVN</p>
                        <span>{userDetails.BVN}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>GENDER</p>
                        <span>{userDetails.gender}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>MARITAL STATUS</p>
                        <span>{userDetails.marital_status}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>CHILDREN</p>
                        <span>{userDetails.children}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>TYPE OF RESIDENCE</p>
                        <span>{userDetails.type_of_residence}</span>
                    </div>
                </div>
                <div className="user-detail-divider"></div>
            </div>

            {/* Education and Employment Section */}
            <div className="user-details">
                <p>Education and Employment</p>
                <div className="outlined-user-details-container">
                    <div className='outlined-user-details'>
                        <p>LEVEL OF EDUCATION</p>
                        <span>{userDetails.level_of_education}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>EMPLOYMENT STATUS</p>
                        <span>{userDetails.employment_status}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>SECTOR OF EMPLOYMENT</p>
                        <span>{userDetails.sector_of_employment}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>DURATION OF EMPLOYMENT</p>
                        <span>{userDetails.duration_of_employment}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>OFFICE EMAIL</p>
                        <span style={{ textTransform: 'lowercase' }}>{userDetails.email}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>MONTHLY INCOME</p>
                        <span>{userDetails.monthly_income}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>LOAN REPAYMENT</p>
                        <span>{userDetails.loan_repayment}</span>
                    </div>
                </div>
                <div className="user-detail-divider"></div>
            </div>

            {/* Social Media Section */}
            <div className="user-details">
                <p>Socials</p>
                <div className="outlined-user-details-container">
                    <div className='outlined-user-details'>
                        <p>TWITTER</p>
                        <span style={{ textTransform: 'lowercase' }}>{userDetails.Twitter}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>FACEBOOK</p>
                        <span style={{ textTransform: 'lowercase' }}>{userDetails.Facebook}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>INSTAGRAM</p>
                        <span>{userDetails.Instagram}</span>
                    </div>
                </div>
                <div className="user-detail-divider"></div>
            </div>

            {/* Guarantor Information Section */}
            <div className="user-details">
                <p>Guarantor</p>
                <div className="outlined-user-details-container">
                    <div className='outlined-user-details'>
                        <p>FULL NAME</p>
                        <span>{userDetails.guarantor_fullname}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>PHONE NUMBER</p>
                        <span>{userDetails.guarantor_phone_number}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>EMAIL ADDRESS</p>
                        <span style={{ textTransform: 'lowercase' }}>{userDetails.guarantor_email}</span>
                    </div>
                    <div className='outlined-user-details'>
                        <p>RELATIONSHIP</p>
                        <span>{userDetails.relationship}</span>
                    </div>
                </div>
                <div className="user-detail-divider"></div>
            </div>
        </div>
    );
};

export default UserDetailBottomBox;
