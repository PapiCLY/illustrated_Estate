import { Link } from 'react-router-dom';



const AuthenticatedNavbar = () => (
  <ul className="list">
    <li key="avatar" className="listItem">
      <img 
        src="/src/images/IMG_20180414_002553_476.jpg" 
        alt="" 
        className="avatar"
      />
    </li>
    <li key="username" className="listItem">Yehudah Christian</li>
    <li key="logout" className="listItem">Logout</li>
  </ul>
);

const UnauthenticatedNavbar = () => (
  <Link key="login" className="link" to="/login">
    Login
  </Link>
);

const Navbar = () => {
    const user = true
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Illustrated Estates
        </Link>
      </span>
      {user ? <AuthenticatedNavbar  /> : <UnauthenticatedNavbar />}
    </div>
  );
};

export default Navbar;
