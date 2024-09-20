import { Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
const navigate=useNavigate()
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = 'Username is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.password) tempErrors.password = 'Password is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      alert("SignUp Successfully")
      navigate("/InfiniteScrolling")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <Input style={{width:"350px",marginLeft:"20px"}} name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email</label>
        <Input style={{width:"350px",marginLeft:"20px"}} name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <Input style={{width:"350px",marginLeft:"20px"}} name="password" value={formData.password} onChange={handleChange} type="password" />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <Button style={{marginTop:"10px"}} type="submit">Sign Up</Button>
    </form>
  );
};

export default SignupForm;
