const Navbar = () => {
    return(
        <div className="navbar">
            <span className="logo">Illustrated Estates</span>
            <ul className="list">
                <li className="listItem">
                    <img 
                    src="/src/images/IMG_20180414_002553_476.jpg" 
                    alt="" 
                    className="avatar"
                    />
                </li>
                <li className="listItem">Yehudah Christian</li>
                <li className="listItem">Logout</li>
            </ul>
        </div>
    )
}

export default Navbar;