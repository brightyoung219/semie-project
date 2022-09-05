import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeDisplay } from '../store';

function Login() {

  const navDisplay = useSelector( (state) => state.navDisplay.displayValue );
  let dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(changeDisplay('none'));
    console.log(navDisplay)
  }, [])
  

  
  return (
    <div>Login</div>
  )
}

export default Login;