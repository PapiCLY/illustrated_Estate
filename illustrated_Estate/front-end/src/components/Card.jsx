const Card =  ({listing}) => {
    return (
        <div className="card">
            <span className="title">{listing.name}</span>
            <img src={listing.img} alt="" className="img"/>
            <p className="desc">{listing.desc}</p>
            <button className="cardButton">Read More</button>
        </div>
    )
}

export default Card;