import { useState } from 'react';
import '../components/styles/dashboard.scss';

type UserPageProps = {
    onFilter : any
    onReset : any
}

export const UserPage = ({onFilter, onReset}: UserPageProps) => {
    const [organization, setOrganization] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [status, setStatus] = useState('');
  
    const handleFilter = () => {
      onFilter({
        organization,
        username,
        email,
        date,
        phoneNumber,
        status
      });
    };
  
    const handleReset = () => {
      setOrganization('');
      setUsername('');
      setEmail('');
      setDate('');
      setPhoneNumber('');
      setStatus('');
      onReset();
    };
  
    return (
      <div className='filter-users-by-organization-container'>
        <div className="filter">
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
          <div className="filter-input">
            <p>Username</p>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="filter-input">
            <p>Email</p>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="filter-date">
            <p>Date</p>
            <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="filter-input">
            <p>Phone Number</p>
            <input type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
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
          <div className="filter-users-bottom">
            <button className='reset-button' onClick={handleReset}>Reset</button>
            <button className='filter-button' onClick={handleFilter}>Filter</button>
          </div>
        </div>
      </div>
    );
}

export const OptionBox = ()=>{
    return(
        <div className="option-box-container">
            <div className="options">
                <i className="fa-regular fa-eye"></i>
                <p>View Details</p>
            </div>
            <div className="options">
                <i className="fa-solid fa-user-xmark"></i>
                <p>Blacklist User</p>
            </div>
            <div className="options">
                <i className="fa-solid fa-user-check"></i>
                <p>Activate User</p>
            </div>
        </div>
    )
}

