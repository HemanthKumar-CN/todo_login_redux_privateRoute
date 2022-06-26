import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { logout } from '../Redux/auth/auth.action';
import styles from './Navbar.module.css'

const Navbar = () => {
  const {getTodos} =useSelector((state)=> state.todoApp)
  const {isAuth} =useSelector((state)=> state.auth)
  const dispatch = useDispatch()
  
  function handleLogout()
  {
    dispatch(logout())
  }
  
  if(isAuth)
  {

  
  return (
    <div className={styles.nav}>
        <Link to="/" >Home</Link>
        <Link to="/todo" >Todo</Link>
        {/* <Link to='/login'>{isAuth ? 'LogOut' : 'Login'}</Link> */}
        
        {isAuth ? <button onClick={handleLogout}>Logout</button> : <button>Login</button>}
        Total: {getTodos.todos.length}
    </div>
  )
  }
}

export default Navbar