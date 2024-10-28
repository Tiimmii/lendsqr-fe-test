import '../components/styles/login.scss'
import grouped_icon from '../assets/Group.svg'
import sign_in_picture from '../assets/pablo-sign-in 1.svg'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const settingEmailValue = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }

    const settingPasswordValue = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }

    const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setShowPassword(prevState => !prevState);
    };

  return (
    <div className='main-container'>
      <div className="logo-container">
        <img src={grouped_icon} alt='lendsqr logo'></img>   {/* top left logo */}
      </div>
      <div className='sign-in-picture-container'>
        <img src={sign_in_picture} alt='lendsqr signin picture'></img> {/* Left Login picture */}
      </div>
      <div className="login-form-container">
        <div className="login-form">
            <div className="login-texts-top">
                <h1 className="welcome-primary">Welcome!</h1>
                <span>Enter details to login.</span>
            </div>
            <div className="form">
                <form>
                    <input placeholder='Email' type='email' value={email} onChange={settingEmailValue} required></input>
                    <div className="password-input">
                        <input placeholder='Password' value={password} onChange={settingPasswordValue} type={showPassword? 'text': 'password'} required></input>
                        <button className='show-hide-password-button' onClick={togglePasswordVisibility}>
                            {password ?showPassword ? <p>HIDE</p>: <p>SHOW</p>:''}
                        </button>
                    </div>
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
