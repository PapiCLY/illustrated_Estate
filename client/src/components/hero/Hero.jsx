import React from 'react'
import {useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import classes from './Hero.module.css'


const Hero = () => {
  //const [type, setType] = useState('beach')
  const [continent, setContinent] = useState('0')
  const [priceRange, setPriceRange] = useState('0')

  const handleSearch = () => {

  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Let us help you find your Toon Home!</h2>
        <h5>Search the best selection of cartoon real estate</h5>
        {/* <div className={classes.options}>
          <select onChange={(e)=> setType(e.target.value)}>
            <option disabled>Select type</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="village">Village</option>
          </select>
          <select onChange={(e)=> setPriceRange(e.target.value)}>
            <option disabled>Select Price Range</option>
            <option value="0">0-100,000</option>
            <option value="1">100,000-200,000</option>
            <option value="2">200,000-300,000</option>
            <option value="3">300,000-400,000</option>
            <option value="4">400,000-500,00</option>
          </select>
          <select onChange={(e)=> setContinent(e.target.value)}>
            <option disabled>Select Continent</option>
            <option value="0">Europe</option>
            <option value="1">Asia</option>
            <option value="2">Africa</option>
            <option value="3">South America</option>
            <option value="4">North America</option>
            <option value="5">Oceania</option>
          </select>
          <AiOutlineSearch className={classes.icon}/>
        </div> */}
      </div>
    </div>
  )
}

export default Hero