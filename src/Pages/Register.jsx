import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className='auth'>
        <h1>Register</h1>
        <form>
            <input required type="text" placeholder='Username' />
            <input required type="email" placeholder='E-mail'/>
            <input required type="password" placeholder='Password' />
            <button>Register</button>
            <p>There is an error!</p>
            <span>Do you have an account? <Link to="/login">Login</Link></span>
        </form>

    </div>
  )
}

export default Register