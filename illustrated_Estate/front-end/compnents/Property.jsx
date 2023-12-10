import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { FaBed, FaBath, } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import DefaultImage from '../assets/DefaultImage.png'
import millify from 'millify';


const Property = ({ property }) => {
  return (
    <div className="card">
        <span className="title">{property.name}</span>
        <img src={property.img} alt="" className="img"/>
        <p className="desc">{listing.desc}</p>
        <button className="cardButton">Read More</button>
    </div>
)
  } 

export default Property