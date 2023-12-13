import React from 'react'
import classes from './navbar.module.css'
import {Link} from 'react-router-dom'
import {BsHouseDoor} from 'react-icons/bs'
import Hero from '../hero/Hero'

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to='/' className={classes.left}>
          Illustrated Estates <BsHouseDoor />
        </Link>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Featured</li>
          <li className={classes.listItem}>Contacts</li>
        </ul>
        <div className={classes.right}>
          <Link to='/signin' className={classes.signin}>Sign In</Link>
          <Link to='/signup' className={classes.signup}>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;