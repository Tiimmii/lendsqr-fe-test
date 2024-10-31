import '../components/styles/login.scss'
import grouped_icon from '../assets/Group.svg'
import sign_in_picture from '../assets/pablo-sign-in 1.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // State variables for email, password, and password visibility
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    // useNavigate hook for navigation after successful login
    const navigate = useNavigate();

    // Handler for updating email state
    const settingEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    // Handler for updating password state
    const settingPasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    // Toggles password visibility (show/hide)
    const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Prevent form submission on button click
        setShowPassword(prevState => !prevState);
    };

    // Sign-in function, checks hardcoded credentials, and navigates to dashboard if valid
    const signIn = () => {
        if (email === "adeyemi@gmail.com" && password === "adeyemi") {
            navigate("/dashboard");
        }
    };

    return (
        <div className='main-container'>
            {/* Logo container for top-left logo */}
            <div className="logo-container">
                <img src={grouped_icon} alt='lendsqr logo' />
            </div>
            
            {/* Left section with sign-in illustration */}
            <div className='sign-in-picture-container'>
                <img src={sign_in_picture} alt='lendsqr signin picture' />
            </div>
            
            {/* Login form container */}
            <div className="login-form-container">
                <div className="login-form">
                    {/* Top text displaying welcome message */}
                    <div className="login-texts-top">
                        <h1 className="welcome-primary">Welcome!</h1>
                        <span>Enter details to login.</span>
                    </div>
                    
                    {/* Form section for email and password input fields */}
                    <div className="form">
                        <form>
                            {/* Email input field */}
                            <input
                                placeholder='Email'
                                type='email'
                                value={email}
                                onChange={settingEmailValue}
                                required
                            />
                            
                            {/* Password input field with show/hide button */}
                            <div className="password-input">
                                <input
                                    placeholder='Password'
                                    value={password}
                                    onChange={settingPasswordValue}
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                />
                                {/* Toggle visibility button */}
                                <button
                                    className='show-hide-password-button'
                                    onClick={togglePasswordVisibility}
                                >
                                    {password ? (showPassword ? <p>HIDE</p> : <p>SHOW</p>) : ''}
                                </button>
                            </div>

                            {/* Forgot password link */}
                            <a href='#'>Forgot Password?</a>

                            {/* Login button, triggers signIn function */}
                            <button className='login-button' onClick={signIn}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
