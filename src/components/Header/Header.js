import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext.js";

const Header = () => {
  const { user } = useAuthContext();

  let guestNavigation = (
    <>
      <li><Link to="/login" className="button">Login</Link></li>
      <li><Link to="/register" className="button">Register</Link></li>
    </>
  );
  let userNavigation = (
    <>
      <li><Link to="/logout" className="button">Logout</Link></li>
      <li><Link to="/create" className="button">Create</Link></li>
    </>
  );

  return (
    <nav className=" nim-menu navbar navbar-default navbar-fixed-top">
      <div className="container">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">N<span className="themecolor">i</span>M</Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/" className="button">Home</Link></li>
            <li><Link to="/about" className="button">About</Link></li>
            <li><Link to="/work" className="button">Our Works</Link></li>
            <li><Link to="/stats" className="button">Status</Link></li>
            <li><Link to="/services" className="button">Services</Link></li>
            <li><Link to="/newsletter" className="button">Newsletter</Link></li>

            {user.email
              ? userNavigation
              : guestNavigation
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;