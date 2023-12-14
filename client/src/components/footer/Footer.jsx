import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div id="About" className={classes.col} >
          <h2>About the App</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div id="Contacts" className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: 407 902 1082</span>
          <span>Caleb's Github: <a className={classes.git} href="https://github.com/Caleb-A-B" target='_blank'>Caleb-A-B</a></span>
          <span>Yehudah's Github: <a className={classes.git} href="https://github.com/PapiCLY" target='_blank'>PapiCLY</a></span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Orlando, FL</span>
          <span>Sanfrancisco, CA</span>
          <span>USA</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

