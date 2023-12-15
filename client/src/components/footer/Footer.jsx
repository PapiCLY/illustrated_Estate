import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div id="About" className={classes.col} >
          <h2>About the App</h2>
          <p>Illustrated Estates offers you the opportunity to turn your dream of owning a whimsical toon home into a reality. 
            Explore our collection of enchanting properties and embark on a journey to find the home that perfectly complements your imagination.</p>
        </div>
        <div id="Contacts" className={classes.col}>
          <h2>Contacts</h2>
          <span>Caleb's Github: <a className={classes.git} href="https://github.com/Caleb-A-B" target='_blank'>Caleb-A-B</a></span>
          <span>Yehudah's Github: <a className={classes.git} href="https://github.com/PapiCLY" target='_blank'>PapiCLY</a></span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>San Francisco, CA</span>
          <span>Kissimmee, FL</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

