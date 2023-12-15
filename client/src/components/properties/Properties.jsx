import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { request } from '../../utils/fetchAPI'
import React, { useState } from 'react'
import classes from './properties.module.css'

const Properties = () => {
  const [allProperties, setAllProperties] = useState([])
  const [filteredProperties, setFilteredProperties] = useState([])
  const [state, setState] = useState(null)
  const query = (useLocation().search).slice(1) //slice(1) will get rid of the "?" at the beginning of the string
  const arrQuery = query.split('&') //split the query string into an array of strings
  const navigate = useNavigate()

  //fetch all properties
  useEffect(()=>{
    const fetchAllProperties = async() =>{
      const data = await request('/property/getAll', 'GET')
      setAllProperties(data)
    }
    fetchAllProperties()
  }, [])

  //parsing query params
//  useEffect(()=>{
//   if(arrQuery && allProperties?.length > 0 && state === null){
//     let formattedQuery = {}

//     arrQuery.forEach((option, index)=> {
//       const key = option.split('=')[0]
//       const value = option.split('=')[1]
    
//       formattedQuery = {...formattedQuery, [key]: value}

//       //if we are on the last index, assign the formatted Query obj to state
//       if(index === arrQuery.length - 1){
//         setState(formattedQuery)
//         handleSearch(formattedQuery)

//       }
//     })
//   }
//  })

  return (
    <div>Properties</div>
  )
}

export default Properties