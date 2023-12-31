import React from 'react'
import classes from './signin.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {useState} from 'react'
import {request} from '../../utils/fetchAPI'
import {login} from '../../redux/authSlice'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleLogin = async(e) => {
      e.preventDefault()

      try {
        const options = {
          'Content-Type': 'application/json'
        }

        const data = await request('/auth/login', "POST", options, {email, password})
        console.log(data)
        dispatch(login(data))
        navigate('/')
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder='Email...' onChange={(e)=> setEmail(e.target.value)}/>
          <input type="password" placeholder='Password...' onChange={(e)=> setPassword(e.target.value)}/>
          <button type='submit'>Sign In</button>
          <p>Don't have an account? <Link to='/Signup'>Sign up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signin