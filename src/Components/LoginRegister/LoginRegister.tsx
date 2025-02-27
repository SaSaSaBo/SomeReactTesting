import React, { useState } from 'react';
import './loginRegister.css';
import edu from '../Assets/edu.png';
import key from '../Assets/key.png';
import mail from '../Assets/mail.png';
import phone from '../Assets/phone.png';
import user from '../Assets/user.png';


const LoginRegister = () => {

    const [action, setAction] = React.useState('Login');

  return (
    <div className="container">

        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">

            <div className="input"> {/* USERNAME */}
                <img src={user} alt="" />
                <input type="text" placeholder='Username'/>
            </div>

            {
                action !== 'Login' && (
                    <>
                        <div className="input"> {/* EMAIL */}
                            <img src={mail} alt="" />
                            <input type="email" placeholder='Email' />
                        </div>

                        <div className="input"> {/* PHONE */}
                            <img src={phone} alt="" />
                            <input type="phone" placeholder='Phone' />
                        </div>

                        <div className="input"> {/* EDUCATION */}
                            <img src={edu} alt="" />
                            <input type="education" placeholder='Education' />
                        </div>
                    </>
                )
            }

            <div className="input"> {/* PASSWORD */}
                <img src={key} alt="" />
                <input type="password" placeholder='Password'/>
            </div>

        </div>

        {action === 'Register' ? <div className="already">Do you already have an account?<span>Login now!</span></div> : <div className="forgot">Forgot Password?<span>Click here!</span></div>} 

        <div className="submit_container">
            <div className={action === 'Login' ? "submit gray" : "submit"} onClick={() => {setAction('Register')}}>Register</div>
            <div className={action === 'Register' ? "submit gray" : "submit"} onClick={() => {setAction('Login')}}>Login</div>
        </div>

    </div>      
  )
}

export default LoginRegister
