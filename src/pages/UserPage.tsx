import { useState } from 'react';
import '../components/styles/dashboard.scss';

// Define props type for UserPage component
type UserPageProps = {
    onFilter: (filters: object) => void; // Function to handle filtering with the applied filters as an object
    onReset: () => void; // Function to handle reset action
}

// UserPage component for filtering users
export const UserPage = ({ onFilter, onReset }: UserPageProps) => {
    // State variables for user filter inputs
    const [organization, setOrganization] = useState(''); // Selected organization
    const [username, setUsername] = useState(''); // Username input
    const [email, setEmail] = useState(''); // Email input
    const [date, setDate] = useState(''); // Date input
    const [phoneNumber, setPhoneNumber] = useState(''); // Phone number input
    const [status, setStatus] = useState(''); // User status selection

    // Handle filter button click
    const handleFilter = () => {
        // Call onFilter function with current filter values
        onFilter({
            organization,
            username,
            email,
            date,
            phoneNumber,
            status
        });
    };

    // Handle reset button click
    const handleReset = () => {
        // Clear all filter inputs
        setOrganization('');
        setUsername('');
        setEmail('');
        setDate('');
        setPhoneNumber('');
        setStatus('');
        // Call onReset function to reset filters
        onReset();
    };

    return (
        <div className='filter-users-by-organization-container'>
            <div className="filter">
                {/* Organization filter selection */}
                <div className="filter-by-options">
                    <p>Organization</p>
                    <label>
                        <select value={organization} onChange={(e) => setOrganization(e.target.value)}>
                            <option value=''>Select</option>
                            <option value='Irorun'>Irorun</option>
                            <option value='Lendsqr'>Lendsqr</option>
                            <option value='Lendstar'>Lendstar</option>
                        </select>
                    </label>
                </div>

                {/* Username input field */}
                <div className="filter-input">
                    <p>Username</p>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                {/* Email input field */}
                <div className="filter-input">
                    <p>Email</p>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                {/* Date input field */}
                <div className="filter-date">
                    <p>Date</p>
                    <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                </div>

                {/* Phone number input field */}
                <div className="filter-input">
                    <p>Phone Number</p>
                    <input type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>

                {/* Status selection dropdown */}
                <div className="filter-by-options">
                    <p>Status</p>
                    <label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value=''>Select</option>
                            <option value='Active'>Active</option>
                            <option value='Inactive'>Inactive</option>
                            <option value='Pending'>Pending</option>
                            <option value='Blacklisted'>Blacklisted</option>
                        </select>
                    </label>
                </div>

                {/* Filter and reset buttons */}
                <div className="filter-users-bottom">
                    <button className='reset-button' onClick={handleReset}>Reset</button>
                    <button className='filter-button' onClick={handleFilter}>Filter</button>
                </div>
            </div>
        </div>
    );
}

// OptionBox component for displaying actions on users
export const OptionBox = () => {
    return (
        <div className="option-box-container">
            <div className="options">
                <i className="fa-regular fa-eye"></i> {/* Icon for viewing user details */}
                <p>View Details</p>
            </div>
            <div className="options">
                <i className="fa-solid fa-user-xmark"></i> {/* Icon for blacklisting user */}
                <p>Blacklist User</p>
            </div>
            <div className="options">
                <i className="fa-solid fa-user-check"></i> {/* Icon for activating user */}
                <p>Activate User</p>
            </div>
        </div>
    );
}
