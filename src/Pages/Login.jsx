import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { loginAuth } from '../Redux/auth/auth.action'
import styles from './Login.module.css'
const Login = () => {
    const [email, setEmail] = useState('eve.holt@reqres.in')
    const [password, setPassword] = useState('cityslicka')

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const {msg,isAuth} =useSelector((state)=> state.auth)

    function handleLogin()
    {
        dispatch(loginAuth(email,password))
    }

    useEffect(() => {
      if(isAuth)
      {
        navigate('/')
      }
      
    }, [navigate,isAuth])
    

  return (
    <div>
        <h1>Login</h1>
        <input type="text" onChange={(e)=> setEmail(e.target.value)} value={email}  placeholder='Email' />
        <br />
        <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder='Password' />
        <br />
        <div className={styles.error}>{msg}</div>
        <br />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login