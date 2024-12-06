import React, {useState} from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import validateSignupForm from './SignupValidation';
import { useDispatch } from 'react-redux';
import { store_image } from '../../utils/images';
import { login } from '../../redux/store/authSlice';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateSignupForm(formData);
    setErrors(validationErrors);
    console.log("submit button is clicked");
    try {
      if (Object.keys(validationErrors).length === 0) {
        
    
        const response = await fetch('http://localhost:5000/signup',{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        console.log(response.data); // Assuming the response contains a success message
        alert("User created successfully");
        dispatch(login());
        navigate('/'); // Redirect to the login page after successful signup
      }
    }catch (error) {
      console.error(error.response.data);  
    }
  };

  return (
    <SignupFormWrapper  style = {{
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), linear-gradient(248.75deg, rgba(0, 159, 157, 0.41) 0%, rgba(15, 10, 60, 0.41) 38.46%), url(${store_image}) center/cover no-repeat`
    }}>
        <div className="first-div">
            <h2>Sign Up</h2> <hr />
          <form action="" onSubmit={handleSubmit}>
          <div className='field'>
              <label className='labels' htmlFor="name">Name</label>
              <input type="text" placeholder="Enter Name" name='name'  value={formData.name} onChange={handleChange}  className="form-control"/>
              {errors.name && <span className='text-danger'>{errors.name}</span>}
            </div>
            <div className='field'>
              <label className='labels' htmlFor="email">Email</label>
              <input type="email" placeholder="Enter Email" name='email' value={formData.email} onChange={handleChange}  className="form-control"/>
              {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='field'>
              <label className='labels' htmlFor="password">Password</label>
              <input type="password" placeholder="Enter Password" name='password' value={formData.password} onChange={handleChange}  className="form-control" />
              {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button type="submit" className="btn">Sign up</button>
            <p className='text'> you are agree to our terms & conditions.</p>
            <Link to="/login" className="btn btn-second">Login</Link>
          </form>
        </div>
    </SignupFormWrapper>
  )
}

export default Signup;
const SignupFormWrapper=styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-violet-dark-active);
  height:70vh;


.first-div{
  background-color: #fff; /* Bootstrap white background color */
  padding: 20px;
  color:black;
  border-radius: 0.25rem; /* Bootstrap default border-radius */
  width: 35%;}

  h2{
    padding-bottom:10px;
    text-align: center;
  }
.field{
  margin-bottom: 1rem;
}
.labels{
  font-weight: bold;
  color:black;
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
    font-size:1rem;
  }
.btn{
  display: inline-block;
  font-weight: 400;
  color: #fff;
  width:100%;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color:  #272745;
  border: 1px solid #007bff;
  padding: 0.375rem 0.75rem;
  font-size:1.8rem;
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
}`;