import { useState, React, useContext } from  'react'
import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [inputs,setInputs] = useState({
    username : "",
    password : ""
  });
  const [error,setError] = useState(null);

  const navigate = useNavigate();
 
  const {login} = useContext(AuthContext);
  
  // console.log(currentUser);


  const handleChange =(e)=>{
    setInputs(prev=>({...prev,[e.target.name] : e.target.value}))
    console.log(inputs);
  }
  // console.log(inputs)
  
  const handleSubmit = async (e) =>{
     e.preventDefault()
     try{
      await login(inputs);
      // const res = await axios.post('http://localhost:8500/api/auth/login',inputs)
      navigate('/')
      // console.log(res);
     }catch(err){
       setError("Please re-check your Login Credentials");
     }
    }
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form action="">
            <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
            <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
            <button  onClick={handleSubmit}>Login</button>
            {error && <p>{error}</p>}
            <span>Don't you have an account? <Link to="/register">Register</Link></span>
        </form>

    </div>
  )

}
export default Login