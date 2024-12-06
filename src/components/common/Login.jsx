import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import { login } from '../../redux/store/authSlice';
import { join_image } from '../../utils/images';
const Login = () => {
  const [values, setValues]= useState({
    email:'',
    password:''
  });
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const handleInput= (event) =>{
    setValues(prev =>({...prev, [event.target.name]: [event.target.value]}))
  }
  const navigate= useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const err = Validation(values);
    setErrors(err);

    if (err.email === "" && err.password === "") {
      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();

        if (response.status === 200) {
          alert("Login Successfully");
          dispatch(login());
          navigate('/');
        } else {
          alert("No Record Found");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
    return (
      <LoginFormWrapper  style = {{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), linear-gradient(248.75deg, rgba(0, 159, 157, 0.41) 0%, rgba(15, 10, 60, 0.41) 38.46%), url(${join_image}) center/cover no-repeat`
      }}>
        <div className="first-div">
          <h2>Login</h2> <hr/>
          <form action="" onSubmit={handleSubmit}>
            <div className='field'>
              <label className='labels' htmlFor="email">Email</label>
              <input type="email" name='email' placeholder="Enter Email" onChange={handleInput} className="form-control"/>
              {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='field'>
              <label className='labels' htmlFor="password">Password</label>
              <input type="password" name='password' placeholder="Enter Password" onChange={handleInput} className="form-control" />
              {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button type='submit' className="btn">Login</button>
            <p className='text'>you are agree to our terms & conditions.</p>
            <Link to="/signup" className="btn btn-second">Create Account</Link>
          </form>
        </div>
      </LoginFormWrapper>
    );
  };
  
  export default Login;

const LoginFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-violet-dark-active);
   height:60vh;

  


.first-div{
  background-color:#fff; /* Bootstrap white background color */
  padding: 20px;
  border: 1px solid #211e2e; 
  border-radius: 0.5rem; /* Bootstrap default border-radius */
  width: 35%;
}
h2{
  padding-bottom:10px;
  text-align: center;
}


.field{
  margin-bottom: 1rem;
}
.labels{
  font-weight: bold;
  padding-bottom: 10px;
}
.form-control{
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1.5rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: blue;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }}
  .text-danger{
    color:red;
    font-size:1.2rem;

  }

.btn{
  display: inline-block;
  font-weight: 500;
  color: #fff;
  font-size:1.8rem;
  width:100%;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #272745;
  border: 1px solid #007bff;
  padding: 0.375rem 0.75rem;
  
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    background-color:#7474a6;
    border-color: #0062cc;
  }
}
.text{
  font-size:1.4rem;
  padding:10px;
  font-family:arial;
  }
.btn-second{
  background:white;
  color:black;
}
`;

