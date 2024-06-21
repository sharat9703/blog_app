import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Register = () => {
  const [inputs,setInputs] = useState({
    username : "",
    email : "",
    password : ""
  });
  const [error,setError] = useState(null);

  const navigate = useNavigate();
  const handleChange =(e)=>{
    setInputs(prev=>({...prev,[e.target.name] : e.target.value}))
  }
  // console.log(inputs)
  const p = document.getElementById("err");
  const handleSubmit= async (e) =>{
     e.preventDefault()
     try{
      const res = await axios.post('http://localhost:8500/api/auth/register',inputs)
      navigate('/login')
      console.log(res);
      p.style.display = 'block';
      p.innerHTML = 'User Registered!';
      p.style.color = 'green';
     }catch(err){
       setError(err.res.data);
       if(error){
        p.style.display = 'block';
      }
     }
     
  }
  return (
    <div className='auth'>
        <h1>Register</h1>
        <form>
            <input required type="text" placeholder='Username' name='username' onChange={handleChange}/>
            <input required type="email" placeholder='E-mail' name='email' onChange={handleChange}/>
            <input required type="password" placeholder='Password' name='password' onChange={handleChange}/>
            <button onClick={handleSubmit}>Register</button>
            <p id='err' style={{display : "none"}}>{`${error}`}</p>
            <span>Do you have an account? <Link to="/login">Login</Link></span>
        </form>

    </div>
  )
}

export default Register