import React from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import Register from "../Register/Register";

const Login = () => {
    return (
        <div className='loginContainer'>
            <div className='box'>
                <div className='mainBox'>
                    <div>
                        <label>Username: </label>
                        <input type='text' placeholder='Enter your username'/>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type='password' placeholder='Enter your password'/>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                    <span>Don't have an account, please<Link to="Register"> Register </Link> </span>
                </div>
            </div>
        </div>
    );
};

export default Login;