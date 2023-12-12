import Card from "../components/Card"
import { listings } from "../data";


const Home = () => {
    return (
        <div className="home">
            {listings.map(listing=>(
                <Card Key={listing.id} listing={listing}/>
            ))}
        </div>
    )
}

export default Home;