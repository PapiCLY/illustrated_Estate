import React from 'react'
import {useState} from 'react'
import {AiOutlineFileImage} from 'react-icons/ai'
import classes from './signup.module.css'
import {useNavigate, Link} from 'react-router-dom'

const Signup = () => {
  const [state, setState] =useState({})
  const [photo, setPhoto] = useState("")
  //const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleState = () => {
    setState(prev => {
      return{...prev, [e.target.name]: e.target.value}
    })
  }
  
  const handleSubmit = async(e) => {

  }


  console.log(state)
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name='username' placeholder='Username...' onChange={handleState}/>
            <input type="email" name='email' placeholder='Email...' onChange={handleState}/>
            <label htmlFor="photo">Upload photo <AiOutlineFileImage/></label>
            <input id="photo" type='file' style={{display: 'none'}} onChange={(e) => setPhoto(e.target.files[0])}/>
            <input type="password" name='password' placeholder='Password...' onChange={handleState}/>
            <button type="submit">Register</button>
            <p>Already have an account?<Link to="/signin">Sign in</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signup