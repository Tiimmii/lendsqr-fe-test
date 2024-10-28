import '../components/styles/dashboard.scss';

const UserPage = () => {
  return (
    <div className='filter-users-by-oragnization-container'>
        <div className="filter">
            <div className="filter-by-options">
                <p>Organization</p>
                <label>
                    <select>
                        <option value={''}>Select</option>
                        <option value={'Irorun'}>Irorun</option>
                        <option value={'Lendsqr'}>Lendsqr</option>
                        <option value={'Lendstar'}>Lendstar</option>
                    </select>
                </label>
            </div>
            <div className="filter-input">
                <p>Username</p>
                <input type='text'/>
            </div>
            <div className="filter-input">
                <p>Email</p>
                <input type='email'/>
            </div>
            <div className="filter-date">
                <p>Date</p>
                <input type='date' value={''} placeholder=''/>
            </div>
            <div className="filter-input">
                <p>Phone Number</p>
                <input type='number'/>
            </div>
            <div className="filter-by-options">
                <p>Status</p>
                <label>
                    <select>
                        <option value={''}>Select</option>
                        <option value={'Active'}>Active</option>
                        <option value={'Inactive'}>Inactive</option>
                        <option value={'Pending'}>Pending</option>
                        <option value={'Blacklisted'}>Blacklisted</option>
                    </select>
                </label>
            </div>
            <div className="filter-users-bottom">
                <button className='reset-button'>Reset</button>
                <button className='filter-button'>Filter</button>
            </div>
        </div>
    </div>
  )
}

const OptionBox = ()=>{
    return(
        <div className="option-box-container">
            
        </div>
    )
}

export default UserPage; OptionBox;
