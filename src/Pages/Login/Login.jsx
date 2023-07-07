import React,  { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { AppRoutes } from '../../common/routes/AppRoutes.js';

const Login = () => {
    const {register, handleSubmit, formState: {errors},} = useForm();
    const users = JSON.parse(localStorage.getItem('users'));
    const [ dbErrors, setDBErrors ] = useState('');
    const navigate = useNavigate();

    const onSubmit = (data) => {
        handleLogin(data);
    };

    const handleLogin = (data) => {
        if (users) {
            const isAuth = users.some((user) => (user.username === data.username && user.password === data.password));
            if(isAuth){
                setDBErrors('')
                navigate(AppRoutes.PROFILE)
                const authUser = users.filter((user) => (user.username === data.username && user.password === data.password))[0]
                localStorage.setItem('isAuthUser', JSON.stringify(authUser))
            }
            setDBErrors('Username or password incorrect');
        } else {
            setDBErrors('No user with this credentials');
        }

    };

    return (
        <div className='loginContainer'>
            <div className='box'>
                <form className='mainBox' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Username: </label>
                        <input type='text' placeholder='Enter your username'
                               {...register("username", {
                            required: 'Username required'})}/>
                        {errors?.username?.message && <p>{errors.username.message}</p>}
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type='password' placeholder='Enter your password'
                               {...register("password", {
                            required: 'password required'})}/>
                        {errors?.password?.message && <p>{errors.password.message}</p>}

                    </div>
                    <div>
                        <button type='submit'>Login</button>
                    </div>
                    {dbErrors && <p>{dbErrors}</p>}

                    <span>Don't have an account, please<Link to="Register"> Register </Link> </span>
                </form>
            </div>
        </div>
    );
};

export default Login;
