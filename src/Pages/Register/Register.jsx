import React from 'react';
import './Register.css';
import {Link, useNavigate} from "react-router-dom";
import Login from "../Login/Login";




const Register = () => {

    const navigate = useNavigate();

    const handleRegister = (e) => {

    }

    return (
        <div className='registerContainer'>
            <div className='box'>
                <div className='mainBox'>
                    <div>
                        <label>Username: </label>
                        <input type='text' placeholder='Enter your username'/>
                    </div>

                    <div>
                        <label>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input type='email' placeholder='Enter your email'/>
                    </div>

                    <div>
                        <label>Password: &nbsp;</label>
                        <input type='password' placeholder='Enter your password'/>
                    </div>

                    <div>
                        <button onClick={(e)=>{handleRegister()}}>Register</button>
                    </div>
                    <span>Have an account, please<Link to="/"> Login </Link></span>
                </div>
            </div>
        </div>
    );
};

export default Register;