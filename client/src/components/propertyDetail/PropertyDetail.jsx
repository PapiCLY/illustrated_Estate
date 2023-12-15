import React, { useState } from 'react'
import classes from './propertyDetail.module.css'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {request} from '../../utils/fetchAPI'
import {useRef} from 'react'
import {FaBed} from 'react-icons/fa'
import {FaSquareFull} from 'react-icons/fa'

const PropertyDetail = () => {
  const {user} = useSelector((state)=> state.auth)
  const [propertyDetail, setPropertyDetail] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const {id} = useParams()
  const formRef = useRef()

useEffect(()=> {
  const fetchDetails = async()=>{
    try {
      const data = await request(`/property/find/${id}`, 'GET')
      setPropertyDetail(data)
    } catch (error) {
      console.error(error)
    }
  }
  fetchDetails()

}, [id])



  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <img src={`http://localhost:5000/images/${propertyDetail?.img}`}/>
        </div>
        <div className={classes.right}>
          <h3 className={classes.title}>
            Title: {`${propertyDetail?.title}`}
          </h3>
          <div className={classes.details}>
            <div>Type: <span>{`${propertyDetail?.type}`}</span></div>
            <div>Location: <span>{`${propertyDetail?.continent}`}</span></div>
          </div>
          <div className={classes.priceAndOwner}>
            <span className={classes.price}><span>Price: $</span>{`${propertyDetail?.price}`}</span>
            <span style={{display: "flex", alignItems: "center", gap: "12p2x"}}>
              Owner <img src={`http://localhost:5000/images/${propertyDetail?.currentOwner?.profileImg}`} className={classes.owner}/>
            </span>
          </div>
          <div className={classes.moreDetails}>
            <span>{propertyDetail?.beds} <FaBed className={classes.icon}/></span>
            <span>{propertyDetail?.sqfeet} <FaSquareFull className={classes.icon}/></span>
          </div>
        </div>
        <p className={classes.desc}>
          Desc: <span>{`${propertyDetail?.desc}`}</span>
        </p>
        <button className={classes.contactOwner}>
          Contact Owner
        </button>
      </div>
    </div>
  )
}

export default PropertyDetail