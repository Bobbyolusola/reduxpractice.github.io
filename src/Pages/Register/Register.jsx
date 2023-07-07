import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import { v4 as uuidv4 } from 'uuid';
import { useForm } from "react-hook-form";
import { AppRoutes } from '../../common/routes/AppRoutes.js';


const Register = () => {
  const {register, handleSubmit, formState: {errors},} = useForm();
  // const [formValues, setFormVales] = useState({
  //     username: '',
  //     email: '',
  //     password: '',
  // })
  const users = JSON.parse(localStorage.getItem('users'));
  const navigate = useNavigate();
  const [ dbErrors, setDBErrors ] = useState('');


  // const handleChange = (value, key) => {
  //     validate(value, key)
  //     setFormVales((prevState) =>({
  //         ...prevState,
  //         [key]: value
  //     }))
  // }
  const onSubmit = (data) => {
    handleRegister(data);
  };

  const handleRegister = (data) => {
    if (users) {

      const alreadyExist = users.some((user) => user.email === data.email);

      if(alreadyExist){

        setDBErrors('User with such email already exists')

      }

      const newUser = {...data, id: uuidv4()}

      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      setDBErrors('');
      navigate(AppRoutes.MAIN)

    } else {

      localStorage.setItem('users', JSON.stringify([ {
        ...data,
        id: uuidv4()
      } ]));
      setDBErrors('');
      navigate(AppRoutes.MAIN)

    }

  };


  return (
    <div className="registerContainer">
      <div className="box">
        <form className="mainBox" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              placeholder="Enter your username"
              {...register("username", {
                required: 'Username required',
                maxLength: {
                  value: 10,
                  message: "MAx 10"
                },
                minLength: {
                  value: 5,
                  message: 'Min 5'
                }
              })}
              //   value={formValues.username}
              // onChange={(e)=>handleChange(e.target.value, 'username')}
            />
            {errors?.username?.message && <p>{errors.username.message}</p>}
          </div>

          <div>
            <label>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="email" placeholder="Enter your email"
                   {...register("email", {required: true})}
              // value={formValues.email}
              // onChange={(e)=>handleChange(e.target.value, 'email')}
            />
          </div>

          <div>
            <label>Password: &nbsp;</label>
            <input type="password" placeholder="Enter your password"
                   {...register("password", {required: true, minLength: 5})}
              // value={formValues.password}
              // onChange={(e)=>handleChange(e.target.value, 'password')}
            />
          </div>

          <div>
            <button type="submit">Register</button>
          </div>
            {dbErrors && <p>{dbErrors}</p>}
          <span>Have an account, please<Link to="/"> Login </Link></span>
        </form>
      </div>
    </div>
  );
};

export default Register;
