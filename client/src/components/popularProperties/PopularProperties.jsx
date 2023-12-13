import React from 'react'
import classes from './popularProperties.module.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {request} from '../../utils/fetchAPI'
import img1 from '../../assets/Screenshot 2023-12-08 234038.png'
import img2 from '../../assets/Screenshot 2023-12-08 234129.png'
import img3 from '../../assets/Screenshot 2023-12-08 234321.png'

const PopularProperties = () => {
  const [numProperties, setNumProperties] = useState({})

  useEffect(() => {
      const fetchNumberProperties = async () => {
        try {
          const data = await request('/property/find/types', "GET")
          setNumProperties(data)
        } catch (error) {
          console.log(error.message)
        }
      }
      fetchNumberProperties()
    }, [])
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Different types of properties</h5>
          <h2>Best type of properties for you</h2>
        </div>
        <div className={classes.properties}>
            <Link className={classes.property} to={`/properties?type=beach&continent=0&priceRange=1`}>
              <img src={img1} />
              <div className={classes.quantity}>{numProperties?.beach} properties</div>
              <h5>Beach properties</h5>
            </Link>
            <Link className={classes.property} to={`/properties?type=mountain&continent=0&priceRange=1`}>
              <img src={img2} />
              <div className={classes.quantity}>{numProperties?.mountain}  properties</div>
              <h5>Mountain properties</h5>
            </Link>
            <Link className={classes.property} to={`/properties?type=village&continent=0&priceRange=1`}>
              <img src={img3} />
              <div className={classes.quantity}>{numProperties?.village}  properties</div>
              <h5>Village properties</h5>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default PopularProperties