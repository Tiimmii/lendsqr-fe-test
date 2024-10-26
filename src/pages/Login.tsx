import '../components/login.scss'
import grouped_icon from '../assets/Group.svg'
import sign_in_picture from '../assets/pablo-sign-in 1.svg'

const Login = () => {
  return (
    <div className='main-container'>
      <div className="logo-container">
        <img src={grouped_icon}></img>   {/* top left logo */}
      </div>
      <div className='sign-in-picture-container'>
        <img src={sign_in_picture}></img> {/* Left Login picture */}
      </div>
      <div className="login-form-container">
        <div className="login-form">
            <div className="login-texts-top">
                <h1 className="welcome-primary">Welcome!</h1>
                <span>Enter details to login.</span>
            </div>
            <div className="form">
                <form>
                    <input placeholder='Email'></input>
                    <input placeholder='Password'></input>
                    <a href='#'>Forgot Password?</a>
                    <button className='login-button'>Login</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
