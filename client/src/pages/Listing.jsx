import { useLocation } from "react-router-dom"
import {listings} from "../data"

const Listing = () => {

    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const listing = listings.filter(listing=>listing.id.toString() === path)[0]
    console.log(listing)
    return (
        <div className="listing" Key={listing.id} >
            <img src={listing.img} alt="" className="listImg"/>
            <h1 className="listTitle">{listing.name}</h1>
            <p className="listDesc">{listing.desc}</p>
            <p className="listLongDesc">{listing.longDesc}</p>
        </div>
    )
}

export default Listing