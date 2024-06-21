import { useState, React } from  'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const [inputs,setInputs] = useState({
    username : "",
    password : ""
  });
  const [error,setError] = useState(null);

  const navigate = useNavigate;
  const handleChange =(e)=>{
    setInputs(prev=>({...prev,[e.target.name] : e.target.value}))
  }
  // console.log(inputs)
  const p = document.getElementById("err");
  
  const handleSubmit = async (e) =>{
     e.preventDefault()
     try{
      const res = await axios.post('http://localhost:8500/api/auth/login',inputs)
      navigate('/Home')
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
        <h1>Login</h1>
        <form action="">
            <input required type="text" placeholder='username' onChange={handleChange}/>
            <input required type="password" placeholder='password' onChange={handleChange}/>
            <button  onClick={handleSubmit}>Login</button>
            {error && `<p>${error}</p>`}
            <span>Don't you have an account? <Link to="/register">Register</Link></span>
        </form>

    </div>
  )

}
export default Login