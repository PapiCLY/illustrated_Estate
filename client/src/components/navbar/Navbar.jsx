import React from 'react'
import classes from './navbar.module.css'
import {Link, useNavigate} from 'react-router-dom'
import {BsHouseDoor} from 'react-icons/bs'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import {AiOutlineFileImage} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import {logout} from '../../redux/authSlice'
import {request} from '../../utils/fetchAPI'

const Navbar = () => {
  const [state, setState] = useState({})
  const [photo, setPhoto] = useState('')
  const [showForm, setShowForm] = useState(false)
  const {user, token} = useSelector((state)=> state.auth)
  const [showMobileNav, setShowMobileNav] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () =>{
    dispatch(logout())
    navigate('/signin')
  }

  const handleState = (e) => {
    setState(prev => {
      return{...prev, [e.target.name]: e.target.value}
    })
  }

  const handleCloseForm = () =>{
    setShowForm(false)
    setPhoto(null)
    setState({})
  }


  //handle list property
  const handleListProperty = async(e) => {
    e.preventDefault()

    let filename = null
    if(photo){
      const formData = new FormData() //use this to send images to the server
      filename = crypto.randomUUID() + photo.name
      formData.append('filename', filename)
      formData.append('image', photo)

    
      await request('/upload/image', 'POST', {},  formData, true)
    } else {
    return
  }

  try {
   
    const options = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }

    await request('/property', 'POST', options, {...state, img: filename})
    handleCloseForm()
  } catch (error) {
    console.error(error)
  }
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
            <span onClick={handleLogout} className={classes.logoutBtn} style={{cursor: "pointer"}}>Logout</span>
            <Link onClick={()=> setShowForm(true)} className={classes.list}>List a property</Link>
            </>
          }
        </div>
      </div>
      {
        showForm && (
            <div className={classes.listPropertyForm} onClick={handleCloseForm}>
                <div className={classes.listPropertyWrapper} onClick={(e)=> e.stopPropagation()}>
                    <h2>List Property</h2>
                    <form onSubmit={handleListProperty}>
                      <input type="text" placeholder='Title...' name='title' onChange={handleState} style={{color: "black"}}/>
                      <input type="text" placeholder='Type...' name='type' onChange={handleState} style={{color: "black"}}/>
                      <input type="text" placeholder='Desc...' name='desc' onChange={handleState} style={{color: "black"}}/>
                      <input type="text" placeholder='Location...' name='location' onChange={handleState} style={{color: "black"}}/>
                      <input type="number" placeholder='Price...' name='price' onChange={handleState} style={{color: "black"}}/>
                      <input type="number" placeholder='Sq. feet...' name='sqfeet' onChange={handleState} style={{color: "black"}}/>
                      <input type="number" placeholder='Beds...' name='beds' step={1} min={2}onChange={handleState} style={{color: "black"}}/>

                      <div style={{display: 'flex', alignItems: 'center', gap: '12px', width: '50%'}}>
                        <label htmlFor="photo">Property picture <AiOutlineFileImage/></label>
                        <input 
                        type="file" 
                        id='photo' 
                        style={{display: 'none'}} 
                        onChange={(e)=> setPhoto(e.target.files[0])}
                        />
                        {photo && <p>{photo.name}</p>}
                      </div>
                      <button>List Property</button>
                    </form>
                    <AiOutlineClose onClick={handleCloseForm} className={classes.remove}/>
                </div>
            </div>
        )
      }
      {
        <div className={classes.mobileNav}>
          {showMobileNav &&
          <div className={classes.navigation}>
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
          {
            !user ?
            <>
              <Link to='/signin' className={classes.signin}>Sign In</Link>
              <Link to='/signup' className={classes.signup}>Sign Up</Link>
            </>
            :
            <>
            <span>Hello {user.username}</span>
            <span onClick={handleLogout} className={classes.logoutBtn} style={{cursor: "pointer"}}>Logout</span>
            <Link onClick={()=> setShowForm(true)} className={classes.list}>List a property</Link>
            </>
          }
        </div>
        {
          showForm && showMobileNav
        }
          </div>
          }
        </div>
      }
    </div>
  )
}

export default Navbar;