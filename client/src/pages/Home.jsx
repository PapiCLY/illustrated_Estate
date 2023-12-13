import React from "react";
import Card from "../components/Card"
import { listings } from "../data";



const Home = () => {
    return (
        <div className="home">
            {/* {listings.map(listing=>(
                <Card Key={listing.id} listing={listing}/>
            ))} */}

            {listings.map((listing, index) => (
                <Card listing={listing} key={index} />
            ))}
        </div>
    )
}


/* {propertyListings.map((listing, index) => (
    <Listing listing={listing} key={index} /> */

    /*{propertyListings.map(listing => (
    <Listing listing={listing} key={listing.address} /> */
export default Home;