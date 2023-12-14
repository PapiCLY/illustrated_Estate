import React from 'react'
import classes from './navbar.module.css'
import {Link} from 'react-router-dom'
import {BsHouseDoor} from 'react-icons/bs'
import {useSelector} from 'react-redux'
import {useState} from 'react'

const Navbar = () => {
  const [showForm, setShowForm] = useState(false)
  const {user} = useSelector((state)=> state.auth)

  const handleState = (e) => {
    setState(prev => {
      return{...prev, [e.target.name]: e.target.value}
    })
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to='/' className={classes.left}>
          Illustrated Estates <BsHouseDoor />
        </Link>
        <ul className={classes.center}>
        <li className={classes.listItem}><a href="#">Home</a></li>
          <li className={classes.listItem}><a href="#About">About</a></li>
          <li className={classes.listItem}><a href="#Featured">Featured</a></li>
          <li className={classes.listItem}><a href="#Contacts">Contacts</a></li>
        </ul>
        <div className={classes.right}>
          {
            !user ?
            <>
              <Link to='/signin' className={classes.signin}>Sign In</Link>
              <Link to='/signup' className={classes.signup}>Sign Up</Link>
            </>
            :
            <>
            <span>Hello {user.username}</span>
            <span className={classes.logoutBtn}>Logout</span>
            <Link onClick={()=> setShowForm(true)} className={classes.list}>List a property</Link>
            </>
          }
        </div>
      </div>
      {
        showForm && (
            <div className={classes.lisPropertyForm} onClick={handleCloseForm}>
                <div className={classes.listPropertyWrapper} onClick={(e)=> e.stopPropagation()}>
                    <h2>List Property</h2>
                    <form onSubmit={handleListProperty}>
                      <input type="text" placeholder='Title...' name='title' onChange={handleState}/>
                    </form>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default Navbar;