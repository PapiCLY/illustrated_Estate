import React, { useEffect } from 'react'
import { useState } from 'react'
import {request} from '../../utils/fetchAPI'
import person from '../../images/IMG_20180414_002553_476.jpg'
import {Link} from 'react-router-dom'
import {FaBed, FaSquareFull} from 'react-icons/fa'
import classes from './featuredProperties.module.css'

const FeaturedProperties = () => {
  const [featuredProperties, setFeaturedProperties] = useState([])

  useEffect(() => {
    const fetchFeatured = async()=>{
      try {
        const data = await request('/property/find/featured', "GET")
        setFeaturedProperties(data)
      } catch (error) {
        console.error(error.message)
      }
    }
    fetchFeatured()
  })
  return (
    <div id="Featured" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Properties you may like</h5>
          <h2>Our Featured Properties</h2>
        </div>
        <div className={classes.featuredProperties}>
        {featuredProperties?.map((property) => (
          <div key={property._id} className={classes.featuredProperty}>
            <Link to={`/propertyDetail/${property._id}`} className={classes.imgContainer}>
              <img src={property.img} alt="" />
            </Link>
            <div className={classes.details}>
              <div className={classes.priceAndOwner}>
                <span className={classes.price}>$ {property?.price}</span>
                <img src={person} className={classes.owner} alt="property owner" />
              </div>
              <div className={classes.moreDetails}>
                <span>{property?.beds} beds <FaBed className={classes.icon} /></span>
                <span>{property?.sqfeet} square feet <FaSquareFull className={classes.icon} /></span>
              </div>
              <div className={classes.desc}>
                {property?.desc}
              </div>
            </div>
          </div>
        ))}

        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties