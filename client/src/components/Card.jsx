import {Link} from 'react-router-dom';

const Card =  ({listing}) => {
    return (
        <div className="card">
            <Link className="link" to={`/listing/${listing.id}`}>
                <span className="title">{listing.name}</span>
                <img src={listing.img} alt="" className="img"/>
                <p className="desc">{listing.desc}</p>
                <button className="cardButton">Read More</button>
            </Link>
        </div>
    )
}

export default Card;